const express = require('express')
const app = express();
const connectDB = require('./DbConnect')
const route = require('./routes/route')

app.use(express.json());

app.get('/home', (req, res) => {
    console.log("dkjffg");
    res.send("Welcome to the home page!");
});

app.use('/blog-app',route);

app.listen(3000,() =>{
    console.log("server is running at 3000")
});

connectDB()