package com.example.instructorapi.controller;

import com.example.instructorapi.dto.CreateInstructorRequest;
import com.example.instructorapi.model.Instructor;
import com.example.instructorapi.service.InstructorService;

import jakarta.validation.Valid;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class InstructorController {

    private final InstructorService instructorService;

    public InstructorController(InstructorService instructorService) {
        this.instructorService = instructorService;
    }

    @GetMapping("/instructors")
    public Page<Instructor> getInstructors(
            @RequestParam(required = false) String specialization,
            Pageable pageable
    ) {
        return instructorService.getInstructors(specialization, pageable);
    }

    @GetMapping("/instructors/{id}")
    public Optional<Instructor> getInstructorById(@PathVariable String id) {
        return instructorService.getInstructorById(id);
    }

    @PostMapping("/instructors")
    public Instructor createInstructor(@Valid @RequestBody CreateInstructorRequest request) {

     Instructor newInstructor = new Instructor(
        request.getName(),
        request.getEmail(),
        request.getSpecialization(),
        request.getYearsExperience(),
        request.getStatus()
    );

        return instructorService.addInstructor(newInstructor);
    }

    @PutMapping("/instructors/{id}")
    public Instructor updateInstructor(
            @PathVariable String id,
            @RequestBody Instructor instructor
    ) {
        return instructorService.updateInstructor(id, instructor);
    }

    @DeleteMapping("/instructors/{id}")
    public String deleteInstructor(@PathVariable String id) {
        instructorService.deleteInstructor(id);
        return "Instructor deleted successfully";
    }

    @GetMapping("/instructors/search/name")
    public List<Instructor> searchInstructors(@RequestParam String keyword) {
        return instructorService.searchInstructorsByName(keyword);
    }
}