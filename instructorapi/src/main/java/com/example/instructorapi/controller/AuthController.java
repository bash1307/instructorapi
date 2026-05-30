package com.example.instructorapi.controller;

import com.example.instructorapi.dto.AuthResponse;
import com.example.instructorapi.dto.LoginRequest;
import com.example.instructorapi.dto.RegisterRequest;
import com.example.instructorapi.model.User;
import com.example.instructorapi.repository.UserRepository;
import com.example.instructorapi.service.AuthService;
import com.example.instructorapi.service.JwtService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;
    private final JwtService jwtService;
    private final UserRepository userRepository;

    public AuthController(
            AuthService authService,
            JwtService jwtService,
            UserRepository userRepository
    ) {
        this.authService = authService;
        this.jwtService = jwtService;
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public User register(@Valid @RequestBody RegisterRequest request) {
        return authService.register(request);
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }

    @GetMapping("/extract-email")
    public String extractEmail(@RequestParam String token) {
        return jwtService.extractEmail(token);
    }

    @GetMapping("/check-expired")
    public boolean checkExpired(@RequestParam String token) {
        return jwtService.isTokenExpired(token);
    }

    @GetMapping("/validate")
    public boolean validateToken(@RequestParam String token) {

        String email = jwtService.extractEmail(token);

        User user = userRepository.findByEmail(email)
                .orElseThrow();

        return jwtService.isTokenValid(token, user);
    }
}