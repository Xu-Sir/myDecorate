package com.xhh.myDecorate.controller;

import com.alibaba.fastjson.JSONObject;
import com.xhh.myDecorate.common.CodeEnum;
import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.common.ResultR;
import com.xhh.myDecorate.dao.ProjectInstance;
import com.xhh.myDecorate.service.ProjectInstanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
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


    /**
     * api方式 接受远程调用
     *
     */
    @RequestMapping(value = "/projectInsListIo")
    public ResultR projectList(HttpServletRequest request ,RequestArgs args) throws Exception{
        Integer size = args.getSize();
        if (size == null){
            args.setSize(32);
        }
        BufferedReader reader = new BufferedReader(new InputStreamReader(request.getInputStream()));//post方式传递读取字符流
        String jsonStr = null;
        StringBuilder result = new StringBuilder();
        try {
            while ((jsonStr = reader.readLine()) != null) {
                result.append(jsonStr);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        reader.close();// 关闭输入流
        JSONObject jsonObject = JSONObject.parseObject(result.toString()); // 取一个json转换为对象

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
