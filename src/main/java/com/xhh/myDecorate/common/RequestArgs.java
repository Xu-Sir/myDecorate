package com.xhh.myDecorate.common;

import lombok.Data;

/**
 * @author xuhaihong
 * @create 2018-01-26 18:02
 **/
@Data
public class RequestArgs {

    private Integer page;
    private Integer size;

    private String name;

    private String phoneNum;

    private Long userId;

    private String ip;

    private Long startTime;

    private Long endTime;

    private String title;

    private String content;

    private String type;

    private String url;

    private String status;

    private String sizeH;
    /**
     * 楼盘位置
     */
    private String building;


}
