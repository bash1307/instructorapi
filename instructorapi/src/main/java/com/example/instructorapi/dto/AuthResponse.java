package com.example.instructorapi.dto;

import com.example.instructorapi.model.Role;

public class AuthResponse {

    private String token;
    private String tokenType;
    private String email;
    private Role role;

    public AuthResponse() {
    }

    public AuthResponse(String token, String tokenType, String email, Role role) {
        this.token = token;
        this.tokenType = tokenType;
        this.email = email;
        this.role = role;
    }

    // GETTERS & SETTERS

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getTokenType() {
        return tokenType;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}