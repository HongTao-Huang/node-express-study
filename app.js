let express = require('express');
let app = express();
let test = require('./test');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/test.json', function (req, res) {
  res.send(test);
});

app.listen(3000);