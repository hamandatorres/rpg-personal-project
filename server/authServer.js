const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const session = require('express-session');
const middlewareToken = require('./middleware/middleware')
const authCtrl = require('./controllers/authController')

const { SERVER_PORT2, SESSION_SECRET } = process.env;

app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 52
    }
  })
)

app.listen(SERVER_PORT2)

