package com.xhh.myDecorate.mapper.provider;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.dao.OrderOnline;
import com.xhh.myDecorate.util.StringUtil;
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
        if (StringUtil.isNotBlank(order.getUnits())){
            sql.VALUES("units","#{units}");
        }

        String sqlS = sql.toString();
        System.out.println(sqlS);
        return sqlS;

    }

    public String findOrderOnline(RequestArgs args){

        String userName = args.getName();
        String phoneNum = args.getPhoneNum();
        String building = args.getBuilding();
        String sizeH = args.getSizeH();
        String units = args.getUnits();
        Long startTime = args.getStartTime();
        Long endTime = args.getEndTime();
        Integer page = args.getPage();
        Integer size = args.getSize();

        SQL sql = new SQL().SELECT("*")
                .FROM("order_online");

        if (StringUtil.isNotBlank(userName)){
            sql.AND().WHERE("user_name like '%"+userName+"%'");
        }
        if (StringUtil.isNotBlank(phoneNum)){
            sql.AND().WHERE("phone_num like '%"+phoneNum+"%'");
        }
        if (StringUtil.isNotBlank(building)){
            sql.AND().WHERE("building like '%"+building+"%'");
        }
        if (StringUtil.isNotBlank(sizeH)){
            sql.AND().WHERE("size like '%"+sizeH+"%'");
        }
        if (StringUtil.isNotBlank(units)){
            sql.AND().WHERE("units = '%"+units+"%'");
        }
        if (startTime != null){
            sql.AND().WHERE("create_time >= "+startTime+"");
        }
        if (endTime != null){
            sql.AND().WHERE("create_time <= "+endTime+"");
        }
        String pageSql = sql.toString();
        if (page != null){
            pageSql += " Limit "+(page - 1)*size+","+size;
        }
        System.out.println(pageSql);
        return pageSql;
    }

    public String countOrderOnline(RequestArgs args){

        String userName = args.getName();
        String phoneNum = args.getPhoneNum();
        String building = args.getBuilding();
        String sizeH = args.getSizeH();
        Long startTime = args.getStartTime();
        Long endTime = args.getEndTime();

        SQL sql = new SQL().SELECT("count(*)")
                .FROM("order_online");

        if (StringUtil.isNotBlank(userName)){
            sql.AND().WHERE("user_name like '%"+userName+"%'");
        }
        if (StringUtil.isNotBlank(phoneNum)){
            sql.AND().WHERE("phone_num like '%"+phoneNum+"%'");
        }
        if (StringUtil.isNotBlank(building)){
            sql.AND().WHERE("building like '%"+building+"%'");
        }
        if (StringUtil.isNotBlank(sizeH)){
            sql.AND().WHERE("size like '%"+sizeH+"%'");
        }
        if (startTime != null){
            sql.AND().WHERE("create_time >= "+startTime+"");
        }
        if (endTime != null){
            sql.AND().WHERE("create_time <= "+endTime+"");
        }
        String pageSql = sql.toString();
        return pageSql;
    }
}
