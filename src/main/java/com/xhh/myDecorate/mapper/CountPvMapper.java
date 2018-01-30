package com.xhh.myDecorate.mapper;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.mapper.provider.CountPvProvider;
import org.apache.ibatis.annotations.SelectProvider;

/**
 * @author xuhaihong
 * @create 2018-01-30 18:16
 **/
public interface CountPvMapper {

    @SelectProvider(type = CountPvProvider.class, method = "save")
    void save(RequestArgs args);

    @SelectProvider(type = CountPvProvider.class, method = "count")
    Integer count(RequestArgs args);


}
