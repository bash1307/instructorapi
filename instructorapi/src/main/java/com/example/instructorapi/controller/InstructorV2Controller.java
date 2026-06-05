package com.example.instructorapi.controller;

import com.example.instructorapi.dto.InstructorV2Response;
import com.example.instructorapi.model.Instructor;
import com.example.instructorapi.service.InstructorService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v2")
public class InstructorV2Controller {

    private final InstructorService instructorService;

    public InstructorV2Controller(InstructorService instructorService) {
        this.instructorService = instructorService;
    }

    @GetMapping("/instructors")
    public List<InstructorV2Response> getInstructorsV2() {

        return instructorService.getAllInstructors()
                .stream()
                .map(this::convertToV2Response)
                .toList();
    }

    private InstructorV2Response convertToV2Response(Instructor instructor) {

        String experienceLevel;

        if (instructor.getYearsExperience() <= 2) {
            experienceLevel = "Junior";
        } else if (instructor.getYearsExperience() <= 5) {
            experienceLevel = "Intermediate";
        } else {
            experienceLevel = "Senior";
        }

        return new InstructorV2Response(
                instructor.getId(),
                instructor.getName(),
                instructor.getSpecialization(),
                "Available for Teaching",
                experienceLevel,
                instructor.getName()
                        + " specializes in "
                        + instructor.getSpecialization()
                        + " and has "
                        + instructor.getYearsExperience()
                        + " years of teaching experience."
        );
    }
}