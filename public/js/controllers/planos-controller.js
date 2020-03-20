angular
	.module('pacientesApp')
	.controller('PlanosController', function($scope, $http) {

		console.log("ENTREI EM PLANOS");
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
	});
