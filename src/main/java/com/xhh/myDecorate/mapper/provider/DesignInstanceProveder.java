package com.xhh.myDecorate.mapper.provider;

import com.xhh.myDecorate.dao.DesignInstance;
import com.xhh.myDecorate.util.StringUtil;
import org.apache.ibatis.jdbc.SQL;

/**
 * @author xuhaihong
 * @create 2018-02-02 10:10
 **/
public class DesignInstanceProveder {

    public String save(DesignInstance instance){

        SQL sql=new SQL().INSERT_INTO("design_instance ")
                .VALUES("title", "#{title}")
                .VALUES("content", "#{content}")
                .VALUES("create_time", "#{createTime}")
                .VALUES("status", "#{status}");
        if (StringUtil.isNotEmpty(instance.getUrl())){
            sql.VALUES("url", "#{url}");
        }
        String sqlS = sql.toString();
        System.out.println(sqlS);
        return sqlS;

    }
}
