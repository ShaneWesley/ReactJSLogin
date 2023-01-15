const path = require("path");
const express = require('express');

const port = 5000;

const app = express();

app.use(express.json());

//  Routes
const users = require('./Routes/users');
app.use('/users', users);

//  Server Side Rendering (SSR)
app.use(express.static(path.join(__dirname, "../../", "build")));
app.use(express.static("public"));
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "../../", "build", "index.html"));
});

//  Server waitng for requests
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
