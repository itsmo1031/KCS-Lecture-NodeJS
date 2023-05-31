const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const path = require('path');

dotenv.config();
const app = express();
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: 'session-cookie',
  })
);

const indexRouter = require('./routes');
const orderRouter = require('./routes/order');
const orderProcessRouter = require('./routes/orderprocess');

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('port', 3000);

app.use('/', indexRouter);
app.use('/order', orderRouter);
app.use('/orderprocess', orderProcessRouter);

app.set('view engine', 'ejs');
app.set('views', './routes');

app.listen(app.get('port'), () => {
  console.log('Listening on PORT:' + app.get('port'));
});
