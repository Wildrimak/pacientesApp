angular.module('pacientesServices', ['ngResource'])
	.factory('recursoPaciente', function($resource) {

		let baseUrl = "http://localhost:8888/pacientes";

		return $resource(baseUrl + '/:pacienteId', null, {
			'update' : {
				method: 'PUT'
			}
		});
	})
	.factory('recursoPlano', function($resource) {

		let baseUrl = "http://localhost:8888/planos";

		$scope.planos = [];

		$http
		.get(baseUrl)
		.success(function(planos) {

			console.log("Os planos: " + planos);
			console.log("As propriedades: " + Object.getOwnPropertyNames(planos));
			console.log(planos[Object.getOwnPropertyNames(planos)[0]]);
			console.log(planos[Object.getOwnPropertyNames(planos)[1]]);

			planos.forEach((plano, i) => {
				console.log(plano);
			});


			$scope.planos = planos;

		}).error(function(erro) {
			console.log(erro);
		});
	})
	.factory("login", function(recursoLogin, $q){

		var service = {};

		service.login = function(login) {

			return $q(function(resolve, reject) {

				recursoLogin.save(login, function() {

					resolve({
						mensagem: 'Login realizado com sucesso'
					});

				}, function(erro) {

					console.log(erro);

					reject({
						mensagem: 'Não foi possível fazer login'
					});

				});

			})
		}

		return service;

	})
	.factory("cadastroDePacientes", function(recursoPaciente, $q, $rootScope) {

		var evento = 'pacienteCadastrado';

		var service = {};

		service.cadastrar = function(paciente) {
			return $q(function(resolve, reject) {

				if(paciente._id) {
					recursoPaciente.update({pacienteId: paciente.id}, paciente, function() {

						$rootScope.$broadcast(evento);
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
						$rootScope.$broadcast(evento);
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
