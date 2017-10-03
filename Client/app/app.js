angular.module('App', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('register', {
            url: '/register',
            templateUrl: 'register.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'login.html'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
        .state('cart', {
            url: '/cart',
            templateUrl: 'cart.html'
        })
        .state('thankyou', {
            url: '/thankyou',
            templateUrl: 'thankyou.html'
        });


});