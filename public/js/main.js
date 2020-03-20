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
			templateUrl: 'partials/listar_pacientes.html',
			controller: 'PacientesController'
		});

		$routeProvider.when(baseUrl + '/novo', {
			templateUrl: 'partials/cadastrar_paciente.html',
			controller: 'PacienteController'
		});

		$routeProvider.when(baseUrl + '/edita/:id', {
			templateUrl: 'partials/atualizar_paciente.html',
			controller: 'PacienteController'
		});

		$routeProvider.when('/login', {
			templateUrl: 'partials/login.html',
			controller: 'LoginController'
		});

		$routeProvider.otherwise({redirectTo: '/pacientes'});

	});
