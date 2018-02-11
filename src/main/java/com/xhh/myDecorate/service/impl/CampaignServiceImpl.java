package com.xhh.myDecorate.service.impl;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.dao.Campaign;
import com.xhh.myDecorate.mapper.CampaignMapper;
import com.xhh.myDecorate.service.CampaignService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.List;

/**
 * @author xuhaihong
 * @create 2018-02-02 11:04
 **/
@Service
public class CampaignServiceImpl implements CampaignService{

    @Autowired
    CampaignMapper campaignMapper;

    @Override
    public void save(Campaign campaign){
        campaign.setCreateTime(Calendar.getInstance().getTimeInMillis());
        campaignMapper.save(campaign);
    }

    @Override
    public void checkOverdue(Long currentTime){
        campaignMapper.checkOverdue(Calendar.getInstance().getTimeInMillis());
    }

    @Override
    public List<Campaign> findCampaign(RequestArgs args){
        return campaignMapper.findCampaign(args);
    }

    @Override
    public Campaign marketDetail(RequestArgs args){
        return campaignMapper.marketDetail(args);
    }
    @Override
    public Integer countCampaign(RequestArgs args){
        return campaignMapper.countCampaign(args);
    }
}
