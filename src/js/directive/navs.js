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
