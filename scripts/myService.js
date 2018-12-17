var app = angular.module("myModule");
app.service("myService", function() {
    this.salary = 100;
    this.bonus = 10;
    
    this.incrementedSalary = function() {
        return this.salary + (this.salary*10)/100;
    }
})