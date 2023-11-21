process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const express = require('./config/express');
const app = express();
app.listen(4000);
module.exports = app;
console.log('Server running at http://localhost:4000/');
