package com.xhh.myDecorate.mapper;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.dao.Designer;
import com.xhh.myDecorate.mapper.provider.DesignerProvider;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectProvider;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface DesignerMapper {

    @SelectProvider(type = DesignerProvider.class, method = "findDesignerList")
    List<Designer> findDesignerList(RequestArgs args);

    @SelectProvider(type = DesignerProvider.class, method = "countDesignerList")
    Integer countDesignerList(RequestArgs args);

    @SelectProvider(type = DesignerProvider.class, method = "save")
    void save(Designer designer);

    @Select(value = "UPDATE designer SET title = #{title}, image_url = #{imageUrl}, case_id = #{caseId} WHERE id = #{id}")
    void update(@Param("id") Long Id,@Param("title")String title,@Param("imageUrl")String imageUrl,@Param("caseId")Long caseId);

}
