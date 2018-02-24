package com.xhh.myDecorate.mapper;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.dao.CustomStory;
import com.xhh.myDecorate.mapper.provider.CustomStoryProvider;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.SelectProvider;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author xuhaihong
 * @create 2018-02-02 10:08
 **/
@Mapper
@Repository
public interface CustomStoryMapper {

    @SelectProvider(type = CustomStoryProvider.class, method = "save")
    void save(CustomStory story);

    @SelectProvider(type = CustomStoryProvider.class, method = "findCustomStory")
    List<CustomStory> findCustomStory(RequestArgs args);

    @SelectProvider(type = CustomStoryProvider.class, method = "countCustomStory")
    Integer countCustomStory(RequestArgs args);

    @SelectProvider(type = CustomStoryProvider.class, method = "customStoryDetail")
    CustomStory customStoryDetail(RequestArgs args);
}
