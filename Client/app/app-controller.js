angular.module('App').controller('AppController', function ($scope, $state, $http, $rootScope, UserService) {

    $scope.data = {
        user: ''
    };

    $scope.login = function () {

        $http.post('http://localhost:8081/login',
            {
                email: $scope.email,
                password: $scope.password
            }
        ).then(function (res) {
            if (res.data == 'null') {
                alert('email or password were incorrect');
                return false;
            } else {
                $scope.data.user = res.data;


                $rootScope.user = res.data;
                UserService.setUser(res.data);
                $state.go('home');
            }

        });
    }

    $scope.getName=function(){
        return $scope.data;
    }

});