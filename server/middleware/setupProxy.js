const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware'); 

export const jsonPlaceholderProxy = createProxyMiddleware({
  target: 'http://jsonplaceholder.typicode.com',
  changeOrigin: true, // for vhosted sites, changes host header to match to target's host
  logLevel: 'debug',
});