package com.tcl.demo.management.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tcl.demo.common.dao.StudentDao;
import com.tcl.demo.common.model.Student;
import com.tcl.demo.management.dto.basic.QueryParams;
import com.tcl.demo.management.dto.basic.QueryResult;
import com.tcl.demo.management.service.StudentService;

/**
 * @author chufu.li
 * @since 2015-01-22
 */
@Service
public class StudentServiceImpl implements StudentService {

  @Autowired
  private StudentDao studentDao;

  @Override
  public int addStudent(Student student) {
    // 先查询该学号是否存在
    int count = studentDao.getCountByStudentID(student.getStudentID());
    if (count != 0) return -1;

    return studentDao.addStudent(student);
  }

  @Override
  public int updateStudentBySutdentID(Student student) {
    return studentDao.updateStudentBySutdentID(student);
  }

  @Override
  public int delStudentBySutdentID(String[] ids) {
    int sum = 0;// 删除记录总数
    for (String id : ids) {
      sum += studentDao.delStudentBySutdentID(id);
    }
    return sum;
  }

  @Override
  public QueryResult<?> getStudentsByPageAndWords(QueryParams queryParams) {
    Student student = new Student();
    student.setOffset(queryParams.getOffset()); // 从哪一行开始
    student.setLimit(queryParams.getLimit()); // 每页显示行数
    student.setStudentID(queryParams.getString("studentID"));
    student.setName(queryParams.getString("name"));
    student.setClassName(queryParams.getString("className"));
    student.setIdentityNum(queryParams.getString("identityNum"));

    long count = studentDao.getStudentsCount(student);
    List<Student> students = studentDao.getStudentsByPageAndWords(student);
    return new QueryResult<Student>(count, students);
  }
}
