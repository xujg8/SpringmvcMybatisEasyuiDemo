package com.tcl.demo.management.controller;

public class Script {

  public static void main(String[] args) {
    String sql;
    for (int i = 10; i < 100; i++) {
      sql =
          String.format("INSERT INTO `demo_student` VALUES ('2015116213%d', "
              + "'Seven%d', '计科11%d', 1, '4452811992072868%d', '1997-07-07'," + " '137630419%d');",
              i, i, i, i, i);
      System.out.println(sql);
    }
  }

}
