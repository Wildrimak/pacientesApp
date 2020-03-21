angular.module('pacientesApp')
	.controller('PacienteController',
	['$scope', 'recursoPaciente', '$routeParams', 'cadastroDePacientes', '$location',
	function($scope, recursoPaciente, $routeParams, cadastroDePacientes, $location) {

		$scope.paciente = {};
		$scope.mensagem = '';

		if($routeParams.id) {
			recursoPaciente.get({id: $routeParams.id}, function(paciente) {
				$scope.paciente = paciente;
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter a paciente'
			});
		}

		$scope.atualizar = function(paciente) {

			cadastroDePacientes.cadastrar($scope.paciente)
			.then(function(dados) {
				$scope.mensagem = dados.mensagem;
				if (dados.inclusao) $scope.paciente = {};
			})
			.catch(function(erro) {
				$scope.mensagem = erro.mensagem;
			});

			// $location.path('/pacientes');

		}

		$scope.submeter = function() {

			if ($scope.formulario.$valid) {
				cadastroDePacientes.cadastrar($scope.paciente)
				.then(function(dados) {
					$scope.mensagem = dados.mensagem;
					if (dados.inclusao) $scope.paciente = {};
				})
				.catch(function(erro) {
					$scope.mensagem = erro.mensagem;
				});
			}
		};
	}]);
