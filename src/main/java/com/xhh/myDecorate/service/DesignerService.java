package com.xhh.myDecorate.service;

import com.xhh.myDecorate.common.RequestArgs;
import com.xhh.myDecorate.dao.Designer;

import java.util.List;


public interface DesignerService {

    List<Designer> findDesignerList(RequestArgs args);

    Integer countDesignerList(RequestArgs args);

    void save(Designer designer);
}
