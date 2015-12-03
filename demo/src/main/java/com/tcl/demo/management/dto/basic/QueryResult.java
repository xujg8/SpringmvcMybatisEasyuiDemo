package com.tcl.demo.management.dto.basic;

import java.util.List;

public class QueryResult<T> {
  /**
   * 查询出的结果总数
   */
  private Long total = 0L;
  private List<T> rows;

  public QueryResult() {

  }

  public QueryResult(Long total, List<T> rows) {
    this.total = total;
    this.rows = rows;
  }

  public Long getTotal() {
    return total;
  }

  public void setTotal(Long total) {
    this.total = total;
  }

  public List<T> getRows() {
    return rows;
  }

  public void setRows(List<T> rows) {
    this.rows = rows;
  }

}
