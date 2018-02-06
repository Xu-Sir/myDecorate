package com.xhh.myDecorate.mapper.provider;

import com.xhh.myDecorate.dao.OrderOnline;
import org.apache.ibatis.jdbc.SQL;

/**
 * @author xuhaihong
 * @create 2018-02-02 10:11
 **/
public class OrderOnlineProvider {

    public String save(OrderOnline order){

        SQL sql=new SQL().INSERT_INTO("order_online ")
                .VALUES("user_name", "#{userName}")
                .VALUES("phone_num", "#{phoneNum}")
                .VALUES("building", "#{building}")
                .VALUES("size", "#{size}")
                .VALUES("create_time", "#{createTime}");

        String sqlS = sql.toString();
        System.out.println(sqlS);
        return sqlS;

    }
}
