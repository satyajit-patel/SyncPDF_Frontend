import React from "react";
import PDFViewer from "../components/PDFViewer";

function AdminPage() {
  return (
    <div>
        <PDFViewer isAdmin={true} />
    </div>
  );
}

export default AdminPage;
