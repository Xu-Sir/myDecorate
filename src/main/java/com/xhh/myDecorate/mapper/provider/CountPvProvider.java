package com.xhh.myDecorate.mapper.provider;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.util.StringUtil;
import org.apache.ibatis.jdbc.SQL;

/**
 * @author xuhaihong
 * @create 2018-01-30 18:17
 **/
public class CountPvProvider {

    public String save(RequestArgs args){
        String ip = args.getIp();

        SQL sql=new SQL().INSERT_INTO("count_pv ")
                .VALUES("create_time", "#{startTime}");
        if (StringUtil.isNotEmpty(ip)){

            sql.VALUES("ip", "'"+ip+"'");
        }
        String sqlS = sql.toString();
        System.out.println(sqlS);
    return sqlS;

    }

    public String count(RequestArgs args){

        Long startTime = args.getStartTime();
        Long endTime = args.getEndTime();
        String ip = args.getIp();
        SQL sql = new SQL().SELECT(" count(*)")
                .FROM("count_pv");
        if (startTime != null){
            sql.AND().WHERE(" create_time >= "+startTime);
        }
        if (endTime != null){
            sql.AND().WHERE(" create_time <= "+endTime);
        }
        if (StringUtil.isNotEmpty(ip)){
            sql.AND().WHERE(" ip = "+"'"+ip+"'");
        }
        String sqlS = sql.toString();
        System.out.println(sqlS);
        return sqlS;
    }

}
