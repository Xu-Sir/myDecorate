package com.xhh.myDecorate.mapper.provider;

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
        String sqlS = sql.toString();
        System.out.println(sqlS);
        return sqlS;

    }
}
