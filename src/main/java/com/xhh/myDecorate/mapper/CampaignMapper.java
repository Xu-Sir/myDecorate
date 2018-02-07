package com.xhh.myDecorate.mapper;

import com.xhh.myDecorate.dao.Campaign;
import com.xhh.myDecorate.mapper.provider.CampaignProvider;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.SelectProvider;
import org.springframework.stereotype.Repository;

/**
 * @author xuhaihong
 * @create 2018-02-02 10:07
 **/
@Mapper
@Repository
public interface CampaignMapper {

    @SelectProvider(type = CampaignProvider.class, method = "save")
    void save(Campaign campaign);
}
