angular.module('contatooh').controller('ContatosController',
	function($scope, Contato){

		$scope.contatos = [
			{
				"_id": 1,
				"nome": "Contato Angular 1",
				"email": "cont1@empresa.com.br"
			},
			{
				"_id": 2,
				"nome": "Contato Angular 2",
				"email": "cont2@empresa.com.br"	
			},
			{
				"_id":3,
				"nome": "Contato Angular 3",
				"email": "cont3@empresa.com.br"
			}
		];

		$scope.mensagem = {texto: ''};

		$scope.filtro = '';

		//buscaContatos -> success, else -> error
		$scope.remove = function(contato){
			console.log('Contato removido com sucesso');
			Contato.delete({id: contato._id},
				buscaContatos, //chama busca contatos(atualiza lista) após deletar
				function(erro){
					console.log("Não foi possível remover o contato");
					console.log(erro);
					$scope.mensagem = {
						texto: 'Não foi possível remover o contato'
					}
				}
			);
		};

		function buscaContatos(){
		//recebe duas funções: uma para 'success' e outra para 'error'
			Contato.query(
				function(contatos){
					$scope.contatos = contatos;
					$scope.mensagem = {};
				},
				function(erro){
					console.log("Não foi possível obter a lista de contatos!");
					console.log(erro);
					$scope.mensagem = {
						texto: 'Não foi possível obter a lista'
					};
				}
			);
		}

		//inicializa todas as funções do controller
		$scope.init = function(){
			//executa a função de busca dos contatos
			buscaContatos();
		};

		//invoca init
		$scope.init();
		
	});




