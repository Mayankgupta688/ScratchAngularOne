var app = angular.module("scopeTesting1DirectiveModule", []);
app.controller("custumController2",['$scope', function($scope) {
    $scope.payment = "1000";
    $scope.myLocation = "Delhi";
    $scope.location = "Agra";
    $scope.product = "Tajo Mahal";

    $scope.company = "Hello";
    
    $scope.delayedFunction = function() {
        setTimeout(function() {
            $scope.message = "This is delayed message";
            console.log("Set Timeout Executed...");
        },3000);
    }
    $scope.delayedAnotherFunction = function() {
        setTimeout(function() {
            $scope.messageAnother = "This is Another delayed message";
            console.log("Another Set Timeout Executed...");
        },3000);
    }
    $scope.delayWithApplyFunction = function() {
        setTimeout(function() {
            $scope.messageApply = "This is delayed message with apply";
            console.log("Set Timeout Executed with apply...");
            $scope.$apply();
        },3000);
    }
    $scope.delayWithApplyFunction = function() {
        setTimeout(function() {
            $scope.messageApply = "This is delayed message with apply";
            console.log("Set Timeout Executed with apply...");
            $scope.$apply();
        },3000);
    }
    $scope.delayWrappedApplyFunction = function() {
        setTimeout(function() {
            $scope.$apply( function() {
                $scope.messageWrappedApply = "This is delayed message with wrapped apply function";
                console.log("Set Timeout Executed with wrapped apply function...");
            });
        },3000);
    }
}]);
app.directive("scopeTrueDirective", function() {
    return {
        restrict: 'E',
        template: '<div> Your payment is {{paymet}} </div>' + '<b>Change your payment here: <input type="text" ng-model="paymet"/> </b><br><br>',
        scope: true,
        transclude: true
    }
})
app.directive("scopeEmptyDirective", function() {
    return {
        restrict: 'E',
        template: '<p>Hi there: {{location}}</p>' + '<input type="text" ng-model="location"/>',
        scope: {
            location: "@"
        }
    }
})
app.directive("scopeIsolatedDirective", function() {
    return {
        restrict: 'E',
        template: '',
        scope: {
            user: '='
        }
    }
})
