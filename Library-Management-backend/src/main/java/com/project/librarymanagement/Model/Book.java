package com.project.librarymanagement.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Book {
    private long bookId;

    private String isbn;
    private String bookName;
    private String Author;
    private String PublishedYear;

}
