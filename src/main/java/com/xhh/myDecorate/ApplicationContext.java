package com.xhh.myDecorate;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.web.servlet.ErrorPage;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;

/**
 * @author xuhaihong
 * @create 2018-01-19 14:25
 **/
//@EnableDiscoveryClient	/*服务注册与发现*/
@SpringBootApplication
public class ApplicationContext {

    @Bean
    public EmbeddedServletContainerCustomizer containerCustomizer(){
        return (container -> {
            ErrorPage error401page = new ErrorPage(HttpStatus.UNAUTHORIZED, "/401.html");
            ErrorPage error404page = new ErrorPage(HttpStatus.NOT_FOUND, "/404.html");
            ErrorPage error500page = new ErrorPage(HttpStatus.INTERNAL_SERVER_ERROR, "/500.html");
            container.addErrorPages(error401page, error404page, error500page);
        });
    }


    public static void main(String[] args) {
        SpringApplication.run(ApplicationContext.class,args);
    }
}
