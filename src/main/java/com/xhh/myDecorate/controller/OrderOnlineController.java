package com.xhh.myDecorate.controller;

import com.xhh.myDecorate.common.Constant;
import com.xhh.myDecorate.dao.OrderOnline;
import com.xhh.myDecorate.service.OrderOnlineService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Map;

/**
 * @author xuhaihong
 * @create 2018-02-02 11:46
 **/
@RestController

public class OrderOnlineController {

    @Resource
    private OrderOnlineService orderOnlineService;

    @RequestMapping(value = "/orderOnline")
    public String orderOnline(@RequestParam Map<String,Object> param){
        //保存用户数据
        OrderOnline orderOnline = new OrderOnline();
        orderOnline.setUserName((String) param.get("b2_r_username"));
        orderOnline.setPhoneNum((String) param.get("b2_r_phone"));
        orderOnline.setBuilding((String) param.get("b3_r_building"));
        orderOnline.setSize((String) param.get("b3_r_size"));
        orderOnlineService.save(orderOnline);
        return Constant.SUCCESS;
    }

    @RequestMapping(value = "/orderOnlineT")
    public String orderOnlineT(@RequestParam Map<String,Object> param){
        //保存用户数据
        OrderOnline orderOnline = new OrderOnline();
        orderOnline.setUserName((String) param.get("bp_f_username"));
        orderOnline.setPhoneNum((String) param.get("bp_f_phone"));
        orderOnline.setBuilding((String) param.get("bp_f_building"));
        orderOnline.setSize((String) param.get("bp_f_size"));
        orderOnlineService.save(orderOnline);
        return Constant.SUCCESS;
    }
}


