package com.xhh.myDecorate.dao;

import lombok.Data;

/**
 * 工程案例
 * 正在  或者已经做的案例
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
    /**
     *
     */
    private Integer type;
    /**
     * 面积
     */
    private String area;
    /**
     * 预算
     */
    private Integer budget;

}
