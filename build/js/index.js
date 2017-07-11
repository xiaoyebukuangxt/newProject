/**
 * Created by HSAEE on 2017/7/10.
 */

    // 1.创建模块
    var app = angular.module('app',['ui.router']);

    // 2.创建控制器

//首页


//底部





    /*配置路由*/






// 配置白名单


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

/**
 * Created by HSAEE on 2017/7/11.
 */
// 2.创建控制器
angular.module('app').controller('AppController',['$scope','$window','$location',function ($scope,$window,$location) {
    $scope.title = '首页';

    $scope.id = 0;
    $scope.$on('tab_notifice',function (e,regs) {
        var titleArray = ['首页','作者','栏目','我'];
        $scope.id = regs.id
        $scope.title = titleArray[regs.id];
    })

    // 返回按钮
    $scope.back = function () {
        // 返回上一页
        $window.history.back();
    }
    $scope.location=$location
    $scope.$watch('location.url()',function (newV,oldV) {
        var index = newV.toString().indexOf('detail');
        console.log(index);
        if (index == -1){
            // 首页
            $scope.hidde = false;
        }else {
            // 详情
            $scope.hidde = true;
        }
    })

}]);


/**
 * Created by HSAEE on 2017/7/11.
 */

angular.module('app').controller('DetailController',['$scope','$stateParams',function ($scope,$stateParams) {

    var index = $stateParams.id;

    $scope.item = $scope.homeData.posts[index];
    console.log($scope.item);

}]);

/**
 * Created by HSAEE on 2017/7/11.
 */

angular.module('app').controller('HomeController',['$scope','$http',function ($scope,$http) {
    $scope.title = '首页1';

    /*跨域
     * http://localhost:8080/api/home.php?callback=fn
     * http://localhost:9999/#!/home
     * */
    $http({
        url:'http://localhost/home.php',
        method:'jsonp'
    }).then(function (regs) {

        $scope.homeData = regs.data;
        console.log($scope.homeData);
    }).catch(function (err) {
        console.log(err);
    })
}]);
/**
 * Created by HSAEE on 2017/7/11.
 */

angular.module('app').controller('tabController',['$scope',function ($scope) {
    $scope.tabChange = function (index) {
        // 发送广播
        $scope.$emit('tab_notifice',{id:index});
    }
}]);
/**
 * Created by HSAEE on 2017/7/11.
 */
angular.module('app').directive('details',function () {
    return {
        restrict:'EA',
        template:'<div class="home_detail"><div ui-view></div></div>',
        replace:true,
        link:function ($scope,ele,attr) {
            ele.html($scope.item.content);
        }
    }
})
/**
 * Created by HSAEE on 2017/7/11.
 */

angular.module('app').directive('navs',function () {
    return {
        restrict:'EA',
        templateUrl:'../views/nav_tpl.html',
        controller:['$scope',function ($scope) {

        }],
        /*link:function ($scope,ele,attr) {
         /!* if(attr.isBack !=  true){
         ele.find('span').css({
         display:'block'
         })
         }*!/
         }*/
    }

})

/**
 * Created by HSAEE on 2017/7/11.
 */
angular.module('app').directive('tabbar',function () {
    return {
        restrict:'EA',
        templateUrl:'../views/tabbar_tpl.html',
        controller:'tabController',
        replace:true,
        link:function ($scope,ele,attr) {
            $scope.$watch('id',function (newV,oldV) {
                var list = ele.children()[0].children;
                for (var i = 0; i<list.length; i++){
                    list[i].className = '';
                }
                list[$scope.id].className = 'active';
            })
        }
    }

})