package com.xhh.myDecorate.dao;

import lombok.Data;

/**
 * 设计案例
 * @author xuhaihong
 * @create 2018-01-31 18:06
 **/
@Data
public class DesignInstance {

    private Long id;
    /**
     * 设计师id
     */
    private Long userId;
    private String title;
    private String content;
    private String url;
    private Long createTime;
    private Long updateTime;
    private String status;
    /**
     * 作为主要作品 团队页面显示
     */
    private Integer mainCase;
}
