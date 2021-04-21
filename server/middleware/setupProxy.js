const { request } = require('express');
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
const authCtrl = require('./controllers/authController')

const app = express();
const PORT = 4000;
const HOST = "localhost"
const API_SERVICE_URL = 'http://localhost:4000'

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/auth/session', (req, res) => {
  request(
    { url: API_SERVICE_URL},
    (error, response, body) => {
      if (error || response.statusCode !=200) {
      return res.status(500).json({
        type: 'error',
        message: err.message
      });
    }
    res.json(JSON.parse(body));
  }
  
  )
});


app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
})

