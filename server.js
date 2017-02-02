/**
 * Created by wenming on 02/02/2017.
 */
// server.js
const express = require('express');
const path = require('path');

const fs = require("fs");

const app = express();

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')));

// send all requests to index.html so browserHistory in React Router works
app.get(['/', '/experience\*', '/articles\*', '/projects\*'], function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/data\*", function (req, res) {
    const queryClass = req.path.slice(6);
    switch (queryClass) {
        case "personalInfo":
            fs.readFile("assets/data/personalInfo.json", "utf-8", function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    res.send(data);
                }
            });
            break;
        case "projects":
            fs.readFile("assets/data/projects.json", "utf-8", function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    let projectsArray = JSON.parse(data).projects;
                    let sendProjects = [];
                    for (let i = 0; i < projectsArray.length && i < req.query.items; i++) {
                        sendProjects.push(projectsArray[i]);
                    }
                    res.send({"projects" :sendProjects});
                }
            });
            break;
        case "education":
            fs.readFile("assets/data/education.json", "utf-8", function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    res.send(data);
                }
            });
            break;
        case "skills":
            fs.readFile("assets/data/skills.json", "utf-8", function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    res.send(data);
                }
            });
            break;
    }
});

let PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log('Production Express server running at localhost:' + PORT);
});