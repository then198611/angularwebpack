export default function($stateProvider,$locationProvider,$urlRouterProvider){
    $locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix('!');
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('about', {
            url: "/about",
            templateUrl: require('file?name=views/[name].[hash].[ext]!./views/about.html'),
            controller : 'AboutController as about'
        })
        .state('user', {
            url: "/user",
            templateUrl: require('file?name=views/[name].[hash].[ext]!./views/user.html'),
            controller : 'UserController as user'
        })
        .state('form', {
            url: "/form",
            templateUrl: require('file?name=views/[name].[hash].[ext]!./views/form.html'),
            controller : 'FormController as form'
        })
        .state('search', {
            url: "/search",
            templateUrl: require('file?name=views/[name].[hash].[ext]!./views/search.html'),
            controller : 'SearchController as search'
        })
}