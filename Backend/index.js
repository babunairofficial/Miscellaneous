const express = require("express");
const app = express();
const port = 8080;

//to accept get requests
app.get("/register", (req, res) => {
    res.send("standard GET response");
});

//to accept post requests
app.post("/register", (req, res) => {
    res.send("standard POST response");
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});