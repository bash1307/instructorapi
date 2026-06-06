package com.example.instructorapi.controller;

import com.example.instructorapi.dto.InstructorStatusSummary;
import com.example.instructorapi.service.InstructorReportService;
import com.example.instructorapi.dto.InstructorSpecializationSummary;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/reports/instructors")
public class InstructorReportController {

    private final InstructorReportService instructorReportService;

    public InstructorReportController(InstructorReportService instructorReportService) {
        this.instructorReportService = instructorReportService;
    }

    @GetMapping("/by-status")
    public List<InstructorStatusSummary> getInstructorCountByStatus() {
        return instructorReportService.getInstructorCountByStatus();
    }

    @GetMapping("/by-specialization")
    public List<InstructorSpecializationSummary> getInstructorCountBySpecialization() {
        return instructorReportService.getInstructorCountBySpecialization();
    }
}