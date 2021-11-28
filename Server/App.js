const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
var cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

var str = {};

app.post("/", function (req, res) {
  var ip = req.body.address;
  var url =
    "https://geo.ipify.org/api/v2/country,city?apiKey=at_qQa4oYWtPbhMQTFnPExgyNkIYnmdd&ipAddress=" +
    ip;

  https
    .get(url, function (response) {
      response.on("data", function (chunk) {
        str = JSON.parse(chunk);
      });
      response.on("end", function () {
        console.log(str);
      });
    })
    .end();
  res.send(str);
});

app.listen(3001, function () {
  console.log("Server started on port 3001");
});
