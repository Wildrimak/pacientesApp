angular.module('pacientesServices', ['ngResource'])
.factory('recursoPlano', function($resource) {

	console.log("Entrando em service na fabrica recurso plano");
	let baseUrl = "http://localhost:8888/planos";

	$scope.planos = [];

	$http
	.get(baseUrl)
	.success(function(planos) {

		console.log("Os planos: " + planos);
		console.log("As propriedades: " + Object.getOwnPropertyNames(planos));
		console.log(planos[Object.getOwnPropertyNames(planos)[0]]);
		console.log(planos[Object.getOwnPropertyNames(planos)[1]]);
		console.log("CHUPA MEU OVO");
		// planos.forEach((plano, i) => {
		// 	console.log("O plano: " + plano + " o i: " + i);
		// });


		$scope.planos = planos;

	}).error(function(erro) {
		console.log(erro);
	});
	console.log("Saindo de service na fabrica recurso plano");

})
	.factory('recursoPaciente', function($resource) {

		let baseUrl = "http://localhost:8888/pacientes";

		return $resource(baseUrl + '/:paciente_id', null, {
			'update' : {
				method: 'PUT',
				headers: ''
			}
		});
	})
	.factory("cadastroDePacientes", function(recursoPaciente, $q, $rootScope) {



		var service = {};

		service.cadastrar = function(paciente) {
			return $q(function(resolve, reject) {

				if(paciente.id) {
					recursoPaciente.update({pacienteId: paciente.id}, paciente, function() {


						resolve({
							mensagem: 'Paciente ' + paciente.nome + ' atualizado com sucesso',
							inclusao: false
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível atualizar o paciente ' + paciente.nome
						});
					});

				} else {
					recursoPaciente.save(paciente, function() {

						resolve({
							mensagem: 'Paciente ' + paciente.nome + ' incluído com sucesso',
							inclusao: true
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível incluir a paciente ' + paciente.nome
						});
					});
				}
			});
		};
		return service;
    });
