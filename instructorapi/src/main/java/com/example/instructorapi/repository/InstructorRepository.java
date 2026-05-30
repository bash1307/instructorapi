package com.example.instructorapi.repository;

import com.example.instructorapi.model.Instructor;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface InstructorRepository extends MongoRepository<Instructor, String> {

    List<Instructor> findByNameContaining(String name);

    Page<Instructor> findBySpecializationContainingIgnoreCase(String specialization, Pageable pageable);
}