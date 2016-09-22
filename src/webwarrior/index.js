var express = require('express');
var app = express();

var port = 3000

app.get('/hello', function (req, res) {
  res.send('Web Warrior 2... Coming soon!');
});

app.use(express.static('public'));

app.listen(port, function () {
  console.log("Web Warrior is listening.... (on port " + port + ")");
});
