const express = require('express');
const bodyParser = require('body-parser');
const ConnectDb = require("./configs/Dbconfigs")
const router = require("./routes/routes")


const app = express();
app.use(bodyParser.json());
app.use('/test-api',router);

app.listen(3000, () => {
    console.log("Server started at port 3000");
});

ConnectDb();
