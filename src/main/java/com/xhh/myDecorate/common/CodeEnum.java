package com.xhh.myDecorate.common;


import lombok.Getter;

/**
 * @author xuhaihong
 * @create 2018-01-26 17:19
 **/
@Getter
public enum CodeEnum {

    SUCCESS("success", "操作成功"),
    FAILED("failed", "操作失败");




    private String code;
    private String message;
    CodeEnum(String code,String message){
        this.code = code;
        this.message = message;
    }

}
