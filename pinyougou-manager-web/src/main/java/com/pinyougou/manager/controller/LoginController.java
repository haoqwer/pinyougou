package com.pinyougou.manager.controller;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RequestMapping("/login")
@RestController
public class LoginController {

    @RequestMapping("/name")
    public Map name() {
        Map <String, String> map = new HashMap <>();
        String loginName = SecurityContextHolder.getContext().getAuthentication().getName();
        map.put("loginName", loginName);
        return map;
    }
}
