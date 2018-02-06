package com.xhh.myDecorate.dao;

import lombok.Data;

/**
 * 在线下单
 * @author xuhaihong
 * @create 2018-01-31 18:07
 **/
@Data
public class OrderOnline {

    private Long id;
    private String userName;
    private String phoneNum;
    private String location;
    private String building;
    private String content;
    private String size;
    private Long createTime;
    private String type;

}
