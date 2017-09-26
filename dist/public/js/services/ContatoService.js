//public/js/services/ContatoService.js

//retorna uma instância de resource configurada
angular.module('contatooh').factory('Contato', ["$resource", function($resource){
	return $resource('/contatos/:id'); //toda serviço factory deve retornar um objeto
}]);