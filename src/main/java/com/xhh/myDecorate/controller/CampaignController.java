package com.xhh.myDecorate.controller;

import com.xhh.myDecorate.common.CodeEnum;
import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.common.ResultR;
import com.xhh.myDecorate.dao.Campaign;
import com.xhh.myDecorate.service.CampaignService;
import com.xhh.myDecorate.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.*;

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
        Integer size = args.getSize();
        if (size==null){
            size = 10;
        }
        campaignService.checkOverdue(timeNow);
        SimpleDateFormat format = new SimpleDateFormat("yyyy/MM/dd");
        List<Campaign> list = campaignService.findCampaign(args);
        if (list.size() < 1){
            Map map = new HashMap();
            map.put("list", list);
            map.put("total", 0);
            map.put("page", args.getPage());
            map.put("size", size);
            return new ResultR(CodeEnum.SUCCESS, map);
        }
        Integer total = campaignService.countCampaign(args);
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
        Map map = new HashMap();
        map.put("list", list);
        map.put("total", total);
        map.put("page", args.getPage());
        map.put("size", size);

        return new ResultR(CodeEnum.SUCCESS, map);
    }
    @RequestMapping(value = "/marketDetail")
    public ResultR marketDetail(RequestArgs args){
        SimpleDateFormat format = new SimpleDateFormat("yyyy年MM月dd日");
         Campaign  campaign = campaignService.marketDetail(args);
        if (campaign ==null){
            return new ResultR(CodeEnum.SUCCESS, null);
        }
        List<Campaign> list = campaignService.findCampaign(args);
        //插入上一个 下一个活动
        for (int i = 0 ;i<list.size(); i++){
            if (campaign.getId().equals(list.get(i).getId())){
                if (i > 0){
                    campaign.setIdLast(list.get(i-1).getId());
                    campaign.setTitleLast(StringUtil.abbreviate(list.get(i-1).getTitle(),15));
                }
                if (i < list.size()-1){
                    campaign.setIdNext(list.get(i+1).getId());
                    campaign.setTitleNext(StringUtil.abbreviate(list.get(i+1).getTitle(),15));
                }
            }

        }
        campaign.setCreateTimeS(format.format(new Date(campaign.getCreateTime())));
        campaign.setOverdueTimeS(format.format(new Date(campaign.getOverdueTime())));

        return new ResultR(CodeEnum.SUCCESS, campaign);
    }

}
