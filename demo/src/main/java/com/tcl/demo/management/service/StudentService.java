package com.tcl.demo.management.service;

import com.tcl.demo.common.model.Student;
import com.tcl.demo.management.dto.basic.QueryParams;
import com.tcl.demo.management.dto.basic.QueryResult;

/**
 * @author chufu.li
 * @since 2015-01-22
 */
public interface StudentService {

  int addStudent(Student student);

  int updateStudentBySutdentID(Student student);

  int delStudentBySutdentID(String[] ids);

  QueryResult<?> getStudentsByPageAndWords(QueryParams queryParams);
}
