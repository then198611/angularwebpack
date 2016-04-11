export default () => {
    return {
        restrict : 'E',
        scope : {
            title : '@'
        },
        transclude : true,
        template : '<div class="sidebox"><div class="content"><h2>{{title}}</h2><div class="content" ng-transclude=""></div></div></div>'
    }
}