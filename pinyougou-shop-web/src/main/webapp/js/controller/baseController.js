app.controller('baseController',function ($scope) {
    $scope.reloadList=function(){
        $scope.search($scope.paginationConf.currentPage,$scope.paginationConf.itemsPerPage);
    }

    $scope.paginationConf = {
        //当前页数
        currentPage: 1,
        //总记录数
        totalItems: 10,
        //每页数据行数
        itemsPerPage: 10,
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function(){
            $scope.reloadList();
        }
    };

    $scope.selectIds=[];

    $scope.updateSelection=function ($event,id) {
        if($event.target.checked){
            //如果被选中则添加选择的id到数组中
            $scope.selectIds.push(id);
        }else {
            //没有选中则是移除取消
            var idx=$scope.selectIds.indexOf(id);//获取选择取消id的位置
            $scope.selectIds.splice(idx,1);
        }
    }

    /**
     * jsonString的值是：
     * [{"id":35,"text":"价钱"}]
     * @param jsonString
     * @param key
     * @returns {string}
     */
    $scope.jsonToString = function (jsonString, key) {
        var json = JSON.parse(jsonString);//将 json 字符串转换为 json 对象
        var value = "";
        for (var i = 0; i < json.length; i++) {
            if (i > 0) {
                value += ","
            }
            value += json[i][key];
        }
        return value;
    }




});