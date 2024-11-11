import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";


// const socket = io("http://localhost:5000");
const socket = io("https://syncpdf-backend.onrender.com");

function PDFViewer({ isAdmin }) {
  const [pageNumber, setPageNumber] = useState(1);
  const [fileUrl, setFileUrl] = useState("");

  // Admin selects a PDF file
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setFileUrl(fileUrl);
      socket.emit("fileSelected", fileUrl);
    }
  };

  // Admin sets the PDF link
  const handleLinkChange = () => {
    const link = prompt("Enter PDF Link:");
    if (link) {
      setFileUrl(link);
      socket.emit("fileSelected", link);
    }
  };

  const handlePageChange = (offset) => {
    const newPage = pageNumber + offset;
    if (newPage >= 1) {
      setPageNumber(newPage);
      if (isAdmin) {
        socket.emit("adminPageChange", newPage);
      }
    }
  };

  // Sync PDF file and page between viewers
  useEffect(() => {
    socket.on("fileSelected", (fileUrl) => {
      setFileUrl(fileUrl);
    });
    socket.on("pageChange", (page) => {
      setPageNumber(page);
    });

    return () => {
      socket.off("fileSelected");
      socket.off("pageChange");
    };
  }, []);

  return (
    <div className="bg-slate-500 h-screen flex items-center justify-center">
      <div className="w-4/5 max-w-3xl mx-auto bg-white rounded-md p-4">
        {isAdmin && (
          <div className="flex flex-col items-center mb-4">
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="my-2"
            />
            <button
              onClick={handleLinkChange}
              className="px-4 py-2 mb-4 rounded bg-teal-500 text-white font-bold hover:bg-teal-700 transition"
            >
              Load PDF from Link
            </button>
          </div>
        )}

        {fileUrl ? (
          <>
            <div className="border h-96 mb-4">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl={fileUrl} />
              </Worker>
            </div>
            {isAdmin && (
              <div className="flex justify-between">
                <button
                  onClick={() => handlePageChange(-1)}
                  className="px-4 py-2 rounded bg-teal-500 text-white font-bold hover:bg-teal-700 transition"
                >
                  Previous
                </button>
                <button
                  onClick={() => handlePageChange(1)}
                  className="px-4 py-2 rounded bg-teal-500 text-white font-bold hover:bg-teal-700 transition"
                >
                  Next
                </button>
              </div>
            )}
            <div className="text-center mt-2">Page {pageNumber}</div>
          </>
        ) : (
          <div className="text-center text-gray-700">
            Waiting for admin to load a PDF file...
          </div>
        )}
      </div>
    </div>
  );
}

export default PDFViewer;
