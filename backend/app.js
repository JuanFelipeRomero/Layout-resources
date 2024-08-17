const express = require('express');
const app = express();

const PORT = 1234;

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.listen(PORT, () => {
  console.log('Running server on port ' + PORT);
});
