package com.xhh.myDecorate.controller;

import com.xhh.myDecorate.common.Constant;
import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.service.CountPvService;
import com.xhh.myDecorate.util.IpUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.Calendar;

/**
 * @author xuhaihong
 * @create 2018-01-30 15:26
 **/
@Controller
public class IndexController {

    @Autowired
    CountPvService countPvService;

    @RequestMapping(value = "/")
    public String index(){

        System.out.println("进入首页");
        return "index";
    }
    @RequestMapping(value = "/home")
    public String home(){

        System.out.println("进入首页");
        return "page/homepage";
    }

    /**
     * 统计访问量
     */
    @ResponseBody
    @RequestMapping(value = "countPv")
    public String countPv(HttpServletRequest request ){
        RequestArgs args = new RequestArgs();
        String ip = IpUtil.getIp(request);
        args.setIp( ip);
        args.setStartTime(Calendar.getInstance().getTimeInMillis());
        countPvService.save(args);
        return Constant.SUCCESS;
    }

    /**
     * 显示访问量
     */
    @ResponseBody
    @RequestMapping(value = "/totalPv")
    public String totalPv(HttpServletRequest request){
        RequestArgs args = new RequestArgs();
        String startTime = request.getParameter("startTime");
        String endTime = request.getParameter("endTime");
        args.setIp(request.getParameter("ip"));
        if (null != startTime){
            args.setStartTime(Long.valueOf(startTime));
        }
        if (null != endTime) {
            args.setEndTime(Long.valueOf(endTime));
        }
        Integer total =  countPvService.count(args);
        return total.toString();
    }

}
