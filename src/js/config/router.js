
/**
 * Created by HSAEE on 2017/7/11.
 */
angular.module('app').config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('home',{
        url:'/home',
        views:{
            home:{
                templateUrl:'../views/home_tpl.html',
                controller:'HomeController'
            },
            author:{
                template:'<h2>author</h2>'
            },
            content:{
                template:'<h2>content</h2>'
            },
            my:{
                template:'<h2>my</h2>'
            }
        }
    }).state('home.list',{
        url:'/list',
        templateUrl:'../views/list_tpl.html'
    }).state('home.detail',{
        url:'/detail/:id',
        // template:'<div ui-view>{{item.content}}</div>',
        template:'<details></details>',
        controller:'DetailController'
    });

    // 一开始显示列表
    $urlRouterProvider.otherwise('home/list');

}]);

angular.module('app').config(['$sceDelegateProvider',function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://localhost/**'
    ]);
}]);