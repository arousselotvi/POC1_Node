const http = require('http') 

var express = require('express')
var app = express()

app.get('/', (request, response) => {
    response.render('Ceci fonctionne')
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html'); 
})

app.listen(10402);