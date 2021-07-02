const express = require('express');
const app = express();
const data = require('./quoteDataServer');
const cors = require('cors');

const hostname = 'localhost';
const port = '3000';

app.use(cors());

//명언 데이터에서 랜덤으로 가져오기

//console.log(data.length);     200개?
let num = 0;
setInterval(() => {
  const day = new Date();
  num = parseInt(Math.random() * data.length);

  if (day.getSeconds() === 0) {
    console.log(num);
  }
}, 1000);
console.log(num);
app.get('/quote', (req, res) => {
  res.send({
    message: data[num].message,
    author: data[num].author,
  });
});

app.listen(3000, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
