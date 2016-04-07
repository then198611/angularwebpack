import angular from 'angular';
import ngRoute from 'angular-route';
import routerConfig from './route';
import controllers from './controllers/index';
import services from './services/index';

angular
    .module('app', [ngRoute])
    .config(routerConfig)
    .service('randomText',services.RandomText)
    .controller('AboutController',controllers.AboutController)
    .controller('UserController',controllers.UserController)
