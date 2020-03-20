angular
.module('pacientesApp')
.controller('PacientesController', function($scope, recursoPaciente) {

	$scope.pacientes = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	recursoPaciente.query(function(pacientes) {
		$scope.pacientes = pacientes;
	}, function(erro) {
		console.log(erro);
	});

	$scope.remover = function(paciente) {

		console.log(paciente);
		console.log(paciente.id);
		recursoPaciente.delete(
			{
				id: paciente.id
			}, function() {
					var indicePaciente = $scope.pacientes.indexOf(paciente);
					$scope.pacientes.splice(indicePaciente, 1);
					$scope.mensagem = 'Paciente ' + paciente.nome + ' removida com sucesso!';
			}, function(erro) {
					console.log(erro);
					$scope.mensagem = 'Não foi possível apagar o paciente ' + paciente.nome;
			});
	};

});
