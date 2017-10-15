var http = require('http'); //módulo http responsável pelo servidor
var express = require('express');
var app = require('./config/express')(app); //módulo express

require('./config/passport')();
require('./config/database.js')('mongodb://localhost/contatooh');


http.createServer(app).listen(app.get('port'), function(){
	console.log('Express Server escutando na porta ' + 
		app.get('port'));
});

