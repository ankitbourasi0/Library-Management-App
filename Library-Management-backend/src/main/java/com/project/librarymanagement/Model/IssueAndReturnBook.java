package com.project.librarymanagement.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class IssueAndReturnBook {

    private Long id;
    private String Studentname;
    private String bookName;
    private String issueDate;
    private boolean bookReturned;
}
