import angular from 'angular';
import randomText from './random_text';


export default angular.module('app.service',[])
    .service('randomText',randomText)