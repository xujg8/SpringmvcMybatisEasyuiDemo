package com.tcl.demo.common.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.tcl.demo.common.mapper.StudentMapper;
import com.tcl.demo.common.model.Student;

/**
 * @author chufu.li
 * @since 2015-01-22
 */
@Repository
public class StudentDao {
  @Autowired
  private StudentMapper studentMapper;

  public int getCountByStudentID(String studentID) {
    return studentMapper.getCountByStudentID(studentID);
  }

  public int addStudent(Student student) {
    return studentMapper.addStudent(student);
  }

  public int updateStudentBySutdentID(Student student) {
    return studentMapper.updateStudentBySutdentID(student);
  }

  public int delStudentBySutdentID(String studentID) {
    return studentMapper.delStudentBySutdentID(studentID);
  }

  public int getStudentsCount(Student student) {
    return studentMapper.getStudentsCount(student);
  }

  public List<Student> getStudentsByPageAndWords(Student student) {
    return studentMapper.getStudentsByPageAndWords(student);
  }
}
