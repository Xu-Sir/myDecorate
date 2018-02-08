package com.xhh.myDecorate.mapper;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.dao.Campaign;
import com.xhh.myDecorate.mapper.provider.CampaignProvider;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectProvider;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author xuhaihong
 * @create 2018-02-02 10:07
 **/
@Mapper
@Repository
public interface CampaignMapper {

    @SelectProvider(type = CampaignProvider.class, method = "save")
    void save(Campaign campaign);

    /**
     * 更新过期活动
     * @param currentTime
     */
    @Select(value = "UPDATE campaign c set c.`status` =2 where overdue_time <= #{currentTime}")
    void checkOverdue(Long currentTime);

    @SelectProvider(type = CampaignProvider.class, method = "findCampaign")
    List<Campaign> findCampaign(RequestArgs args);

    @SelectProvider(type = CampaignProvider.class, method = "countCampaign")
    Integer countCampaign(RequestArgs args);
}
