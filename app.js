const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, './src/index.html'))
});

app.get('/passwordless', function(req, res, next) {
  setTimeout(() => {
    res.sendFile(path.join(__dirname, './src/passwordless.html'))
  }, 3000);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
