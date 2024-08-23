/*
##########################################
USE ONLY NODE
##########################################
const http = require("http");
const fs = require("fs");
const port = 8888;

const server = http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" })
    fs.readFile("index.html", function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write("Error: File not found");
        } else {
            res.write(data);
        }
        res.end();
    })
})

server.listen(port, function(error) {
    if (error) {
        console.log("Something went wrong. ", error);
    } else {
        console.log("Server is listening on port " + port);
    }
})
*/

/*
##########################################
USE EXPRESS
##########################################
*/
const express = require("express");
const server = express();

server.use(express.static("public"));

server.listen(8080);