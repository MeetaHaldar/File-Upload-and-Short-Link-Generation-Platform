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
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/): Package managers for installing Node.js dependencies.
- [MongoDB](https://www.mongodb.com/): A NoSQL database for storing file metadata.

## Installation

1. **Clone this repository** to your local machine:

   ```bash
   git clone https://github.com/your-username/file-upload-short-link.git ```

  2.Navigate to the project directory:
 ``` cd file-upload-short-link ```
 3. nstall frontend and backend dependencies:

Frontend Dependencies (React):
``` # Change directory to the frontend folder
cd client

# Install frontend dependencies
npm install
# or
yarn install

# Return to the main project directory
cd ..
```
Backend Dependencies (Node.js):
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
npm start
# or
yarn start
```
6. Start the React application (in a separate terminal):
``` # Start the React application
cd ../client
npm start
# or
yarn start
```
You're now ready to use the File Upload and Short Link Generation Platform. Access the application at http://localhost:3000 in your web browser and utilize the provided interface for uploading files, generating short links, and downloading files.

## Usage

- Access the application at http://localhost:3000 in your web browser.
- Use the provided interface to upload files, generate short links, and download files.

## Dependencies
React: JavaScript library for building user interfaces.
react-router-dom: Library for routing in React applications.
axios: A promise-based HTTP client for making requests to the server.
Node.js: JavaScript runtime for the backend.
express: Web application framework for Node.js.
multer: Middleware for handling file uploads.
mongoose: MongoDB object modeling for Node.js.
cors: Middleware for enabling CORS in your Express app.
uuid: A library for generating UUIDs.
MongoDB: A NoSQL database for storing file metadata.


