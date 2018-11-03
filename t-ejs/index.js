const express = require('express')
const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', function(req, res){
  res.render('index', {
    title: 'Main title',
    message: 'Main message'
  })
})

app.get('/about', function(req, res){
  res.render('about', {
    title: 'About title',
    message: 'About message'
  })
})

app.listen(3000)