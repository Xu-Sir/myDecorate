package com.xhh.myDecorate.controller;

import com.xhh.myDecorate.common.Constant;
import com.xhh.myDecorate.dao.Advice;
import com.xhh.myDecorate.service.AdviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * @author xuhaihong
 * @create 2018-02-02 11:44
 **/
@RestController
public class AdviceController {

    @Autowired
    private AdviceService adviceService;
    @RequestMapping(value = "/advice")
    public String advice(@RequestParam Map<String ,String> map){
        Advice advice = new Advice();
        advice.setType(map.get("type"));
        advice.setName(map.get("CustomerName"));
        advice.setPhoneNum(map.get("Phone"));
        advice.setLocation(map.get("Address"));
        advice.setContent(map.get("content"));
        adviceService.save(advice);

        return Constant.SUCCESS;
    }
}
