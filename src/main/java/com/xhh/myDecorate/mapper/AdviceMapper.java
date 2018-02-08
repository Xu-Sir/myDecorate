package com.xhh.myDecorate.mapper;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.dao.Advice;
import com.xhh.myDecorate.mapper.provider.AdviceProvider;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.SelectProvider;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author xuhaihong
 * @create 2018-02-02 10:06
 **/
@Mapper
@Repository
public interface AdviceMapper {

    @SelectProvider(type = AdviceProvider.class, method = "save")
    void save(Advice advice);

    @SelectProvider(type =  AdviceProvider.class, method = "findAdvice")
    List<Advice> findAdvice(RequestArgs args);

    @SelectProvider(type =  AdviceProvider.class, method = "countAdvice")
    Integer countAdvice(RequestArgs args);

}
