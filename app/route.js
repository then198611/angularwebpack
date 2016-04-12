routers.$inject = ['$routeProvider','$locationProvider'];

export default function routers($routeProvider,$locationProvider) {
    $routeProvider
        .when('/about',{
            templateUrl : require('file?name=views/[name].[hash].[ext]!./views/about.html'),
            controller : 'AboutController',
            controllerAs : 'about'
            //resolve: {
            //    load: function(){
            //        return new Promise(function(resolve, reject){
            //            require.ensure([],function(require){
            //                require('./controllers/about.js');
            //                resolve();
            //            });
            //        });
            //    }
            //}
        })
        .when('/user',{
            templateUrl : require('file?name=views/[name].[hash].[ext]!./views/user.html'),
            controller : 'UserController',
            controllerAs : 'user'
        })
        .when('/form',{
            templateUrl : require('file?name=views/[name].[hash].[ext]!./views/form.html'),
            controller : 'FormController',
            controllerAs : 'form'
        })
        .when('/search',{
            templateUrl : require('file?name=views/[name].[hash].[ext]!./views/search.html'),
            controller : 'SearchController',
            controllerAs : 'search'
        })
        .otherwise({
            redirectTo : '/'
        });
    //$locationProvider.html5Mode(true);
}