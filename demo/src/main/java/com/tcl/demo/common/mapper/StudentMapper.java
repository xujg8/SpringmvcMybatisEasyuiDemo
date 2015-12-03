package com.tcl.demo.common.mapper;

import java.util.List;

import com.tcl.demo.common.model.Student;

/**
 * @author chufu.li
 * @since 2015-01-22
 */
public interface StudentMapper {

  int getCountByStudentID(String studentID);

  int addStudent(Student student);

  int updateStudentBySutdentID(Student student);

  int delStudentBySutdentID(String studentID);

  int getStudentsCount(Student student);

  List<Student> getStudentsByPageAndWords(Student student);
}
