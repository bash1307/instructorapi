package com.example.instructorapi.service;

import com.example.instructorapi.model.Instructor;
import com.example.instructorapi.repository.InstructorRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InstructorService {

    private static final Logger logger = LoggerFactory.getLogger(InstructorService.class);

    private final InstructorRepository instructorRepository;

    public InstructorService(InstructorRepository instructorRepository) {
        this.instructorRepository = instructorRepository;
    }

    // GET ALL + FILTER + PAGINATION + SORTING
    public Page<Instructor> getInstructors(String specialization, Pageable pageable) {

        logger.info("Instructor query called");
        logger.info("Specialization filter: {}", specialization);
        logger.info("Page number: {}", pageable.getPageNumber());
        logger.info("Page size: {}", pageable.getPageSize());
        logger.info("Sort value: {}", pageable.getSort());

        if (specialization != null && !specialization.isEmpty()) {
            return instructorRepository
                    .findBySpecializationContainingIgnoreCase(specialization, pageable);
        }

        return instructorRepository.findAll(pageable);
    }

    // GET BY ID
    public Optional<Instructor> getInstructorById(String id) {
        return instructorRepository.findById(id);
    }

    // CREATE
    public Instructor addInstructor(Instructor instructor) {
        return instructorRepository.save(instructor);
    }

    // UPDATE
    public Instructor updateInstructor(String id, Instructor updatedInstructor) {
        updatedInstructor.setId(id);
        return instructorRepository.save(updatedInstructor);
    }

    // DELETE
    public void deleteInstructor(String id) {
        instructorRepository.deleteById(id);
    }

    // SEARCH BY NAME
    public List<Instructor> searchInstructorsByName(String keyword) {

        logger.info("Instructor search called");
        logger.info("Search keyword: {}", keyword);

        return instructorRepository.findByNameContaining(keyword);
    }
}