package com.project.librarymanagement.Controller;

import com.project.librarymanagement.Entity.StudentEntity;
import com.project.librarymanagement.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*" )
@RestController
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("/student")
    public List<StudentEntity> getAllStudent(){
        return studentRepository.findAll();
    }

    @GetMapping("/student/{id}")
    public ResponseEntity<StudentEntity> getStudentById(@PathVariable("id") Long id){
        var  student = studentRepository.findById(id);
    return student.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/student")
    public ResponseEntity<StudentEntity> createStudent (@RequestBody StudentEntity studentEntity){
        StudentEntity createStudentEntity = studentRepository.save(studentEntity);
        return ResponseEntity.status(HttpStatus.CREATED).body(createStudentEntity);
    }

    @PostMapping("/student/update/{id}")
    public ResponseEntity<StudentEntity> editStudent(@PathVariable("id") Long id, @RequestBody StudentEntity updatedStudentEntity){
       var student = studentRepository.findById(id);
       if (student.isPresent()){
           updatedStudentEntity.setStudentId(id);
           StudentEntity editedStudentEntity = studentRepository.save(updatedStudentEntity);
            return ResponseEntity.ok(editedStudentEntity);
       }
       else{
           return ResponseEntity.notFound().build();
       }
    }

    @DeleteMapping("/student/delete/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable("id") Long id ){
       var student = studentRepository.findById(id);
        if (student.isPresent()){
             studentRepository.delete(student.get());
            return  ResponseEntity.noContent().build();


        }else {
            return  ResponseEntity.notFound().build();
        }

    }


}

