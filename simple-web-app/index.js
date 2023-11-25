const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Bye bye, Warrior");
});

app.listen(8888, () => {
    console.log("Listening on port 8888");
});