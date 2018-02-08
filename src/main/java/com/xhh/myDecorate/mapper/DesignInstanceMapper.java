package com.xhh.myDecorate.mapper;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.dao.DesignInstance;
import com.xhh.myDecorate.mapper.provider.DesignInstanceProveder;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.SelectProvider;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author xuhaihong
 * @create 2018-02-02 10:09
 **/
@Mapper
@Repository
public interface DesignInstanceMapper {

    @SelectProvider(type = DesignInstanceProveder.class, method = "save")
    void save(DesignInstance instance);

    @SelectProvider(type = DesignInstanceProveder.class, method = "findDesignInstance")
    List<DesignInstance> findDesignInstance(RequestArgs args);

    @SelectProvider(type = DesignInstanceProveder.class, method = "countDesignInstance")
    Integer countDesignInstance(RequestArgs args);
}
