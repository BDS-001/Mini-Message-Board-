// --- Imports and Configuration ---
require("dotenv").config();
const express = require("express");
const errorHandler = require('./middleware/errorHandler');
const path = require("node:path");

const app = express();

// --- View Engine Setup ---
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// --- Error Handling Middleware ---
app.use(errorHandler);

// --- Server Configuration and Startup ---
const PORT = parseInt(process.env.USE_PORT, 10) || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!\nVisit: http://localhost:3000/`));