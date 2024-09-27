// --- Imports and Configuration ---
require("dotenv").config();
const express = require("express");
const errorHandler = require('./middleware/errorHandler');
const AppError = require('./utils/customErrors');
const path = require("node:path");

const newMessageRouter = require('./routes/newMessageRouter')
const indexRouter = require('./routes/indexRouter')

const app = express();

// --- View Engine Setup ---
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// --- Routes ---
app.use('/new', newMessageRouter)
app.use('/', indexRouter)

// 404 handler
app.use((req, res, next) => {
    next(new AppError("ERROR 404 Webpage does not exist", 404));
});

// --- Error Handling Middleware ---
app.use(errorHandler);

// --- Server Configuration and Startup ---
const PORT = parseInt(process.env.USE_PORT, 10) || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!\nVisit: http://localhost:3000/`));