package com.xhh.myDecorate.service.impl;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.dao.Designer;
import com.xhh.myDecorate.mapper.DesignerMapper;
import com.xhh.myDecorate.service.DesignerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DesignerServiceImpl implements DesignerService{

    @Autowired
    DesignerMapper designerMapper;
    @Override
    public List<Designer> findDesignerList(RequestArgs args){
        return designerMapper.findDesignerList(args);
    }
    @Override
    public Integer countDesignerList(RequestArgs args){
        return designerMapper.countDesignerList(args);
    }
    @Override
    public  void save(Designer designer){
        designerMapper.save(designer);
    }

}
