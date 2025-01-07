# Unhandled Promise Rejection in Express.js Async Route

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous routes.  Improper error handling within async middleware can lead to server crashes.

## The Bug

The `bug.js` file contains an Express.js server with an asynchronous route (`/`).  The route performs an asynchronous operation (`someAsyncOperation`) that might fail. However, the code lacks proper error handling, causing the server to crash if the asynchronous operation rejects.

## The Solution

The `bugSolution.js` file provides a corrected version with robust error handling.  It includes a `.catch()` block within the route handler to gracefully handle errors and prevent server crashes.  The solution demonstrates best practices for handling potential errors in Express.js async operations, ensuring application stability and reliability.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`.  Observe that the server crashes intermittently due to the unhandled promise rejection. 
4. Run `node bugSolution.js`. Note that the server now handles errors gracefully, preventing crashes.  The error will be logged to the console, but the application will continue to run.