package com.xhh.myDecorate.controller;

import com.xhh.myDecorate.common.Constant;
import com.xhh.myDecorate.common.VerifyCodeUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.Servlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.util.Map;

/**
 * 生成验证码
 * @author xuhaihong
 * @create 2018-02-06 15:25
 **/
@Controller
public class AuthImageController extends HttpServlet implements Servlet{

    static final long serialVersionUID = 1L;
    @Value("${spring.profiles.active}")
    private String profiles;

    @ResponseBody
    @RequestMapping(value = "/verifyCode")
    public void verifyCode(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setHeader("Pragma", "No-cache");
        response.setHeader("Cache-Control", "no-cache");
        response.setDateHeader("Expires", 0);
        response.setContentType("image/jpeg");

        //生成随机字串
        String verifyCode = VerifyCodeUtils.generateVerifyCode(4);
        //存入会话session
        HttpSession session = request.getSession(true);
        //删除以前的
        session.removeAttribute("verCode");
        session.setAttribute("verCode", verifyCode.toLowerCase());
        //生成图片
        int w = 100, h = 30;
        VerifyCodeUtils.outputImage(w, h, response.getOutputStream(), verifyCode);

    }

    @ResponseBody
    @RequestMapping(value = "/createImage")
    public  String  createImage(HttpServletRequest request) throws IOException{
        //生成随机字串
        String verifyCode = VerifyCodeUtils.generateVerifyCode(4);
        //存入会话session
        HttpSession session = request.getSession(true);
        //删除以前的
        session.removeAttribute("verCode");
        session.setAttribute("verCode", verifyCode.toLowerCase());
        //生成图片
        int w = 100, h = 30;
        File file ;
        if (Constant.DEV.equals(profiles)){

            file = new File("/home/images/verifyImage",verifyCode+".jpg");
        }else{

            String classPath = this.getClass().getResource("/").getPath();
            File dir =  new File(classPath+"/static/tools");
             file = new File(dir, verifyCode + ".jpg");
        }


        VerifyCodeUtils.outputImage(w, h,file, verifyCode);

        return verifyCode;

    }

    /**
     * 验证 验证码
     */
    @ResponseBody
    @RequestMapping(value = "/checkVcode")
    public String checkVcode(HttpServletRequest request,@RequestParam Map<String,Object> param){
        HttpSession session = request.getSession();
        String vcode = (String) session.getAttribute("verCode");
        String code = (String) param.get("values");
        if (vcode.toLowerCase().equals(code)){
            return Constant.SUCCESS;
        }
        return Constant.FAILED;
    }

}
