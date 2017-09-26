//app/controllers/contato.js

var contatos = [
		{_id: 1, nome:'Contato Ex 1', email: 'mail1@mail'},
		{_id: 2, nome:'Contato Ex 2', email: 'mail2@mail'},
		{_id: 3, nome:'Contato Ex 3', email: 'mail3@mail'}
	];

module.exports = function(){
	var controller = {};
	
	controller.listaContatos = function(req, res){
		res.json(contatos);
	};

	controller.obtemContato = function(req, res){
		var idContato = req.params.id;
		var contato = contatos.filter(function(contato){
			return contato._id == idContato;
		})[0];
		contato?
			res.json(contato):
			res.status(404).send('Contato não encontrado');
	};

	return controller;
};

