import React from "react";
import PDFViewer from "../components/PDFViewer";

function ViewerPage() {
  return (
    <div>
        <PDFViewer isAdmin={false} />
    </div>
  );
}

export default ViewerPage;
