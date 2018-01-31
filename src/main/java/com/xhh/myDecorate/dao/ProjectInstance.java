package com.xhh.myDecorate.dao;

import lombok.Data;

/**
 * @author xuhaihong
 * @create 2018-01-31 18:08
 **/
@Data
public class ProjectInstance {

    private Long id;
    private String title;
    private String content;
    private String url;
    private Long createTime;
    private Long updateTime;
    private Integer orders;
    private String status;

}
