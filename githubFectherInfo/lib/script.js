import angular from 'angular';
(function(){

  var app = angular.module("githubViewer", []);
  
  var MainController = function($scope, $http){
    var onUserComplete = function(response){
      $scope.user = response.data;
    };

    var onError = function(reason){
      $scope.error = "Could not fetch user"
    };

    $http.get("https://api.github.com/users/cziemba1")
      .then(onUserComplete, onError);
    
    $scope.message = "Hola Claudia";
  }
  app.controller("MainController",["$scope", "$http", MainController]);


}());
