package com.xhh.myDecorate.controller;

import com.xhh.myDecorate.common.CodeEnum;
import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.common.ResultR;
import com.xhh.myDecorate.dao.ProjectInstance;
import com.xhh.myDecorate.service.ProjectInstanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author xuhaihong
 * @create 2018-02-02 11:46
 **/
@RestController
public class ProjectInstanceController {

    @Autowired
    ProjectInstanceService projectInstanceService;

    @RequestMapping(value = "/projectInsList")
    public ResultR projectList(RequestArgs args){
        Integer size = args.getSize();
        if (size == null){
            args.setSize(32);
        }
        List<ProjectInstance> list = projectInstanceService.findProjectInstance(args);
        if (list.size() < 1){
            Map map = new HashMap();
            map.put("list", list);
            map.put("total", 0);
            map.put("page", args.getPage());
            map.put("size", args.getSize());
            return new ResultR(CodeEnum.SUCCESS,map);
        }
        Integer total = projectInstanceService.countProjectInstance(args);
        Map map = new HashMap();
        map.put("list", list);
        map.put("total", total);
        map.put("page", args.getPage());
        map.put("size", args.getSize());

         return new ResultR(CodeEnum.SUCCESS, map);
    }
}
