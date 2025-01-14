# Uber Clone App Server

## API Endpoints

### POST /users/register

#### Description
This endpoint is used to register a new user.

#### Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing the user's first name and last name.
  - `firstname`: A string representing the user's first name. It must be at least 3 characters long.
  - `lastname`: A string representing the user's last name. It must be at least 3 characters long.
- `email`: A string representing the user's email. It must be a valid email format.
- `password`: A string representing the user's password. It must be at least 6 characters long.

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses

- `201 Created`: The user was successfully registered.
  - Response Body:
    ```json
    {
      "token": "jwt_token",
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```
- `400 Bad Request`: The request body is invalid or missing required fields.
  - Response Body:
    ```json
    {
      "error": [
        {
          "msg": "Error message",
          "param": "field_name",
          "location": "body"
        }
      ]
    }
    ```

#### Example Request
```bash
curl -X POST http://localhost:3000/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

### POST /users/login

#### Description
This endpoint is used to log in an existing user.

#### Request Body
The request body should be a JSON object containing the following fields:
- `email`: A string representing the user's email. It must be a valid email format.
- `password`: A string representing the user's password. It must be at least 6 characters long.

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses

- `200 OK`: The user was successfully logged in.
  - Response Body:
    ```json
    {
      "token": "jwt_token",
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```
- `400 Bad Request`: The request body is invalid or missing required fields.
  - Response Body:
    ```json
    {
      "error": [
        {
          "msg": "Error message",
          "param": "field_name",
          "location": "body"
        }
      ]
    }
    ```
- `401 Unauthorized`: The email or password is incorrect.
  - Response Body:
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

#### Example Request
```bash
curl -X POST http://localhost:3000/users/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

### GET /users/profile

#### Description
This endpoint is used to get the profile of the authenticated user.

#### Headers
- `Authorization`: Bearer token for the authenticated user.

#### Responses

- `200 OK`: The user's profile was successfully retrieved.
  - Response Body:
    ```json
    {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
    ```
- `401 Unauthorized`: The user is not authenticated.
  - Response Body:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

#### Example Request
```bash
curl -X GET http://localhost:3000/users/profile \
-H "Authorization: Bearer jwt_token"
```

### GET /users/logout

#### Description
This endpoint is used to log out the authenticated user.

#### Headers
- `Authorization`: Bearer token for the authenticated user.

#### Responses

- `200 OK`: The user was successfully logged out.
  - Response Body:
    ```json
    {
      "message": "Logged out"
    }
    ```
- `401 Unauthorized`: The user is not authenticated.
  - Response Body:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

#### Example Request
```bash
curl -X GET http://localhost:3000/users/logout \
-H "Authorization: Bearer jwt_token"
```
