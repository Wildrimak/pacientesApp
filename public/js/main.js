angular
	.module('pacientesApp', ['ngRoute', 'ngResource', 'pacientesServices'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});

		let baseUrl = "/pacientes";

		$routeProvider.when(baseUrl, {
			templateUrl: 'partials/principal.html',
			controller: 'PacientesController'
		});

		$routeProvider.when(baseUrl + '/novo', {
			templateUrl: 'partials/paciente.html',
			controller: 'PacienteController'
		});

		$routeProvider.when(baseUrl + '/edita/:pacienteId', {
			templateUrl: 'partials/paciente.html',
			controller: 'PacienteController'
		});

		$routeProvider.when('/login', {
			templateUrl: 'partials/login.html',
			controller: 'LoginController'
		});

		$routeProvider.otherwise({redirectTo: '/pacientes'});

	});
