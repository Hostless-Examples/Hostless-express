const express = require('express')
const path = require('path');

const app = express()
const port = process.env.PORT || 3005

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})