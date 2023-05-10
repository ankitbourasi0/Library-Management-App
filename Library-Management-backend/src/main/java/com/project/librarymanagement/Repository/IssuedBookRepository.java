package com.project.librarymanagement.Repository;

import com.project.librarymanagement.Entity.IssueAndReturnBookEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IssuedBookRepository extends JpaRepository<IssueAndReturnBookEntity,Long> {
}
