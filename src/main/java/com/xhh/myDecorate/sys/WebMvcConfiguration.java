package com.xhh.myDecorate.sys;

import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * @author xuhaihong
 * @create 2018-02-01 14:34
 **/
public class WebMvcConfiguration extends WebMvcConfigurerAdapter {

    /**
     * 添加静态资源
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry){

//        registry.addResourceHandler("/js/**","/css/**","/images/**")
        registry.addResourceHandler("/static/**")
                .addResourceLocations("classpath:/static/")
                .setCachePeriod(31556926);
    }

}
