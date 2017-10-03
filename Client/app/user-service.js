angular.module('App').service('UserService', function () {
    var service = {};
    service.setUser = function (user) {
        service.user = user;
    }

    return service;
});