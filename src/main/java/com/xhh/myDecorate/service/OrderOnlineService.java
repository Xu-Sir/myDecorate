package com.xhh.myDecorate.service;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.dao.OrderOnline;
import com.xhh.myDecorate.mapper.provider.OrderOnlineProvider;

import java.util.List;

/**
 * @author xuhaihong
 * @create 2018-02-02 11:06
 **/
public interface OrderOnlineService {

    void save(OrderOnline orderOnline);

    List<OrderOnline> findOrderOnline(RequestArgs args);

    Integer countOrderOnline(RequestArgs args);
}
