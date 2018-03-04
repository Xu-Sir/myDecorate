package com.xhh.myDecorate.mapper.provider;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.dao.Designer;
import com.xhh.myDecorate.util.StringUtil;
import org.apache.ibatis.jdbc.SQL;

public class DesignerProvider {

    public String findDesignerList(RequestArgs args){

        Long id = args.getId();
        String name = args.getName();
        String experience = args.getExperience();
        String grade = args.getGrade();
        String style = args.getStyle();
        Integer page = args.getPage();
        Integer size = args.getSize();
        SQL sql = new SQL().SELECT("*")
                .FROM("designer");
        if (id != null){
            sql.AND().WHERE("id = "+id);
        }
        if (StringUtil.isNotBlank(name)){
            sql.AND().WHERE("name = "+name);
        }
        if (StringUtil.isNotBlank(experience)){
            sql.AND().WHERE("experience = "+experience);
        }
        if (StringUtil.isNotBlank(style)){
            sql.AND().WHERE("style like  '%"+style+"%'");
        }
        if (StringUtil.isNotBlank(experience)){
            sql.AND().WHERE("experience = "+experience);
        }
        if (StringUtil.isNotBlank(grade)){
            sql.AND().WHERE("grade like '%"+grade+"%'");
        }
        String pageSql = sql.toString();
        pageSql += " ORDER BY grade ASC ";
        if (page != null){
            pageSql += " LIMIT "+size*(page - 1)+" , "+size;
        }
        System.out.println(pageSql);
        return pageSql;
    }

    public String countDesignerList(RequestArgs args){

        Long id = args.getId();
        String name = args.getName();
        String experience = args.getExperience();
        String grade = args.getGrade();
        String style = args.getStyle();
        SQL sql = new SQL().SELECT("count(*)")
                .FROM("designer");
        if (id != null){
            sql.AND().WHERE("id = "+id);
        }
        if (StringUtil.isNotBlank(name)){
            sql.AND().WHERE("name = "+name);
        }
        if (StringUtil.isNotBlank(experience)){
            sql.AND().WHERE("experience = "+experience);
        }
        if (StringUtil.isNotBlank(style)){
            sql.AND().WHERE("style like  '%"+style+"%'");
        }
        if (StringUtil.isNotBlank(experience)){
            sql.AND().WHERE("experience = "+experience);
        }
        if (StringUtil.isNotBlank(grade)){
            sql.AND().WHERE("grade like '%"+grade+"%'");
        }
        String pageSql = sql.toString();
        return pageSql;
    }

    public String save(Designer designer){

        SQL sql=new SQL().INSERT_INTO("designer ")
                .VALUES("name", "#{name}")
                .VALUES("experience", "#{experience}")
                .VALUES("summary", "#{summary}")
                .VALUES("grade", "#{grade}")
                .VALUES("style", "#{style}")
                .VALUES("works", "#{works}");
        if (StringUtil.isNotBlank(designer.getImages())){
            sql.VALUES("images", "#{images}");
        }
        String sqlS = sql.toString();
        System.out.println(sqlS);
        return sqlS;

    }

}
