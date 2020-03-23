"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const users = require("./api/users");
const http = require("http");
const mongoose = require("mongoose");
const chalk = require("chalk");
const bodyParser = require("body-parser");
const PORT = 2000;
const HOST = '0.0.0.0';
mongoose.connect("mongodb://0.0.0.0:27017/docker_test", {
    useNewUrlParser: true,
    useCreateIndex: true
});
let app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
mongoose.connection.on("open", err => {
    if (err)
        console.log(chalk.red("Error connecting to our mongo database"));
    console.log(chalk.green("Connected to mongo database successfully"));
});
app.use(users);
let server = http.createServer(app);
app.listen(PORT, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
//# sourceMappingURL=app.js.map