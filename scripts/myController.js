var app = angular.module("myModule");
app.controller("myController", function($scope, myFactory, myService) {
    $scope.name = myFactory.name;
    $scope.age = myFactory.age;
    $scope.sal = myService.salary;
    $scope.incrementedSalary = myService.incrementedSalary();
})