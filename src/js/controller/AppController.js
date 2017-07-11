
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
