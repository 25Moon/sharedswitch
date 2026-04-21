const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));


let currentColor = "#eee";

app.get("/color", function (req, res) {
    res.json({color: currentColor});
});
app.post("/color", function (req, res) {
    currentColor = req.body.color;
    res.json({color: currentColor});
});



app.listen(port, "0.0.0.0", function() {
    console.log("Server running on port " + port);
});