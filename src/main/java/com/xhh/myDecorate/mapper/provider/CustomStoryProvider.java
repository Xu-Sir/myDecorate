package com.xhh.myDecorate.mapper.provider;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.dao.CustomStory;
import com.xhh.myDecorate.util.StringUtil;
import org.apache.ibatis.jdbc.SQL;

/**
 * @author xuhaihong
 * @create 2018-02-02 10:09
 **/
public class CustomStoryProvider {

    public String save(CustomStory story){

        SQL sql=new SQL().INSERT_INTO("custom_story ")
                .VALUES("title", "#{title}")
                .VALUES("content", "#{content}")
                .VALUES("create_time", "#{createTime}");
        if (StringUtil.isNotEmpty(story.getUrl())){
            sql.VALUES("url", "#{url}");
        }
        if (story.getUserId() !=null){
            sql.VALUES("user_id", "#{userId}");
        }
        String sqlS = sql.toString();
        System.out.println(sqlS);
        return sqlS;

    }

    public String findCustomStory(RequestArgs args){

        String title = args.getTitle();
        String content = args.getContent();
        Long startTime = args.getStartTime();
        Long endTime = args.getEndTime();
        Long userId = args.getUserId();
        Integer page = args.getPage();
        Integer size = args.getSize();

        SQL sql = new SQL().SELECT("*")
                .FROM("custom_story");

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
        if (page != null){
            pageSql += " Limit "+(page - 1)*size+","+size;
        }
        System.out.println(pageSql);
        return pageSql;
    }

    public String countCustomStory(RequestArgs args){

        String title = args.getTitle();
        String content = args.getContent();
        Long startTime = args.getStartTime();
        Long endTime = args.getEndTime();
        Long userId = args.getUserId();

        SQL sql = new SQL().SELECT("count(*)")
                .FROM("custom_story");

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
}
