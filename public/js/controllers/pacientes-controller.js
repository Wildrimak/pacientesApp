angular.module('pacientesApp').controller('PacientesController', function($scope, recursoFoto) {

	$scope.pacientes = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	recursoFoto.query(function(pacientes) {
		$scope.pacientes = pacientes;
	}, function(erro) {
		console.log(erro);
	});

	$scope.remover = function(paciente) {

		recursoFoto.delete({pacienteId: paciente._id}, function() {
			var indiceDaFoto = $scope.pacientes.indexOf(paciente);
			$scope.pacientes.splice(indiceDaFoto, 1);
			$scope.mensagem = 'Paciente ' + paciente.nome + ' removida com sucesso!';
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível apagar o paciente ' + paciente.nome;
		});
	};

});
