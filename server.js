/**
 * Created by wenming on 02/02/2017.
 */
// server.js
const express = require('express');
const path = require('path');
const compression = require('compression');
const bodyParser = require('body-parser');

const fs = require("fs");

const app = express();

app.use(compression());
// serve static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')));

// send all requests to index.html so browserHistory in React Router works
app.get(['/', '/settings\*', '/experience\*', '/articles\*', '/projects\*'], function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: "5mb"}));
app.post("/login", function (req, res) {
    fs.readFile("assets/data/account.json", "utf-8", function (err, data) {
        let account = JSON.parse(data);
        let user = req.body;
        let keepTime = new Date().getDate();
        if (user.username === account.username && user.password === account.password) {
            switch (user.staySignIn) {
                case "no":
                    break;
                case "one day":
                    keepTime += 1;
                    break;
                case "one week":
                    keepTime += 7;
                    break;
                case "one month":
                    keepTime += 31;
                    break;
            }
            let token = new Date();
            token.setDate(keepTime);
            res.end(token.getTime().toString());
        } else {
            res.end("");
        }
    });
});

app.post("/settings\*",function (req, res) {
    const queryClass = req.path.slice(10);
    let token = req.body.token;
    let currentToken = new Date().getTime();
    if (token < currentToken) {
        res.send("fail");
        return;
    }
    switch (queryClass) {
        case "login":
            res.send("success");
            break;
        case "personal":
            let personalInfo = req.body;

            let pic = personalInfo.img;
            let data = pic.slice(22);
            let buffer = new Buffer(data, 'base64');
            fs.writeFile('public/assets/image/favicon.png', buffer);
            delete personalInfo.img;
            delete personalInfo.token;
            fs.writeFile("assets/data/personalInfo.json", JSON.stringify(personalInfo), function () {
                res.send("success");
            });
            break;
    }
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
                    res.send({"projects": sendProjects});
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