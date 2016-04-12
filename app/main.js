import './styles/index.less';

import angular from 'angular';
import ngRoute from 'angular-route';
import routerConfig from './route';

//controller entry
import './controllers/index';
//service entry
import './services/index';
//directive entry
import './directives/index';

//promise
function getData($timeout,$q){
    return ()=>{
        return $q((resolve,reject)=>{
            $timeout(()=>{
                resolve(Math.floor(Math.random() * 10))
            },2000)
        })
    }
}
//app
angular
    .module('app', ['app.controller','app.service','app.directive',ngRoute])
    .config(routerConfig)
    .factory('getData',getData)
    .run(function(getData){
        var promise = getData();
        promise.then(function(string){
            console.log(string)
        },function(error){
            console.error(error)
        })
    })

