const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true})); //parse

//to accept get requests
app.get("/register", (req, res) => {
    //for get request data comes in req.query
    let{user, password} = req.query;
    res.send(`standard GET response, welcome ${user}!`);
});

//to accept post requests
app.post("/register", (req, res) => {
    // console.log(req.body); 
    
    //for post request data comes in req.body
    let{user, password} = req.body;
    res.send(`standard POST response, welcome ${user}!`);
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});