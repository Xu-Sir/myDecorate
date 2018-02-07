package com.xhh.myDecorate.mapper.provider;

import com.xhh.myDecorate.dao.Campaign;
import com.xhh.myDecorate.util.StringUtil;
import org.apache.ibatis.jdbc.SQL;

/**
 * @author xuhaihong
 * @create 2018-02-02 10:07
 **/
public class CampaignProvider {

    public String save(Campaign campaign){

        SQL sql=new SQL().INSERT_INTO("campaign ")
                .VALUES("title", "#{title}")
                .VALUES("content", "#{content}")
                .VALUES("create_time", "#{createTime}")
                .VALUES("overdue_time", "#{overdueTime}")
                .VALUES("status", "#{status}");
        if (StringUtil.isNotEmpty(campaign.getUrl())){
            sql.VALUES("url", "#{url}");
        }
        String sqlS = sql.toString();
        System.out.println(sqlS);
        return sqlS;

    }
}
