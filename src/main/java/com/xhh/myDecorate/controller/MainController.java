package com.xhh.myDecorate.controller;


import com.xhh.myDecorate.common.CodeEnum;
import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.common.ResultR;
import com.xhh.myDecorate.dao.User;
import com.xhh.myDecorate.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * @author xuhaihong
 * @create 2018-01-17 17:30
 **/

@RestController
@RequestMapping(value = "/cqcq", method = RequestMethod.POST)
public class MainController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/findCq")
    public ResultR findCq(RequestArgs args){
        User user = userService.findQc(args);
        if (user != null){
            Map<String, Object> map = new HashMap();
            map.put("user", user);
            return new ResultR(CodeEnum.SUCCESS,map);
        }
        System.out.println("success");
        return new ResultR(CodeEnum.SUCCESS,"");
    }















    public static void main(String[] args) {
        System.out.println("Hello world");
    }
}
