/**
 * Created by HSAEE on 2017/7/11.
 */

angular.module('app').controller('tabController',['$scope',function ($scope) {
    $scope.tabChange = function (index) {
        // 发送广播
        $scope.$emit('tab_notifice',{id:index});
    }
}]);