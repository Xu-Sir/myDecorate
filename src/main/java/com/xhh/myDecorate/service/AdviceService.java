package com.xhh.myDecorate.service;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.dao.Advice;

import java.util.List;

/**
 * @author xuhaihong
 * @create 2018-02-02 11:03
 **/
public interface AdviceService {

    void save(Advice advice);

    List<Advice> findAdvice(RequestArgs args);

    Integer countAdvice(RequestArgs args);

}
