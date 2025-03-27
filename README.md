# Mini Message Board

A simple interactive message board built with Express.js and PostgreSQL that allows users to create, view, and interact with messages.

## Overview

This project is a web application that lets users post messages to a public board. Each message includes the author's name, content, and timestamp. Users can view all messages on the homepage and click to see details for individual messages.

## Features

- View all messages on the homepage
- Create new messages via a form
- View detailed information for specific messages
- PostgreSQL database integration for data persistence
- Error handling with custom error pages

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **EJS** - Template engine
- **PostgreSQL** - Database for storing messages
- **dotenv** - Environment variable management

## Project Structure

```
mini-message-board/
├── controllers/
│   └── messageController.js     # Controller for message-related operations
├── db/
│   ├── dbSetup.js               # Database setup and initialization
│   ├── pool.js                  # PostgreSQL connection pool
│   └── queries.js               # Database query functions
├── middleware/
│   └── errorHandler.js          # Custom error handling middleware
├── public/                      # Static assets
├── routes/
│   ├── indexRouter.js           # Main routes
│   └── newMessageRouter.js      # Routes for creating new messages
├── utils/
│   └── customErrors.js          # Custom error classes
├── views/
│   ├── partials/
│   │   └── messageFormat.ejs    # Reusable message display component
│   ├── 404.ejs                  # 404 error page
│   ├── index.ejs                # Homepage displaying all messages
│   ├── messageDetails.ejs       # Detailed view for a single message
│   └── newMessage.ejs           # Form for creating new messages
├── .env                         # Environment variables (not included in repo)
├── app.js                       # Main application file
└── README.md                    # This file
```

## Setup and Installation

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn
- PostgreSQL installed and running

### Installation Steps

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/mini-message-board.git
   cd mini-message-board
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a PostgreSQL database:
   ```
   createdb mini_message_board
   ```

4. Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_USERNAME=your_postgres_username
   DATABASE_PASS=your_postgres_password
   DATABASE_PORT=5432
   USE_PORT=3000
   ```

5. Start the application:
   ```
   npm start
   ```

6. Visit `http://localhost:3000` in your browser to use the application.

## Usage

### Viewing Messages

- The homepage (`/`) displays all messages in the database
- Each message shows the content, author's name, and posting date

### Creating a New Message

1. Click the "New Message" link on the homepage
2. Fill out the form with your name and message
3. Click "Submit" to post your message
4. You'll be redirected to the homepage where your new message will appear

### Viewing Message Details

- Click the "View Details" button on any message to see its full details
- The details page shows the complete message content, author, and posting date
- Use the "Back to all messages" link to return to the homepage

## Database Structure

The application uses a single PostgreSQL table:

```sql
CREATE TABLE messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255),
  message TEXT,
  date TIMESTAMP WITH TIME ZONE
);
```

## Error Handling

- The application includes custom error handling middleware
- 404 errors are handled with a dedicated error page
- Other errors return appropriate HTTP status codes and error messages