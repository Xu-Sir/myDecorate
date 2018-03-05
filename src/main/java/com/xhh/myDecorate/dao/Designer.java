package com.xhh.myDecorate.dao;

import lombok.Data;

/**
 * 设计师
 */
@Data
public class Designer {

    private Long id ;
    private String name;
    private String experience;
    private String summary;
    /**
     * 1.总设计师，2.设计总监，3.设计经理，4.首席设计师，5.高级设计师，6.专家设计师，7.主笔设计师，8.设计师
     */
    private String grade;
    private String style;
    private String works;
    private String images;
    /**
     * 主要作品  名称
     */
    private String title;
    /**
     * 主要作品  图片链接
     */
    private String imageUrl;
    /**
     * 主要作品 id
     */
    private Long caseId;
}
