package com.xhh.myDecorate.mapper.provider;

import com.xhh.myDecorate.common.RequestArgs;
import org.apache.ibatis.jdbc.SQL;

/**
 * @author xuhaihong
 * @create 2018-01-26 18:31
 **/
public class UserProvider {

    public String findQc(RequestArgs args){
        Long userId = args.getUserId();
        String name = args.getName();
        String phoneNum = args.getPhoneNum();
        SQL sql = new SQL().SELECT("* ").FROM(" user");

        if (userId != null){
            sql.AND().WHERE(" id= "+userId);
        }
        if (name != null){
            sql.AND().WHERE("name like '%"+name+"%'" );
        }
        if (phoneNum != null){
            sql.AND().WHERE("phone_num =" +phoneNum);
        }
        String sqlS=sql.toString();
        System.out.println(sqlS);
        return sqlS;

    }
}
