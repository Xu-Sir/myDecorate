package com.xhh.myDecorate.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

/**
 * @author xuhaihong
 * @create 2018-01-30 15:26
 **/
@Controller
public class IndexController {


    @RequestMapping(value = "/")
    public String index(){

        System.out.println("进入首页");
        return "page/index";
    }

    /**
     * 统计访问量
     */
    @ResponseBody
    @RequestMapping(value = "countPv")
    public String countPv(HttpServletRequest request){

        System.out.println("countPv"+request.getParameter("name"));
        return "666";
    }
}
