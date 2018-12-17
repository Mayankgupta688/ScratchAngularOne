var app = angular.module("myModule");
app.factory("myFactory", function() {
    var name = "Mayank";
    var age = 30;
    return {
        name: name,
        age: age
    };
})