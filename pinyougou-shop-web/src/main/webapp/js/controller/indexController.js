app.controller('indexController',function (loginService,$scope) {
    $scope.loginName=function () {
        loginService.loginName().success(
            function (response) {
                $scope.name=response.loginName;
            }
        )
    }
});