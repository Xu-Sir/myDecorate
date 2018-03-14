package com.xhh.myDecorate.controller;

import com.xhh.myDecorate.common.CodeEnum;
import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.common.ResultR;
import com.xhh.myDecorate.dao.CustomStory;
import com.xhh.myDecorate.service.CustomStoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author xuhaihong
 * @create 2018-02-02 11:45
 **/
public class CustomStoryController {

    @Autowired
    CustomStoryService customStoryService;

    @RequestMapping(value = "/customStoryList")
    public ResultR customStoryList(RequestArgs args){

        Integer size = args.getSize();
        if (size == null){
            size = 10;
        }
        List<CustomStory> list = customStoryService.findCustomStory(args);
        if (list.size() < 1){
            Map<String ,Object> map = new HashMap(4);
                map.put("list", list);
                map.put("total", 0);
                map.put("page", args.getPage());
                map.put("size", size);
            return new ResultR(CodeEnum.SUCCESS, map);
        }
        Integer total = customStoryService.countCustomStory(args);
        Map<String ,Object> map = new HashMap();
            map.put("list", list);
            map.put("total", total);
            map.put("page", args.getPage());
            map.put("size", size);

        return new ResultR(CodeEnum.SUCCESS, map);

    }

    @RequestMapping(value = "customStoryDetail")
    public ResultR customStoryDetail(RequestArgs args){
        CustomStory customStory = customStoryService.customStoryDetail(args);
        return new ResultR(CodeEnum.SUCCESS, customStory);
    }
}
