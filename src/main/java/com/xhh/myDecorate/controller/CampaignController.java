package com.xhh.myDecorate.controller;

import com.xhh.myDecorate.common.CodeEnum;
import com.xhh.myDecorate.common.Constant;
import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.common.ResultR;
import com.xhh.myDecorate.dao.Campaign;
import com.xhh.myDecorate.service.CampaignService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

/**
 * @author xuhaihong
 * @create 2018-02-02 11:45
 **/
@RestController
public class CampaignController {

    @Autowired
    private CampaignService campaignService;

    @RequestMapping(value = "/marketList")
    public ResultR marketList(RequestArgs args){
        Long timeNow = Calendar.getInstance().getTimeInMillis();
        campaignService.checkOverdue(timeNow);
        SimpleDateFormat format = new SimpleDateFormat("yyyy/MM/dd");
        List<Campaign> list = campaignService.findCampaign(args);
        for (Campaign c:list){
            Long restT = c.getOverdueTime() - timeNow;
            if (restT > 0){
                c.setStatus("剩余"+restT/(24*3600*1000)+"天");
            }else {
                c.setStatus("活动结束");
            }
            c.setCreateTimeS(format.format(new Date(c.getCreateTime())));
            c.setOverdueTimeS(format.format(new Date(c.getOverdueTime())));
        }

        return new ResultR(CodeEnum.SUCCESS, list);
    }
    @RequestMapping(value = "/marketDetail")
    public ResultR marketDetail(RequestArgs args){
        SimpleDateFormat format = new SimpleDateFormat("yyyy年MM月dd日");
        String ids = args.getIds();
        String[] idss = ids.split(",");
        Long idLast=null;
        Long idNext=null;
        args.setId(Long.valueOf(idss[0]));
        String tempId = idss[0];
        if (!idss[1].equals("a")){
            tempId+=","+idss[1];
            idLast = Long.valueOf(idss[1]);
        }
        if (!idss[2].equals("a")){
            tempId+=","+idss[2];
            idNext = Long.valueOf(idss[2]);
        }
        args.setIds(tempId);
         Campaign  campaign = campaignService.marketDetail(args);
        if (campaign ==null){
            return new ResultR(CodeEnum.SUCCESS, null);
        }
        List<Campaign> list = campaignService.findCampaign(args);
        //插入上一个 下一个活动
        if (list.size()>0){
            for (Campaign c :list){
                if (c.getId().equals(idLast)){
                    campaign.setIdLast(idLast);
                    campaign.setTitleLast(c.getTitle());
                }
                if (c.getId().equals(idNext)){
                    campaign.setIdNext(idNext);
                    campaign.setTitleNext(c.getTitle());
                }
            }
        }
        campaign.setCreateTimeS(format.format(new Date(campaign.getCreateTime())));
        campaign.setOverdueTimeS(format.format(new Date(campaign.getOverdueTime())));

        return new ResultR(CodeEnum.SUCCESS, campaign);
    }

}
