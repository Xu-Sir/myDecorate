package com.xhh.myDecorate.controller;


import com.xhh.myDecorate.common.CodeEnum;
import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.common.ResultR;
import com.xhh.myDecorate.dao.Designer;
import com.xhh.myDecorate.service.DesignInstanceService;
import com.xhh.myDecorate.service.DesignerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class DesignerController {

    @Autowired
    DesignerService designerService;
    @Autowired
    DesignInstanceService designInstanceService;

    @RequestMapping(value = "/teamList")
    public ResultR teamList(RequestArgs args){
        if (args.getSize() == null){
            args.setSize(8);
        }
        List<Designer> list = designerService.findDesignerList(args);

        if (list.size() < 1){
            Map map = new HashMap();
            map.put("list", list);
            map.put("total", 0);
            map.put("page", args.getPage());
            map.put("size", args.getSize());
            return new ResultR(CodeEnum.SUCCESS,map);
        }
        Integer total = designerService.countDesignerList(args);
        Map map = new HashMap();
        map.put("list", list);
        map.put("total", total);
        map.put("page", args.getPage());
        map.put("size", args.getSize());

        return new ResultR(CodeEnum.SUCCESS, map);

    }

    @RequestMapping(value = "/save")
    public ResultR save(Designer designer){

        if (designer.getName()==null){
            return new ResultR(CodeEnum.FAILED,"参数不完整");
        }
        if (designer.getExperience()==null){
            return new ResultR(CodeEnum.FAILED,"参数不完整");
        }
        if (designer.getSummary()==null){
            return new ResultR(CodeEnum.FAILED,"参数不完整");
        }
        if (designer.getGrade()==null){
            return new ResultR(CodeEnum.FAILED,"参数不完整");
        }
        if (designer.getStyle()==null){
            return new ResultR(CodeEnum.FAILED,"参数不完整");
        }
        if (designer.getWorks()==null){
            return new ResultR(CodeEnum.FAILED,"参数不完整");
        }
        designerService.save(designer);
        return new ResultR(CodeEnum.SUCCESS,null);
    }
}
