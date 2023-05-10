package com.project.librarymanagement.Controller;

import com.project.librarymanagement.Entity.BookEntity;
import com.project.librarymanagement.Model.Book;
import com.project.librarymanagement.Repository.BookRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.PathMatchConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;
import java.util.stream.Collectors;


@CrossOrigin(origins = "*" )
@RestController
public class BookController {
    @Autowired
    private BookRepository bookRepository;



    @GetMapping("/book")
    public List<Book> getAllBook(){

       var bookEntities =  bookRepository.findAll();
        var book = bookEntities.stream().map(e-> new Book(e.getBookId(),e.getIsbn(),e.getBookName(),e.getAuthor(),e.getPublishedYear())).collect(Collectors.toList());
        return book;
    }


    @GetMapping(value = "/book/{id}")
    public Book getBookById(@PathVariable("id") Long id){
        var bookEntity = bookRepository.findById(id).get();
        Book book = new Book();
//        return book.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
        BeanUtils.copyProperties(bookEntity,book);
        return book;

    }

    @PostMapping("/book")
    public Book createBook(@RequestBody Book book){
        BookEntity bookEntity = new BookEntity();
        BeanUtils.copyProperties(book,bookEntity);
                bookRepository.save(bookEntity);


    return  book;

    }

    @DeleteMapping(value = "/books/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Long id){
        var book  = bookRepository.findById(id);
        System.out.println(id);
        if (book.isPresent()){
            bookRepository.delete(book.get());
            return ResponseEntity.noContent().build();
        }else{
            return ResponseEntity.notFound().build();

        }

    }

    @PutMapping("/books/{id}")
    public Book updateBook(@PathVariable("id") Long id,Book book){

BookEntity bookEntity =bookRepository.findById(id).get();
    bookEntity.setBookName(book.getBookName());
    bookEntity.setAuthor(book.getAuthor());
    bookEntity.setIsbn(book.getIsbn());

    bookEntity.setPublishedYear(book.getPublishedYear());
    bookRepository.save(bookEntity);
    return book;
    }



    }

