routers.$inject = ['$routeProvider','$locationProvider'];

export default function routers($routeProvider,$locationProvider) {
    $routeProvider
        .when('/about',{
            templateUrl :'./views/about.html',
            controller : 'AboutController',
            controllerAs : 'about'
        })
        .when('/user',{
            templateUrl : './views/user.html',
            controller : 'UserController',
            controllerAs : 'user'
        })
        .when('/form',{
            templateUrl : './views/form.html',
            controller : 'FormController',
            controllerAs : 'form'
        })
        .otherwise({
            redirectTo : '/'
        });
    //$locationProvider.html5Mode(true);
}