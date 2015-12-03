package com.tcl.demo.common.model;


public class Student {
  private String studentID;// 学号
  private String name;
  private String className;
  private int sex; // 0：男，1：女
  private String identityNum;// 身份证号码
  private String birthday;
  private String phone;

  private int limit;
  private int offset;

  public String getStudentID() {
    return studentID;
  }

  public void setStudentID(String studentID) {
    this.studentID = studentID;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getClassName() {
    return className;
  }

  public void setClassName(String className) {
    this.className = className;
  }

  public int getSex() {
    return sex;
  }

  public void setSex(int sex) {
    this.sex = sex;
  }

  public String getIdentityNum() {
    return identityNum;
  }

  public void setIdentityNum(String identityNum) {
    this.identityNum = identityNum;
  }

  public String getBirthday() {
    return birthday;
  }

  public void setBirthday(String birthday) {
    this.birthday = birthday;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public int getLimit() {
    return limit;
  }

  public void setLimit(int limit) {
    this.limit = limit;
  }

  public int getOffset() {
    return offset;
  }

  public void setOffset(int offset) {
    this.offset = offset;
  }

  @Override
  public String toString() {
    return "Student [studentID=" + studentID + ", name=" + name + ", className=" + className
        + ", sex=" + sex + ", identityNum=" + identityNum + ", birthday=" + birthday + ", phone="
        + phone + ", limit=" + limit + ", offset=" + offset + "]";
  }

}
