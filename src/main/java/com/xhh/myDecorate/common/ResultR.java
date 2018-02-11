package com.xhh.myDecorate.common;

import lombok.Data;

/**
 * @author xuhaihong
 * @create 2018-01-26 17:13
 **/
@Data
public class ResultR<T> {

    private T data;
    private String code;
    private String message;
    public ResultR(CodeEnum codeEnum,T data){
        this.data = data;
        this.code = codeEnum.getCode();
        this.message = codeEnum.getMessage();

    }

    @Override
    public String toString(){
        return null;
    }
}
