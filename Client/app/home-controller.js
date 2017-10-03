angular.module('App').controller('HomeController', function ($scope, $state, $http, $rootScope) {
    $scope.init = function () {

        $http.get('http://localhost:8081/products').then(function (res) {
            $scope.products = res.data;
        });

        if ($rootScope.cart) {
            $scope.cart = $rootScope.cart;
        } else {
            $scope.cart = [];
        }
    };

    $scope.addToCart = function (alb) {
        if(!$rootScope.user){
            alert('You have to be logged in to add item to cart.');
            return false;
        }
        $scope.cart.push(alb);
        $rootScope.cart = $scope.cart;
        alert(alb.name + ' added succefully');
    }
});