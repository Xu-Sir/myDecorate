package com.xhh.myDecorate.mapper.provider;

import com.xhh.myDecorate.common.RequestArgs;
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
        if (instance.getUserId() != null){
            sql.VALUES("user_id", "#{userId}");
        }
        if (instance.getMainCase() != null){
            sql.VALUES("main_case", "#{mainCase}");
        }
        if (StringUtil.isNotBlank(instance.getImagesUrl())){
            sql.VALUES("images_url", "#{imagesUrl}");
        }
        String sqlS = sql.toString();
        System.out.println(sqlS);
        return sqlS;

    }

    public String findDesignInstance(RequestArgs args){

        String title = args.getTitle();
        String content = args.getContent();
        Long userId = args.getUserId();
        Long startTime = args.getStartTime();
        Long endTime = args.getEndTime();
        Integer showInIndex = args.getShowInIndex();
        Integer page = args.getPage();
        Integer size = args.getSize();

        SQL sql = new SQL().SELECT("*")
                .FROM("design_instance");

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
        if (userId != null){
            sql.AND().WHERE("user_id = "+userId+"");
        }
        if (showInIndex != null){
            sql.AND().WHERE("show_in_index IS NOT NULL");
        }
        String pageSql = sql.toString();
        if (showInIndex != null){
            pageSql += " ORDER BY show_in_index ASC ";
        }
        if (page != null){
            pageSql += " Limit "+(page - 1)*size+","+size;
        }
        System.out.println(pageSql);
        return pageSql;
    }

    public String countDesignInstance(RequestArgs args){

        String title = args.getTitle();
        String content = args.getContent();
        Long userId = args.getUserId();
        Long startTime = args.getStartTime();
        Long endTime = args.getEndTime();

        SQL sql = new SQL().SELECT("count(*)")
                .FROM("design_instance");

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
        if (userId != null){
            sql.AND().WHERE("user_id = "+userId+"");
        }
        String pageSql = sql.toString();
        return pageSql;
    }

    public String searchDesignInstance(DesignInstance designInstance){

        String title = designInstance.getTitle();
        String content = designInstance.getContent();
        Long userId = designInstance.getUserId();
        Long createTime = designInstance.getCreateTime();

        SQL sql = new SQL().SELECT("*")
                .FROM("design_instance");

        if (StringUtil.isNotBlank(title)){
            sql.AND().WHERE("title like '%"+title+"%'");
        }
        if (StringUtil.isNotBlank(content)){
            sql.AND().WHERE("content like '%"+content+"%'");
        }
        if (createTime != null){
            sql.AND().WHERE("create_time >= "+createTime+"");
        }
        if (userId != null){
            sql.AND().WHERE("user_id = "+userId+"");
        }
        String pageSql = sql.toString();
        System.out.println(pageSql);
        return pageSql;
    }
}
