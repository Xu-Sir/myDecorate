package com.xhh.myDecorate.mapper.provider;

import com.xhh.myDecorate.dao.Advice;
import com.xhh.myDecorate.util.StringUtil;
import org.apache.ibatis.jdbc.SQL;

/**
 * @author xuhaihong
 * @create 2018-02-02 10:06
 **/
public class AdviceProvider {

    public String save(Advice advice){

        SQL sql=new SQL().INSERT_INTO("advice ")
                .VALUES("title", "#{title}")
                .VALUES("content", "#{content}")
                .VALUES("name", "#{name}")
                .VALUES("phone_num", "#{phoneNum}")
                .VALUES("create_time", "#{createTime}")
                .VALUES("type", "#{type}");
        if (StringUtil.isNotEmpty(advice.getQq())){
            sql.VALUES("qq", "#{qq}");
        }
        if (StringUtil.isNotEmpty(advice.getLocation())){
            sql.VALUES("location", "#{location}");
        }
        String sqlS = sql.toString();
        System.out.println(sqlS);
        return sqlS;

    }
}
