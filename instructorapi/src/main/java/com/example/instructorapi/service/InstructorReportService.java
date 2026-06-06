package com.example.instructorapi.service;

import com.example.instructorapi.dto.InstructorStatusSummary;
import com.example.instructorapi.model.Instructor;

import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.stereotype.Service;

import java.util.List;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.*;
import com.example.instructorapi.dto.InstructorSpecializationSummary;

@Service
public class InstructorReportService {

    private final MongoTemplate mongoTemplate;

    public InstructorReportService(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    public List<InstructorStatusSummary> getInstructorCountByStatus() {

        Aggregation aggregation = newAggregation(
                group("status").count().as("totalInstructors"),
                project("totalInstructors")
                        .and("_id").as("status")
                        .andExclude("_id"),
                sort(Sort.Direction.ASC, "status")
        );

        return mongoTemplate
                .aggregate(
                        aggregation,
                        Instructor.class,
                        InstructorStatusSummary.class
                )
                .getMappedResults();
    }

    public List<InstructorSpecializationSummary> getInstructorCountBySpecialization() {

        Aggregation aggregation = newAggregation(
                group("specialization").count().as("totalInstructors"),
                project("totalInstructors")
                        .and("_id").as("specialization")
                        .andExclude("_id"),
                sort(Sort.Direction.ASC, "specialization")
        );

        return mongoTemplate
                .aggregate(
                        aggregation,
                        Instructor.class,
                        InstructorSpecializationSummary.class
                )
                .getMappedResults();
    }
}