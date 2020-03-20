angular.module('pacientesApp')
	.controller('LoginController', function($scope, $http) {

		$scope.login = {};

		$scope.fazerLogin = function() {

			if($scope.formularioLogin.$valid){

					console.log($scope.login);

			  	$http.post('v1/login', $scope.login)
					.success(function() {
						$scope.login = {}
						console.log("login realizado com sucesso!");
					})
					.error(function(erro){
						console.log("Erro ao tentar fazer login: " + erro);
					});
			}
		};
	});
