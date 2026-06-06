# Instructor API Documentation

## Project Name

Instructor API

## Base URL

http://localhost:8080/api/v1

---

## Authentication

### Register

POST /api/auth/register

Security: Public

Request Body:

```json
{
  "name": "Ali",
  "email": "ali@gmail.com",
  "password": "123456"
}
```

Response Body:

```json
{
  "id": "user-id",
  "name": "Ali",
  "email": "ali@gmail.com",
  "password": "encoded-password",
  "role": "USER"
}
```

---

### Login

POST /api/auth/login

Security: Public

Request Body:

```json
{
  "email": "ali@gmail.com",
  "password": "123456"
}
```

Response Body:

```json
{
  "token": "jwt-token-here",
  "tokenType": "Bearer",
  "email": "ali@gmail.com",
  "role": "USER"
}
```

---

## Instructor CRUD Endpoints

### Get All Instructors

GET /instructors

Security: Public

Example Response:

```json
{
  "content": [
    {
      "id": "instructor-id",
      "name": "Alice Tan",
      "email": "alice@gmail.com",
      "specialization": "Java",
      "yearsExperience": 5,
      "status": "ACTIVE"
    }
  ],
  "totalElements": 1,
  "totalPages": 1,
  "size": 20,
  "number": 0
}
```

---

### Get Instructor By ID

GET /instructors/{id}

Security: Public

Example Response:

```json
{
  "id": "instructor-id",
  "name": "Alice Tan",
  "email": "alice@gmail.com",
  "specialization": "Java",
  "yearsExperience": 5,
  "status": "ACTIVE"
}
```

---

### Create Instructor

POST /instructors

Security: Requires authentication

Request Body:

```json
{
  "name": "Alice Tan",
  "email": "alice@gmail.com",
  "specialization": "Java",
  "yearsExperience": 5,
  "status": "ACTIVE"
}
```

Response Body:

```json
{
  "id": "instructor-id",
  "name": "Alice Tan",
  "email": "alice@gmail.com",
  "specialization": "Java",
  "yearsExperience": 5,
  "status": "ACTIVE"
}
```

---

### Update Instructor

PUT /instructors/{id}

Security: Requires authentication

Request Body:

```json
{
  "name": "Alice Tan",
  "email": "alice@gmail.com",
  "specialization": "Spring Boot",
  "yearsExperience": 6,
  "status": "ACTIVE"
}
```

Response Body:

```json
{
  "id": "instructor-id",
  "name": "Alice Tan",
  "email": "alice@gmail.com",
  "specialization": "Spring Boot",
  "yearsExperience": 6,
  "status": "ACTIVE"
}
```

---

### Delete Instructor

DELETE /instructors/{id}

Security: Requires ADMIN role

Response Body:

```text
Instructor deleted successfully
```

---

## Search Endpoint

### Search Instructor By Name

GET /instructors/search/name?keyword=ali

Security: Public

Example Response:

```json
[
  {
    "id": "instructor-id",
    "name": "Ali",
    "email": "ali@gmail.com",
    "specialization": "Backend",
    "yearsExperience": 4,
    "status": "ACTIVE"
  }
]
```

---

## Pagination and Sorting Endpoint

### Get Instructors With Pagination and Sorting

GET /instructors?page=0&size=5&sort=name,asc

Security: Public

Example Response:

```json
{
  "content": [
    {
      "id": "instructor-id",
      "name": "Alice Tan",
      "email": "alice@gmail.com",
      "specialization": "Java",
      "yearsExperience": 5,
      "status": "ACTIVE"
    }
  ],
  "totalElements": 1,
  "totalPages": 1,
  "size": 5,
  "number": 0
}
```

---

## Filter Endpoint

### Filter Instructors By Specialization

GET /instructors?specialization=Backend&page=0&size=5&sort=name,asc

Security: Public

Example Response:

```json
{
  "content": [
    {
      "id": "instructor-id",
      "name": "Ali",
      "email": "ali@gmail.com",
      "specialization": "Backend",
      "yearsExperience": 4,
      "status": "ACTIVE"
    }
  ],
  "totalElements": 1,
  "totalPages": 1,
  "size": 5,
  "number": 0
}
```

---

## Reporting Endpoints

### Instructor Report By Status

GET /reports/instructors/by-status

Security: Public

Example Response:

```json
[
  {
    "status": "ACTIVE",
    "totalInstructors": 5
  },
  {
    "status": "INACTIVE",
    "totalInstructors": 2
  }
]
```

---

### Instructor Report By Specialization

GET /reports/instructors/by-specialization

Security: Public

Example Response:

```json
[
  {
    "specialization": "Java",
    "totalInstructors": 3
  },
  {
    "specialization": "React",
    "totalInstructors": 2
  },
  {
    "specialization": "MongoDB",
    "totalInstructors": 1
  }
]
```