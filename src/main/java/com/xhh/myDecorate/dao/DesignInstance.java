package com.xhh.myDecorate.dao;

import lombok.Data;

/**
 * 设计案例
 * 设计的例子、样例
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
    /**
     * 案例图片路径  以“，”隔开
     */
    private String imagesUrl;
    /**
     * 风格  1.商品房  2.别墅  3.复式  4.自建房  5.商业大厦 6.其他
     */
    private Integer type;
    /**
     * 主页显示 ：1 ,2, 3 ,4 ,5 ,6 ,7 对应顺序
     */
    private Integer showInIndex;
    /**
     * 户型  1.现代  2.中式  3.欧式  4.古典 5.美式 6.田园  7.其他
     */
    private Integer style;
    /**
     * 面积
     */
    private String area;
}
