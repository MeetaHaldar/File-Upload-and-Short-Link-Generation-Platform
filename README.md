<h1 align="center">File Upload and Short Link Generation Platform</h1>

<p align="center">
  <strong>A web application for file uploads, short link generation, and downloads.</strong>
</p>
<p align="center">
  <a href="https://file-upload-and-short-link-generation-platform-aoqo.vercel.app/">
  Live preview
  </a>
</p>


---

## Overview

This web application allows you to upload files, generate short links for them, and provide download functionality for those files. It comprises both a React-based front end and a Node.js back end for file handling and link generation.

## Prerequisites

Before running the application, make sure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/): JavaScript runtime for running the backend.
- [React.js](https://react.dev/learn/): JavaScript library for frontend.
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/): Package managers for installing Node.js dependencies.
- [MongoDB](https://www.mongodb.com/): A NoSQL database for storing file metadata.

## Installation

1. **Clone this repository** to your local machine:

   ```bash
   git clone https://github.com/your-username/file-upload-short-link.git ```

2.Navigate to the project directory:
 ``` cd file-upload-short-link ```
 
 3. nstall frontend and backend dependencies:

- Frontend Dependencies (React):
``` # Change directory to the frontend folder
cd client

# Install frontend dependencies
npm install
# or
yarn install

# Return to the main project directory
cd ..
```
- Backend Dependencies (Node.js):
``` # Change directory to the backend folder
cd backend

# Install backend dependencies
npm install
# or
yarn install
```
4. Create a .env file in the backend directory and set the following environment variables:

``` PORT=5000
MONGO_STRING=your-mongodb-connection-string
```
Replace your-mongodb-connection-string with the actual connection string to your MongoDB database.

5. Start the backend server:
```
cd ../backend
npm run dev
# or
yarn run dev
```
6. Start the React application (in a separate terminal):
``` # Start the React application
cd ../client
npm run dev 
# or
yarn run dev
````

You're now ready to use the File Upload and Short Link Generation Platform. Access the application at http://localhost:3000 in your web browser and utilize the provided interface for uploading files, generating short links, and downloading files.
## API Endpoints

### File Upload
- **Endpoint:** `/upload`
- **Method:** POST
- **Description:** Upload a file and generate a short link for it.
- **Request Payload:** 
  - `file`: The file to be uploaded.
- **Response:**
  - `yourLink`: The generated short link to access the uploaded file.
- **Example Request:**
  ```bash
  curl -X POST -F "file=@/path/to/your/file.pdf" https://your-api-url.com/upload

- **Example Response:**
  ```bash
  { "yourLink": "https://your-app-url.com/abc123" }

### File Access
- Endpoint: /:shortLink
- Method: GET
- Description: Access the uploaded file using its short link.
- Response: The file to be downloaded or viewed.

### File Download
- Endpoint: /download/:shortLink
- Method: GET
- Description: Download the uploaded file using its short link.
- Response: The file download prompt.

### Root
- Endpoint: /
- Method: GET
- Description: A simple message to indicate the availability of the API.

## Usage

- Access the application at http://localhost:3000 in your web browser.
- Use the provided interface to upload files, generate short links, and download files.

## Dependencies
- React: JavaScript library for building user interfaces.
- react-router-dom: Library for routing in React applications.
- axios: A promise-based HTTP client for making requests to the server.
- Node.js: JavaScript runtime for the backend.
- express: Web application framework for Node.js.
- multer: Middleware for handling file uploads.
- mongoose: MongoDB object modeling for Node.js.
- cors: Middleware for enabling CORS in your Express app.
- uuid: A library for generating UUIDs.
- MongoDB: A NoSQL database for storing file metadata.

## Workflow:
- File Upload: When a user uploads a file, it's sent to the /upload endpoint.
- File Storage: The file is stored in a designated directory on the server.
- Short Link Generation: A unique short link (UUID) is generated for the uploaded file.
- Database Entry: Information about the uploaded file, including its original name and the generated short link, is stored in the database.
- File Access: Users can access the uploaded file using its short link (/:shortLink) or download it (/download/:shortLink) if desired.

## Purpose:
- File Management: The code handles the uploading and storage of files, making it easy for users to store and access their files online.
- Short Link Generation: The short link generation simplifies file access and sharing by providing a unique and concise URL.
- Database Storage: Storing file information in a database allows for efficient retrieval and management of uploaded files.
- CORS Configuration: Enabling CORS (Cross-Origin Resource Sharing) allows the application to be embedded in websites, enhancing its usability.

Overall, this code provides a foundation for building a web application that allows users to upload, manage, and share files with ease. It streamlines the process of file handling and sharing using short, user-friendly links.
