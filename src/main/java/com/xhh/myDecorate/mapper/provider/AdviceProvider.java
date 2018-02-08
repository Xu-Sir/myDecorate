package com.xhh.myDecorate.mapper.provider;

import com.xhh.myDecorate.common.RequestArgs;
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
        if (StringUtil.isNotBlank(advice.getQq())){
            sql.VALUES("qq", "#{qq}");
        }
        if (StringUtil.isNotBlank(advice.getLocation())){
            sql.VALUES("location", "#{location}");
        }
        String sqlS = sql.toString();
        System.out.println(sqlS);
        return sqlS;

    }

    public String findAdvice(RequestArgs args){

        String title = args.getTitle();
        String content = args.getContent();
        String name = args.getName();
        String phoneNum = args.getPhoneNum();
        Long startTime = args.getStartTime();
        Long endTime = args.getEndTime();
        Integer page = args.getPage();
        Integer size = args.getSize();

        SQL sql = new SQL().SELECT("*")
                .FROM("advice")
                .WHERE("type = "+args.getType());
        
        if (StringUtil.isNotBlank(title)){
            sql.AND().WHERE("title like '%"+title+"%'");
        }
        if (StringUtil.isNotBlank(content)){
            sql.AND().WHERE("content like '%"+content+"%'");
        }
        if (StringUtil.isNotBlank(name)){
            sql.AND().WHERE("name like '%"+name+"%'");
        }
        if (StringUtil.isNotBlank(phoneNum)){
            sql.AND().WHERE("phone_num like '%"+phoneNum+"%'");
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

    public String countAdvice(RequestArgs args){

        String title = args.getTitle();
        String content = args.getContent();
        String name = args.getName();
        String phoneNum = args.getPhoneNum();
        Long startTime = args.getStartTime();
        Long endTime = args.getEndTime();

        SQL sql = new SQL().SELECT("count(*)")
                .FROM("advice")
                .WHERE("type = "+args.getType());

        if (StringUtil.isNotBlank(title)){
            sql.AND().WHERE("title like '%"+title+"%'");
        }
        if (StringUtil.isNotBlank(content)){
            sql.AND().WHERE("content like '%"+content+"%'");
        }
        if (StringUtil.isNotBlank(name)){
            sql.AND().WHERE("name like '%"+name+"%'");
        }
        if (StringUtil.isNotBlank(phoneNum)){
            sql.AND().WHERE("phone_num like '%"+phoneNum+"%'");
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
