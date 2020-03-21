const express = require('express');
import users =  require("./api/users");
import http = require("http");
import mongoose = require("mongoose")
import chalk = require("chalk");
import bodyParser = require('body-parser');

// Constants
const PORT = 2000;
const HOST = '0.0.0.0';

//////////// Connect To DataBase

mongoose.connect("mongodb://127.0.0.1:27017/docker_test", {
    useNewUrlParser: true,
    useCreateIndex: true
});

// App
let app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

mongoose.connection.on("open", err => {
    if (err) console.log(chalk.red("Error connecting to our mongo database"));
    console.log(chalk.green("Connected to mongo database successfully"));
});


app.use(users)



let server = http.createServer(app);

app.listen(PORT, ()=>{
    console.log(`Running on http://${HOST}:${PORT}`);
});
