package com.project.librarymanagement.Model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReturnedBook {

    private Long id;
    private String Studentname;
    private String bookName;
    private String issueDate;
    private boolean bookReturned;
}
