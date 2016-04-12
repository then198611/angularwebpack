import angular from 'angular';
import testDirective from './test';


export default angular.module('app.directive',[])
    .directive('testDirective',testDirective)