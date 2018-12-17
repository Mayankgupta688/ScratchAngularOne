var app = angular.module("myDirectiveModule", []);
app.controller("custumController1", ['$scope', function($scope){
    $scope.store = "Vishal Mega Mart";
    $scope.address = "Orissa";              //Least priority
    $scope.customers = [{ 
        name: "Meha",
        product: "Soap"
    }, { 
        name: "Mayank",
        product: "Milk"
    }, { 
        name: "Maheshvari",
        product: "Book"
    }]
}]);
app.directive('scopeFalseControllerScopePresentDirective', function() {
    return{
        restrict: 'E', // This should be element
        scope: false,
        template: '<h2>Hi {{customers[0].name}}</h2>' + 'Change the name here: <input type="text" ng-model="customers[0].name"/>',
        controller: function($scope) {
            
        }
    }
});
app.directive('scopeFalseControllerScopeNotPresentDirective', function() {
    return{
        restrict: 'E', // This should be element
        scope: false,
        template: '<h2>Hi {{customers[0].name}}</h2>' + 'Change the name here: <input type="text" ng-model="customers[0].name"/>'
    }
});


