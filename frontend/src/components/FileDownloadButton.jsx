import React from "react";
import axios from "axios";

const FileDownloadButton = ({ shortLink, fileName }) => {
  const handleDownload = async () => {
    try {
      const response = await axios.get(`/download/${shortLink}`, {
        responseType: "blob", // Specify that the response should be treated as a binary blob
      });

      // Create a temporary URL for the blob data
      const blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);

      // Create a hidden anchor element and simulate a click to trigger the download
      const downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.download = fileName; // Specify the desired file name
      downloadLink.click();

      // Revoke the URL to release resources
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <button onClick={handleDownload} className="download-button">
      Download {fileName}
    </button>
  );
};

export default FileDownloadButton;
