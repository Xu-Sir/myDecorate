package com.xhh.myDecorate.dao;

import lombok.Data;

/**
 * @author xuhaihong
 * @create 2018-01-31 18:04
 **/
@Data
public class CustomStory {

    private Long id;
    private String title;
    private String content;
    private String url;
    private Long createTime;
    private String type;

}
