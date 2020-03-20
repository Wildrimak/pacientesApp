angular
	.module('pacientesServices', ['ngResource'])
	.factory('recursoPaciente', function($resource) {

		let baseUrl = "http://localhost:8888/pacientes";

		return $resource(baseUrl + '/:id', null, {
			'update' : {
				method: 'PUT',
				headers: ''
			},
			'delete' : {
				method: 'DELETE',
				headers: ''
			}
		});
	})
	.factory("cadastroDePacientes", function(recursoPaciente, $q, $rootScope) {



		var service = {};
		console.log("Cadastrando um paciente");
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
		console.log("Terminando de cadastrar um paciente");
		return service;
    });
