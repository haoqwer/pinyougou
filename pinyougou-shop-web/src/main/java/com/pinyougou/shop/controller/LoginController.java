package com.pinyougou.shop.controller;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/login")
public class LoginController {

    @RequestMapping("/name")
    public Map loginName(){
        Map<String,String> map=new HashMap <>();
        String loginName=SecurityContextHolder.getContext().getAuthentication().getName();
        map.put("loginName",loginName);
        return  map;
    }
}
