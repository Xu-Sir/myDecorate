package com.xhh.myDecorate.service;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.dao.DesignInstance;
import com.xhh.myDecorate.mapper.provider.DesignInstanceProveder;

import java.util.List;

/**
 * @author xuhaihong
 * @create 2018-02-02 11:06
 **/
public interface DesignInstanceService {

    void save(DesignInstance instance);

    List<DesignInstance> findDesignInstance(RequestArgs args);

    DesignInstance searchDesignInstance(DesignInstance designInstance);

    Integer countDesignInstance(RequestArgs args);
}
