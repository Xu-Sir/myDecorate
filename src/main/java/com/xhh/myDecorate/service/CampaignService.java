package com.xhh.myDecorate.service;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.dao.Campaign;
import com.xhh.myDecorate.mapper.provider.CampaignProvider;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author xuhaihong
 * @create 2018-02-02 11:04
 **/
public interface CampaignService {

    void save(Campaign campaign);

    void checkOverdue(Long currentTime);

    List<Campaign> findCampaign(RequestArgs args);

    Integer countCampaign(RequestArgs args);
}
