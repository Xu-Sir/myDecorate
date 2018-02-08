package com.xhh.myDecorate.mapper.provider;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.dao.ProjectInstance;
import com.xhh.myDecorate.util.StringUtil;
import org.apache.ibatis.jdbc.SQL;

/**
 * @author xuhaihong
 * @create 2018-02-02 11:00
 **/
public class ProjectInstanceProvider {

    public String save(ProjectInstance instance){

        SQL sql=new SQL().INSERT_INTO("project_instance ")
                .VALUES("title", "#{title}")
                .VALUES("content", "#{content}")
                .VALUES("create_time", "#{createTime}")
                .VALUES("status", "#{status}");
        if (StringUtil.isNotEmpty(instance.getUrl())){
            sql.VALUES("url", "#{url}");
        }
        if (StringUtil.isNotEmpty(instance.getUrl())){
            sql.VALUES("orders", "#{orders}");
        }

        String sqlS = sql.toString();
        System.out.println(sqlS);
        return sqlS;

    }

    public String findProjectInstance(RequestArgs args){

        String title = args.getTitle();
        String content = args.getContent();
        Long startTime = args.getStartTime();
        Long endTime = args.getEndTime();
        Integer page = args.getPage();
        Integer size = args.getSize();

        SQL sql = new SQL().SELECT("*")
                .FROM("project_instance");

        if (StringUtil.isNotBlank(title)){
            sql.AND().WHERE("title like '%"+title+"%'");
        }
        if (StringUtil.isNotBlank(content)){
            sql.AND().WHERE("content like '%"+content+"%'");
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

    public String countProjectInstance(RequestArgs args){

        String title = args.getTitle();
        String content = args.getContent();
        Long startTime = args.getStartTime();
        Long endTime = args.getEndTime();

        SQL sql = new SQL().SELECT("count(*)")
                .FROM("project_instance");

        if (StringUtil.isNotBlank(title)){
            sql.AND().WHERE("title like '%"+title+"%'");
        }
        if (StringUtil.isNotBlank(content)){
            sql.AND().WHERE("content like '%"+content+"%'");
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
