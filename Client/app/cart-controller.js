angular.module('App').controller('CartController', function ($scope, $state, $rootScope, $http) {


    $scope.cart = $rootScope.cart;
    $scope.init = function () {
        if (!$rootScope.user) {
            alert('You have to login to see that page!!!');
            $state.go('login');
        }
    }

    $scope.pay = function () {
        if (!$scope.city || !$scope.address || !$scope.creditCard) {
            alert('all field must entered');
            return false;
        }
        else {
            $http.post('http://localhost:8081/pay',
                {
                    email: $rootScope.user.email,
                    products: $rootScope.cart
                }
            ).then(function (res) {
                $state.go('thanku');
            });

        }
    }


})
;