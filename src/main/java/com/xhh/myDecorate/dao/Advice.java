package com.xhh.myDecorate.dao;

import lombok.Data;

/**
 * @author xuhaihong
 * @create 2018-01-31 17:41
 **/
@Data
public class Advice {

    private Long id;
    private String title;
    private String content;
    private String name;
    private String phoneNum;
    private String qq;
    private String location;
    private Long createTime;
    private String type;

}
