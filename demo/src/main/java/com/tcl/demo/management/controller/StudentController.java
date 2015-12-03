package com.tcl.demo.management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tcl.demo.common.model.Student;
import com.tcl.demo.management.dto.basic.JObject;
import com.tcl.demo.management.dto.basic.JResult;
import com.tcl.demo.management.dto.basic.QueryParams;
import com.tcl.demo.management.dto.basic.QueryResult;
import com.tcl.demo.management.service.StudentService;

/**
 * @author chufu.li
 * @since 2015-01-22
 */
@Controller
@RequestMapping("/student")
public class StudentController {
  @Autowired
  private StudentService studentService;

  @RequestMapping("/addStudent")
  @ResponseBody
  public JObject addStudent(Student student) {
    JResult result = new JResult();
    try {
      int affectCount = studentService.addStudent(student);
      if (affectCount == 1)
        result.setMsg("添加学生成功！");
      else if (affectCount == -1) {
        result.setMsg("该学号已存在！");
        result.setSuccess(false);
      } else {
        throw new RuntimeException("addStudent error");
      }
    } catch (Exception e) {
      result.setMsg("添加学生失败！");
      result.setSuccess(false);
      e.printStackTrace();
    }
    return result;
  }

  @RequestMapping("/updateStudent")
  @ResponseBody
  public JObject updateStudent(Student student) {
    JResult result = new JResult();
    try {
      int affectCount = studentService.updateStudentBySutdentID(student);
      if (affectCount == 1)
        result.setMsg("修改学生成功！");
      else
        throw new RuntimeException("updateStudent error");
    } catch (Exception e) {
      result.setMsg("修改学生失败！");
      result.setSuccess(false);
    }
    return result;
  }


  @RequestMapping("/getStudentsByPageAndWords")
  @ResponseBody
  public QueryResult<?> getStudentsByPageAndWords(QueryParams queryParams) {
    return studentService.getStudentsByPageAndWords(queryParams);
  }

  @RequestMapping("/delStudentByIds")
  @ResponseBody
  public JResult delStudentByIds(String[] ids) {
    JResult result = new JResult();
    try {
      int sum = studentService.delStudentBySutdentID(ids);
      result.setMsg("删除成功! 共删除 " + sum + " 条记录。");
    } catch (Exception e) {
      result.setMsg("删除失败！");
      result.setSuccess(false);
    }
    return result;
  }

}
