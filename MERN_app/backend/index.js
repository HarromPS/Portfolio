const express = require('express');
const connectMongo = require("./dataBase");
const app = express();
var cors = require("cors")

const port = 3011;

connectMongo();

// when a post request is made by a user, then the information is parsed using express.json() middleware

// Use cors on all routes
app.use(cors())
app.use(express.json());

const Auth = require("./routes/auth.js");
const Notes = require("./routes/notes.js");
// Available routes

app.use("/api/auth", Auth);
app.use("/api/notes", Notes);

// app.use is request handler (get, post, delete, put, etc) whenever such 'api/auth' endpoints
// are requested

app.listen(port,()=>{
    console.log(`Successfully connected http://localhost:${port}`);
});