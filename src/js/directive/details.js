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