# WIP : work in progress

# Node + TypeScript + React Logger API

## Project Description

This project involves building an application in Node.js using TypeScript to create an endpoint that handles POST requests for logging events. The API provides a simple and efficient way for other applications to send event logs, enabling centralized storage and analysis of records.

Additionally, the project includes a React web interface for easy visualization and searching of stored logs.

## Technologies Used

- Node.js
- TypeScript
- React

## Project Structure

The project is divided into two main parts:

1. **API (Node.js + TypeScript):**
   - Endpoint: `/api/log`
   - Method: POST
   - Accepted parameters in the request body:
     - `level` (string): Log level (info, warn, error, etc.)
     - `message` (string): Log message
     - `timestamp` (string, optional): Event timestamp

2. **Web Interface (React):**
   - Main page displaying stored logs.
   - Search and filter logs feature.

## Prerequisites

Make sure to have Node.js and npm installed on your machine before running the application.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/repository-name.git
   ```

2. Install project dependencies:

   ```bash
   cd repository-name
   yarn install
   ```

## Configuration

- Set up the necessary environment variables for the application, such as the port on which the API will run.

## Execution

### API

1. Navigate to the API directory:

   ```bash
   cd server
   ```

2. Run the application:

   ```bash
   yarn start
   ```

The API will be available at `http://localhost:<API_PORT>`.

### Web Interface

1. Navigate to the web interface directory:

   ```bash
   cd client
   ```

2. Run the application:

   ```bash
   yarn start
   ```

The web interface will be accessible at `http://localhost:<WEB_PORT>`.

## Usage

- Send POST requests to `http://localhost:<API_PORT>/api/log` with the required parameters to log events.

- Access the web interface to view and search stored logs.

## Contributions

Contributions are welcome! Feel free to open issues and pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
