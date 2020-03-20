var app = angular.module("pacientesApp");

app.controller('Ctrl3', function($scope) {
  $scope.roles = [
    {id: 1, text: 'guest'},
    {id: 2, text: 'user'},
    {id: 3, text: 'customer'},
    {id: 4, text: 'admin'}
  ];

  $scope.user = {
    roles: [$scope.roles[1]]
  };


  $scope.submeter = function() {
    console.log("O usuario: " + Object.keys($scope.user));
    console.log("As escolhas: " + $scope.roles);
    console.log("O usarios e suas escolhas: " + Object.keys($scope.user.roles));
  }

});
