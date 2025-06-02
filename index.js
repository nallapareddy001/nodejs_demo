// index.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
res.send('Hello from Express! and my name is nallapa reddy');
});

app.listen(port, () => {
console.log('App running at http://localhost:${port} ');
});