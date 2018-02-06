package com.xhh.myDecorate.mapper;

import com.xhh.myDecorate.dao.OrderOnline;
import com.xhh.myDecorate.mapper.provider.OrderOnlineProvider;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.SelectProvider;
import org.springframework.stereotype.Repository;

/**
 * @author xuhaihong
 * @create 2018-02-02 10:10
 **/
@Mapper
@Repository
public interface OrderOnlineMapper {

    @SelectProvider(type = OrderOnlineProvider.class, method = "save")
    void save(OrderOnline orderOnline);
}
