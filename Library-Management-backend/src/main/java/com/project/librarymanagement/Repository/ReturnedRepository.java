package com.project.librarymanagement.Repository;

import com.project.librarymanagement.Entity.ReturnedBookEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReturnedRepository extends JpaRepository<ReturnedBookEntity,Long> {
}
