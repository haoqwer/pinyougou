app.controller('brandController', function ($scope,$controller, $http,brandService) {
    $controller('baseController',{$scope:$scope});//继承
    $scope.findAll = function () {
        brandService.findAll().success(
            function (response) {
                $scope.list = response;
            }
        )
    }




    $scope.findPage = function (page, rows) {
        brandService.findPage(page,rows).success(
            function (response) {
                $scope.list = response.rows;
                $scope.paginationConf.totalItems = response.total;//更新总记录数
            }
        )
    };

    $scope.add=function () {
        var object=null;
        if($scope.entity.id !=null){
            object=brandService.update($scope.entity);
        }else {
            object=brandService.add($scope.entity);
        }
        object.success(
            function (response) {
                if(response.success){
                    $scope.reloadList();//重新加载
                }else {
                    alert(response.message)
                }
            }
        )
    }

    $scope.findOne=function (id) {
        brandService.findOne(id).success(
            function (response) {
                $scope.entity=response;
            }
        )
    }



    $scope.dele=function () {
        brandService.dele($scope.selectIds).success(
            function (response) {
                if(response.success){
                    $scope.reloadList();//重新加载
                }else {
                    alert(response.message)
                }
            }
        )
    }

})