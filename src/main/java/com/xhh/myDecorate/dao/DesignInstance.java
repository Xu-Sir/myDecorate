package com.xhh.myDecorate.dao;

import lombok.Data;

/**
 * 设计案例
 * @author xuhaihong
 * @create 2018-01-31 18:06
 **/
@Data
public class DesignInstance {

    public Long id;
    public String title;
    public String content;
    public String url;
    public Long createTime;
    public Long updateTime;
    public String status;

}
