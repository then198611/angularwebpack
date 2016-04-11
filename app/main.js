import './styles/index.less';

import angular from 'angular';
import ngRoute from 'angular-route';
import routerConfig from './route';
import controllers from './controllers/index';
import services from './services/index';
import directives from './directives/index';

//controllers
angular.module('app.controller',[])
    .controller('AboutController',controllers.AboutController)
    .controller('UserController',controllers.UserController)
    .controller('FormController',controllers.FormController)


//services
angular.module('app.service',[])
    .service('randomText',services.RandomText)

//directives
angular.module('app.directive',[])
    .directive('testDirective',directives.testDirective)

//app
angular
    .module('app', [ngRoute,'app.controller','app.service','app.directive'])
    .config(routerConfig)

