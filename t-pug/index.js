const express = require('express')
const app = express()

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', function(req, res){
  res.render('index.pug', {
    title: 'title main',
    message: 'hello main'
  })
})

app.get('/about', function(req, res){
  res.render('about', {
    title: 'title about',
    message: 'hello about!'
  })
})

app.listen(3000)