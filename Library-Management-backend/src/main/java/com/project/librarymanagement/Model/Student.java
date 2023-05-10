package com.project.librarymanagement.Model;

import com.project.librarymanagement.Entity.BookEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student {
    private long studentId;
    private String studentName;
    private String studentMail;
    private String CourseName;

    private Set<BookEntity> bookEntityList;
}
