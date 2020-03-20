angular
	.module('pacientesApp')
	.controller('PlanosController', function($scope, $http) {

		console.log("ENTREI EM PLANOS");
		let baseUrl = "http://localhost:8888/planos";

		$scope.planos = [];

		$http
		.get(baseUrl)
		.success(function(planos) {

			$scope.planos = planos;

		}).error(function(erro) {
			console.log(erro);
		});
		console.log("SAINDO DE PLANOS")
	});
