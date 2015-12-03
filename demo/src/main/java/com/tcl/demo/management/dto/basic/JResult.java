package com.tcl.demo.management.dto.basic;

public class JResult extends JObject {
  private String msg;

  public String getMsg() {
    return msg;
  }

  public void setMsg(String msg) {
    this.msg = msg;
  }

  public JResult() {
    this.setSuccess(true);
  }

  public JResult(String msg) {
    this.msg = msg;
    this.setSuccess(true);
  }
}
