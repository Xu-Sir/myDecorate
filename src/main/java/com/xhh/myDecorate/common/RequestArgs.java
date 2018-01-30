package com.xhh.myDecorate.common;

import lombok.Data;

/**
 * @author xuhaihong
 * @create 2018-01-26 18:02
 **/
@Data
public class RequestArgs {

    private String name;

    private String phoneNum;

    private Long userId;

    private String ip;

    private Long startTime;

    private Long endTime;
}
