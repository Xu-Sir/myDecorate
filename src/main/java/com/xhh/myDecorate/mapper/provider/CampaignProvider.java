package com.xhh.myDecorate.mapper.provider;

import com.xhh.myDecorate.common.RequestArgs;
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

    public String findCampaign(RequestArgs args){

        String title = args.getTitle();
        String content = args.getContent();
        String status = args.getStatus();
        Long startTime = args.getStartTime();
        Long endTime = args.getEndTime();
        String ids = args.getIds();
        Integer page = args.getPage();
        Integer size = args.getSize();

        SQL sql = new SQL().SELECT("*")
                .FROM("campaign");

        if (StringUtil.isNotBlank(title)){
            sql.AND().WHERE("title like '%"+title+"%'");
        }
        if (StringUtil.isNotBlank(content)){
            sql.AND().WHERE("content like '%"+content+"%'");
        }
        if (StringUtil.isNotBlank(status)){
            sql.AND().WHERE("content = "+status);
        }

        if (startTime != null){
            sql.AND().WHERE("create_time >= "+startTime+"");
        }
        if (endTime != null){
            sql.AND().WHERE("create_time <= "+endTime+"");
        }
        if (StringUtil.isNotBlank(ids)){
            sql.AND().WHERE("id in ("+ids+")");
        }
        String pageSql = sql.toString();
        pageSql += "ORDER BY create_time DESC ,status";
        if (page != null){
            pageSql += " Limit "+(page - 1)*size+","+size;
        }
        System.out.println(pageSql);
        return pageSql;
    }
    public String marketDetail(RequestArgs args){


        SQL sql = new SQL().SELECT("*")
                .FROM("campaign")
                .WHERE("id = #{id}");
        String pageSql = sql.toString();
        System.out.println(pageSql);
        return pageSql;
    }

    public String countCampaign(RequestArgs args){

        String title = args.getTitle();
        String content = args.getContent();
        String ids = args.getIds();
        Long startTime = args.getStartTime();
        Long endTime = args.getEndTime();

        SQL sql = new SQL().SELECT("count(*)")
                .FROM("campaign")
                .WHERE("status = "+args.getStatus());

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
        if (StringUtil.isNotBlank(ids)){
            sql.AND().WHERE("id in ("+ids+")");
        }
        String pageSql = sql.toString();
        return pageSql;
    }


}
