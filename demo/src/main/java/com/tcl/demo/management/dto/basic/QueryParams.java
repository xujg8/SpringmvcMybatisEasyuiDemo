package com.tcl.demo.management.dto.basic;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

public class QueryParams {
  private int page = 1;
  private int rows = 10;
  private String sort;
  private String order;
  private Map<String, Object> params;

  public int getPage() {
    return page;
  }

  public void setPage(int page) {
    this.page = page;
  }

  public int getRows() {
    return rows;
  }

  public void setRows(int rows) {
    this.rows = rows;
  }

  public Map<String, Object> getParams() {
    if (params == null) {
      params = new HashMap<String, Object>();
    }
    params.put("offset", getOffset());
    params.put("limit", getLimit());
    if (StringUtils.isNotBlank(sort)) {
      params.put("sort", sort);
    }
    if (StringUtils.isNotBlank(order)) {
      params.put("order", order);
    }
    return params;
  }

  public void setParams(Map<String, Object> params) {
    this.params = params;
  }

  public String getString(String key) {
    return this.getString(key, "");
  }

  public String getString(String key, String defaultValue) {
    if (params != null) {
      Object obj = params.get(key);
      if (obj != null && obj instanceof String) {
        return (String) obj;
      }
    }
    return defaultValue;
  }

  public int getInt(String key) {
    return getInt(key, 0);
  }

  public int getInt(String key, int defaultValue) {
    if (params != null) {
      Object obj = params.get(key);
      if (obj != null && obj instanceof String && !"".equals(((String) obj).trim())) {
        return Integer.parseInt((String) obj);
      }
    }

    return defaultValue;
  }

  public Object getObj(String key) {
    if (params != null) {
      return params.get(key);
    }
    return null;
  }

  /**
   * 从哪一行开始
   *
   * @return
   */
  public int getOffset() {
    if (page == 0) {
      page = 1;
    }
    return (page - 1) * rows;
  }

  /**
   * 每页显示行数
   *
   * @return
   */
  public int getLimit() {
    if (rows == 0) {
      rows = 10;
    }
    return rows;
  }

  public String getSort() {
    return sort;
  }

  public void setSort(String sort) {
    this.sort = sort;
  }

  public String getOrder() {
    return order;
  }

  public void setOrder(String order) {
    this.order = order;
  }
}
