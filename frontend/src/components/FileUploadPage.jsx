import React, { useState } from "react";
import axios from "axios";
import "./FileUploadPage.css";

const FileUploadPage = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [link, setLink] = useState(null);
  const [showCopyConfirmation, setShowCopyConfirmation] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Preview the selected image
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setImagePreview(null); // Clear the image preview if the file is not an image
    }
  };

  const handleUpload = async () => {
    if (file) {
      try {
        setUploading(true);
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios.post(
          "http://localhost:5000/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const { yourLink } = response.data;
        setLink(yourLink);
      } catch (error) {
        console.error(error);
      } finally {
        setUploading(false);
      }
    }
  };

  const handleCopyToClipboard = () => {
    if (link) {
      navigator.clipboard
        .writeText(link)
        .then(() => {
          setShowCopyConfirmation(true);
          setTimeout(() => {
            setShowCopyConfirmation(false);
          }, 3000); // Hide the message after 3 seconds
        })
        .catch((error) => {
          console.error("Failed to copy link:", error);
        });
    }
  };

  return (
    <div className="file-upload-container">
      <h1 className="upload-heading">Upload File and Get Link</h1>
      {file ? (
        <div className="file-info">
          {file.type.startsWith("image/") && imagePreview ? (
            <img src={imagePreview} alt="Uploaded" className="image-preview" />
          ) : null}
          <p>Uploaded File: {file.name}</p>
        </div>
      ) : null}
      <label className="file-input-label">
        <input
          type="file"
          accept=".pdf,.docx,.jpg,.jpeg,.png"
          onChange={handleFileChange}
          className="file-input"
        />
        Choose File
      </label>
      <br />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="upload-button"
      >
        {uploading ? "Uploading..." : "Upload File"}
      </button>
      <br />
      {link ? (
        <div className="link-info">
          <p>Generated Link: {link}</p>
          <div className="copy-button-container">
            <button onClick={handleCopyToClipboard} className="copy-button">
              <i className="fas fa-copy"></i> Copy to Clipboard
            </button>
            {showCopyConfirmation && (
              <div className="copy-confirmation">Link copied!</div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FileUploadPage;
