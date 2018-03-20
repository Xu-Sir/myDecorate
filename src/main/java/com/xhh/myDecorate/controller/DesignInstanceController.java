package com.xhh.myDecorate.controller;

import com.xhh.myDecorate.common.CodeEnum;
import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.common.ResultR;
import com.xhh.myDecorate.dao.DesignInstance;
import com.xhh.myDecorate.service.DesignInstanceService;
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
public class DesignInstanceController {

    @Autowired
    DesignInstanceService designInstanceService;

    @RequestMapping(value = "/caseList")
    public ResultR caseList(RequestArgs args){
        Integer size = args.getSize();
        if (size == null){
            args.setSize(32);
        }
        List<DesignInstance> list = designInstanceService.findDesignInstance(args);
        if (list.size() < 1){
            Map map = new HashMap();
            map.put("list", list);
            map.put("total", 0);
            map.put("page", args.getPage());
            map.put("size", args.getSize());
            return new ResultR(CodeEnum.SUCCESS,map);
        }
        Integer total = designInstanceService.countDesignInstance(args);

        Map map = new HashMap();
        map.put("list", list);
        map.put("total", total);
        map.put("page", args.getPage());
        map.put("size", args.getSize());

        return new ResultR(CodeEnum.SUCCESS, map);

    }
    @RequestMapping(value = "/caseIndexList")
    public ResultR caseIndexList(RequestArgs args){
        args.setShowInIndex(1);//限制只查询主页的
        List<DesignInstance> list = designInstanceService.findDesignInstance(args);
        if (list.size() < 1){
            Map map = new HashMap();
            map.put("list", list);
            map.put("page", args.getPage());
            map.put("size", args.getSize());
            return new ResultR(CodeEnum.SUCCESS,map);
        }
        Map map = new HashMap();
        map.put("list", list);
        map.put("page", args.getPage());
        map.put("size", args.getSize());

        return new ResultR(CodeEnum.SUCCESS, map);

    }


}
