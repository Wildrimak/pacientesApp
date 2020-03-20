angular.module('pacientesApp')
	.controller('PacienteController', ['$scope', 'recursoPaciente', '$routeParams', 'cadastroDePacientes', function($scope, recursoPaciente, $routeParams, cadastroDePacientes) {

		$scope.paciente = {};
		$scope.mensagem = '';

		if($routeParams.pacienteId) {
			recursoPaciente.get({pacienteId: $routeParams.pacienteId}, function(paciente) {
				$scope.paciente = paciente;
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter a paciente'
			});
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
