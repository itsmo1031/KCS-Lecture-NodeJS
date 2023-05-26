const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session); // 1
const path = require('path');

const app = express();
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: new FileStore(),
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('port', 3000);

app.get('/order', (req, res) => {
  res.sendFile(path.join(__dirname, '/order.html'));
});

app.post('/orderprocess', (req, res) => {
  price = parseInt(req.body.menu);
  let totalPrice = req.session.totalPrice || 0;
  if (price == 0) {
    totalPrice = 0;
  } else {
    totalPrice += price;
  }
  req.session.totalPrice = totalPrice;
  const html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="css/app.css" />
      <title>Document</title>
    </head>
    <body>
    <div id="price-section">총 매출: <span id="price">${totalPrice}</span>원</div>
      <form action="/orderprocess" method="post">
        <ul>
          <li>
            <label for="menu">짜장면(500)</label>
            <input type="radio" name="menu" id="zza" value="500" />
          </li>
          <li>
            <label for="menu">짬뽕(700)</label>
            <input type="radio" name="menu" id="zzam" value="700" />
          </li>
          <li>
            <label for="menu">초기화</label>
            <input type="radio" name="menu" id="reset" value="0" />
          </li>
        </ul>
        <button type="submit">Submit</button>
      </form>
    </body>
  </html>
  
  `;
  res.send(html);
});

app.listen(app.get('port'), () => {
  console.log('Listening on PORT:' + app.get('port'));
});
