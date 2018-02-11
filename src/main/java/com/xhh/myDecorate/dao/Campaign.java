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
    private String url;
    private Long createTime;
    private Long overdueTime;
    private String createTimeS;
    private String overdueTimeS;
    /**
     * 1.有效  2.无效
     */
    private String status;

    private String titleLast;
    private String titleNext;
    private Long idLast;
    private Long idNext;
}
