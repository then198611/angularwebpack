import angular from 'angular';
import AboutController from './about';
import UserController from './user';
import FormController from './form';
import SearchController from './search';

//controller 主文件入口
export default angular.module('app.controller',[])
    .controller('AboutController',AboutController)
    .controller('UserController',UserController)
    .controller('FormController',FormController)
    .controller('SearchController',SearchController)