const path = require("path");
const express = require('express');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "../../", "build")));
app.use(express.static("public"));
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "../../", "build", "index.html"));
});

app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(5000, () => {
    console.log(`Server is running on port 5000.`);
});
