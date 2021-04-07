const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');
const { SERVER_PORT, DB_STRING, SESSION_SECRET } = process.env;

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


massive({
  connectionString:DB_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
}).then((dbInstance) => {
  app.set('db', dbInstance)

  console.log('massive win')
  app.listen(SERVER_PORT, () => {
    console.log(`We live on ${SERVER_PORT} a year`)
  })
}).catch(err => {
  console.log(err)
});