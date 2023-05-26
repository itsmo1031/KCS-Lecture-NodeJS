const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('port', 3000);

let totalPrice = 0;

app.get('/order', (req, res) => {
  res.sendFile(path.join(__dirname, '/order.html'));
});

app.post('/orderprocess', (req, res) => {
  price = parseInt(req.body.menu);
  if (price == 0) {
    totalPrice = 0;
  } else {
    totalPrice += price;
  }
  const html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <div id="price-section">총 매출: <span id="price">${totalPrice}</span>원</div>
      <button type="submit">Submit</button>
    </body>
  </html>
  `;
  res.send(html);
});

app.listen(app.get('port'), () => {
  console.log('Listening on PORT:' + app.get('port'));
});
