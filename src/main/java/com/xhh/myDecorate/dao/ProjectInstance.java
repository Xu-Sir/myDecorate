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
     * 户型  1.商品房  2.别墅  3.复式  4.自建房  5.商业大厦 6.其他
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
    /**
     * 阶段  1.开工 2.砌墙阶段 3.水电改造 4.泥瓦阶段 5.木作阶段 6.油漆阶段 7.安装阶段 8.完工
     */
    private Integer stage;
    /**
     * 图片路径  “，”分割
     */
    private String  images;
    /**
     * 地区
     */
    private String  location;
    /**
     * 小区
     */
    private String village;

}
