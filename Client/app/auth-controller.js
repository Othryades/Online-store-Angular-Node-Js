angular.module('App').controller('AuthController', function ($scope, $state, $http, $rootScope,UserService) {
    $scope.register = function () {

        $http.post('http://localhost:8081/register',
            {
                name:$scope.name,
                email: $scope.email,
                password: $scope.password
            }
        ).then(function (res) {
            $state.go('login');
        });
    }

    $scope.login = function () {

        $http.post('http://localhost:8081/login',
            {
                email: $scope.email,
                password: $scope.password
            }
        ).then(function (res) {
            if(res.data==null){
                alert('email or password were incorrect');
                return false;
            }else{
                $rootScope.user = res.data;
                UserService.setUser(res.data);
                $state.go('home');
            }

        });
    }
});