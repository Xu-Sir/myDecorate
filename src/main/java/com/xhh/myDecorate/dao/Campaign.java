package com.xhh.myDecorate.dao;

import lombok.Data;

/**
 * 活动
 * @author xuhaihong
 * @create 2018-01-31 18:01
 **/
@Data
public class Campaign {

    private Long id;
    private String title;
    private String content;
    /**
     * 简略详情
     */
    private String contentSimp;
    private String url;
    private Long createTime;
    private Long overdueTime;
    private String createTimeS;
    /**
     * 时间  日
     */
    private String createTimeSDay;
    /**
     * 时间  年月
     */
    private String createTimeSYM;

    private String overdueTimeS;
    /**
     * 1.有效  2.无效
     */
    private String status;

    private String titleLast;
    private String titleNext;
    private Long idLast;
    private Long idNext;
    /**
     * 简介  用于列表页的详情
     */
    private String subject;
}
