import React, { useState, useEffect } from "react";
import axios from "axios";
import FileDownloadButton from "./FileDownloadButton";

const FilePreviewPage = ({ match }) => {
  const [fileUrl, setFileUrl] = useState(null);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    // Fetch the file URL and file name from the API based on the route parameter (match.params.shortLink)
    fetchFileInfo(match.params.shortLink);
  }, [match.params.shortLink]);

  const fetchFileInfo = async (shortLink) => {
    try {
      const response = await axios.get(`http://localhost:5000/${shortLink}`);
      const data = response.data;
      setFileUrl(data.fileUrl);
      setFileName(data.fileName);
    } catch (error) {
      console.error("Error fetching file info:", error);
    }
  };

  return (
    <div className="file-preview-container">
      <h1 className="preview-heading">File Preview and Download</h1>
      {fileUrl ? (
        <div>
          <img
            src={fileUrl}
            alt="File Preview"
            className="file-preview-image"
          />
          <FileDownloadButton
            shortLink={match.params.shortLink}
            fileName={fileName}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FilePreviewPage;
