// config/express.js
var express = require('express'); //função 'require' tem como tarefa carregar módulos necessários para o script

//import express-load
var load = require('express-load');

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

var helmet = require('helmet');

module.exports = function(){
	var app = express();
	
	//configuração de ambiente
	app.set('port', 3000); //set servidor para escutar na porta 3000,
	
	//middleware
	app.use(express.static('../app')); //referencia onde está a aplicação web
	//view ejs (embedded javascript)
	//app.set('view engine', 'ejs');
	//diretório onde ficarão as views
	app.set('views', '../app/views');

	//novo middleware
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());

	app.use(cookieParser());
	app.use(session(
		{
		secret: 'homem avestruz',
		resave: true,
		saveUninitialized: true
		}
	));
	
	app.use(passport.initialize());
	app.use(passport.session());

	//ativa tudo que o helmet tem de proteção
	app.use(helmet());
	//abaixo alguns pedaços específicos do helmet para exemplo

	//desabilita a visualização da tecnologia
	//app.disable('x-powered-by');
	//serve para mascarar a tecnologia utilizada no express
	app.use(helmet.hidePoweredBy({setTo: 'PHP 5.5.14'}));
	//evita ataques do tipo clickjacking por <frame> ou <iframe>
	app.use(helmet.xframe());
	//evita cross-site scripting(XSS)
	app.use(helmet.xssFilter());
	//não permite que o browser infira o MIME type
	app.use(helmet.nosniff());

	//função load carregará todos os scripts(em ordem) das seguintes pastas
	load('models', {cwd: 'api'}) //muda o diretório padrão para app //modificação!
	.then('controllers')
	.then('routes')
	.into(app);

	//se nenhuma rota atender, direciona para página 404
	app.get('*', function(req, res){
		res.status(404).render('404');
	});

	return app;
};


