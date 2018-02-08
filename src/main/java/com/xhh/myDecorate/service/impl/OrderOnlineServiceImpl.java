package com.xhh.myDecorate.service.impl;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.dao.OrderOnline;
import com.xhh.myDecorate.mapper.OrderOnlineMapper;
import com.xhh.myDecorate.service.OrderOnlineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.List;

/**
 * @author xuhaihong
 * @create 2018-02-02 11:07
 **/
@Service
public class OrderOnlineServiceImpl implements OrderOnlineService {

    @Autowired
    OrderOnlineMapper orderOnlineMapper;
    @Override
    public void save(OrderOnline orderOnline){
        orderOnline.setCreateTime(Calendar.getInstance().getTimeInMillis());
        orderOnlineMapper.save(orderOnline);
    }

    @Override
    public List<OrderOnline> findOrderOnline(RequestArgs args){
        return orderOnlineMapper.findOrderOnline(args);
    }

    @Override
    public Integer countOrderOnline(RequestArgs args){
        return orderOnlineMapper.countOrderOnline(args);
    }
}
