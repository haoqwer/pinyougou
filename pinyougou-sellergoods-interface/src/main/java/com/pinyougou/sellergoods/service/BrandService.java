package com.pinyougou.sellergoods.service;

import com.pinyougou.pojo.TbBrand;
import entity.PageResult;

import java.util.List;
import java.util.Map;

public interface BrandService {
    //查询所有
    List<TbBrand> findAll();

    //分页
    PageResult findPage(int pageNum,int pageSize);

    //新增

    void add(TbBrand brand);

    //查找
    TbBrand findOne(Long id);

    //修改
    void update(TbBrand brand);

    //删除
    void dele(Long[] ids);


    List<Map> selectOptionList();

}
