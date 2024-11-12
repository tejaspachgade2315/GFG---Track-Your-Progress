# GeeksForGeeks User Statistics API

This project provides an API to fetch user statistics from GeeksForGeeks. It retrieves the number of problems solved by a user at different difficulty levels.

## Features

- Fetches user statistics from GeeksForGeeks.
- Provides total problems solved and breakdown by difficulty levels.
- Simple and easy-to-use API.

## Technologies Used

### Backend

- Node.js
- Express.js
- Cheerio
- Request
- Cors
- Dotenv

### Frontend

- React
- Axios
- Tailwind CSS

### Database

- MongoDB

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/tejaspachgade2315/GeeksForGeeksStatistics.git
   cd GeeksForGeeksStatistics
   ```

2. Install backend dependencies:

   ```sh
   cd backend
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following:

   ```env
   PORT=8111
   ```

4. Install frontend dependencies:
   ```sh
   cd ../frontend
   npm install
   ```

## Usage

1. Start the backend server:

   ```sh
   cd backend
   npm start
   ```

2. Start the frontend development server:

   ```sh
   cd ../frontend
   npm start
   ```

3. Access the frontend at `http://localhost:3000` and the API at `http://localhost:8111`.

## API Endpoints

### Get User Statistics

- **URL**: `/`
- **Method**: `GET`
- **Query Parameters**:

  - `userName` (required): GeeksForGeeks username.

- **Response**:
  ```json
  {
    "School": 10,
    "Basic": 20,
    "Easy": 30,
    "Medium": 40,
    "Hard": 50,
    "userName": "exampleUser",
    "totalProblemsSolved": 150
  }
  ```

## Example Request

```sh
curl "http://localhost:8111/?userName=exampleUser"
```
