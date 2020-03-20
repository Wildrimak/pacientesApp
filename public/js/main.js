angular
	.module('pacientesApp', ['ngRoute', 'ngResource', 'pacientesServices'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});

		let baseUrl = "/pacientes";

		$routeProvider.when('/testes', {
			templateUrl: 'partials/teste.html',
			controller: 'Ctrl3'
		});

		$routeProvider.when(baseUrl, {
			templateUrl: 'partials/principal.html',
			controller: 'PacientesController'
		});

		$routeProvider.when(baseUrl + '/novo', {
			templateUrl: 'partials/paciente.html',
			controller: 'PacienteController'
		});

		$routeProvider.when(baseUrl + '/edita/:id', {
			templateUrl: 'partials/paciente.html',
			controller: 'PacienteController'
		});

		$routeProvider.when(baseUrl + '/deleta/:id', {
			controller: 'PacienteController'
		});

		$routeProvider.when('/login', {
			templateUrl: 'partials/login.html',
			controller: 'LoginController'
		});

		$routeProvider.otherwise({redirectTo: '/pacientes'});

	});
