// --- Imports and Configuration ---
require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");

// --- View Engine Setup ---
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// --- Error Handling Middleware ---
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
  });

// --- Server Configuration and Startup ---
const PORT = parseInt(process.env.USE_PORT, 10) || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!\nVisit: http://localhost:3000/`));