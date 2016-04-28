var app = angular.module("SuperApp", []);


// [[[[[[[[[[[[]]]]]]]]]]]]
app.controller("CreateController", ['$scope', '$http', function($scope, $http) {

  $scope.hero = {};
  $scope.powerList = ['Invisibility', 'Flight', 'Super Speed', 'Heat Vision', 'Super Strength', 'Accelerated Healing',
                      'Power Blast', 'Animal Affinity'];
  $scope.heroList = [];


  $scope.submit = function() {
    console.log($scope.hero);
    $http.post('/create', $scope.hero).then(function(res) {
      $scope.hero = {};
      $scope.getHeroes();
    });
  };

  $scope.getHeroes = function() {
    $http.get('/get').then(function(response) {
      $scope.heroList = response.data;
      console.log($scope.heroList);
    });
  };


  $scope.delete = function(hero) {
    $http.delete('/delete/' + hero._id).then(function(response){
      $scope.getHeroes();
    });
  };


    $scope.getHeroes();

}]); // end create control
