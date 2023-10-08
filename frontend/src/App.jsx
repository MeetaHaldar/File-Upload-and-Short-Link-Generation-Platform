import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FileUploadPage from "./components/FileUploadPage";
import FilePreviewPage from "./components/FilePreviewPage";
// import FileUploadPage ;
// import FilePreviewPage from "./FilePreviewPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FileUploadPage />} />
        <Route path="/preview/:fileUrl" element={<FilePreviewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
