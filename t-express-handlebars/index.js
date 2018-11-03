const express = require('express')

const app = express()

var exphbs = require('express-handlebars')
// set handlebars
app.engine( '.hbs', exphbs( {
    extname: '.hbs',
    defaultLayout: 'main',
    partialsDir: [
      'views/partials/'
    ],
    helpers: {
        eq: function( v1, v2) { return v1 === v2 }
      }
  } ) )
app.set( 'view engine', '.hbs' )

app.get('/', function(req, res){
  res.render('test', {
    layout: 'main',
    title: 'main page',
    show_text: 'true',
  })
})

app.get('/about', function(req, res){
  res.render('about',{
    layout: 'main',
    title: 'about page',
    show_text: 'false',
  })
})

app.listen(3000)