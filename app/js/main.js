//public/js/main.js
angular.module('contatooh', ['ngRoute', 'ngResource'])
	.config(function($routeProvider, $httpProvider){

		$httpProvider.interceptors.push('meuInterceptor');

		$routeProvider
		.when('/contatos',{
			templateUrl: 'views/contatos.html',
			controller: 'ContatosController'
		})
		.when('/contato/:contatoId', {
			templateUrl: 'views/contato.html',
			controller: 'ContatoController'
		})
		.when('/contato',{
			templateUrl: 'views/contato.html',
			controller: 'ContatoController'
		})
		.when('/auth', {
			templateUrl: 'views/auth.html'
		})
		.otherwise({redirectTo: '/contatos'});
	}); //(nome módulo, dependencias)
