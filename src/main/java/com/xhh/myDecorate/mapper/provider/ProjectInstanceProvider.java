package com.xhh.myDecorate.mapper.provider;

import com.xhh.myDecorate.dao.OrderOnline;
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
}
