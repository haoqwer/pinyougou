package com.pinyougou.sellergoods.service;

import com.pinyougou.pojo.TbBrand;
import entity.PageResult;

import java.util.List;
import java.util.Map;

public interface BrandService {
    List<TbBrand> findAll();
    //分页查询数据
    PageResult findPage(int pageNum,int pageSize);

    void  add(TbBrand brand);

    //获取当前的Brand
    TbBrand findOne(Long id);

    void update(TbBrand brand);

    void dele(Long[] ids);

    PageResult findSearch(TbBrand brand,int pageNum,int pageSize);

    List<Map> selectOptionList();
}
