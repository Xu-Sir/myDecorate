package com.xhh.myDecorate.service.impl;

import com.xhh.myDecorate.dao.Campaign;
import com.xhh.myDecorate.mapper.CampaignMapper;
import com.xhh.myDecorate.service.CampaignService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        campaignMapper.save(campaign);
    }
}
