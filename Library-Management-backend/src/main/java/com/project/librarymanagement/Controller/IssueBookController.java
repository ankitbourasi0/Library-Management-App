package com.project.librarymanagement.Controller;


import com.project.librarymanagement.Entity.IssueAndReturnBookEntity;
import com.project.librarymanagement.Entity.ReturnedBookEntity;
import com.project.librarymanagement.Model.IssueAndReturnBook;
import com.project.librarymanagement.Model.ReturnedBook;
import com.project.librarymanagement.Repository.BookRepository;
import com.project.librarymanagement.Repository.IssuedBookRepository;
import com.project.librarymanagement.Repository.ReturnedRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@RestController
public class IssueBookController {
    @Autowired
    private IssuedBookRepository issuedBookRepository;
    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private ReturnedRepository repository;


    boolean bookReturned;
    @GetMapping("/getaAllIssued")
    public List<IssueAndReturnBook> getAllIssuedBook(){
        var issued = issuedBookRepository.findAll();
       var bOOKS =  issued.stream().map(e ->
           new IssueAndReturnBook(e.getId(), e.getStudentname(),e.getBookName(),e.getIssueDate(),bookReturned = e.isBookReturned())
        ).collect(Collectors.toList());
    return bOOKS;
    }

    @GetMapping("/getReturnedBook")
    public List<ReturnedBookEntity> getReturnedBook(){

        var books =  repository.findAll();
        return books;
    }

    @PostMapping("/{bookName}/issue/{issueDate}/{studentName}")
    public ResponseEntity<String> issueBook(@PathVariable String bookName,@PathVariable String studentName,
                                            @PathVariable String issueDate) {

        IssueAndReturnBookEntity issueAndReturnBook = new IssueAndReturnBookEntity();
        issueAndReturnBook.setBookReturned(false);
        issueAndReturnBook.setBookName(bookName);
        issueAndReturnBook.setStudentname(studentName);
        issueAndReturnBook.setIssueDate(issueDate);
        issuedBookRepository.save(issueAndReturnBook);


        // Return a success response
        return ResponseEntity.ok("Book issued successfully");
    }

    // Endpoint for returning a book
    @DeleteMapping("/return/{returnId}")
    public ResponseEntity<String> returnBook(@PathVariable Long returnId) {
           var issued =  issuedBookRepository.findById(returnId).get();
        ReturnedBookEntity returnedBook = new ReturnedBookEntity();
        BeanUtils.copyProperties(issued,returnedBook);
           repository.save(returnedBook);
          issuedBookRepository.deleteById(returnId);
        // Return a success response
        return ResponseEntity.ok("Book returned successfully");
    }

}
