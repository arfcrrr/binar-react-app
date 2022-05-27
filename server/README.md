# Binar Car Management API

This document provides guidelines and examples for Binar Rental Car Management System Web Application APIs, encouraging consistency and best practices accross applications. Binar Car APIs' main goal is to practice using a good RESTful API. 


## Database Overview

`database_binar_car_management` contains 1 main table `Cars` which has 7 attributes:
- id: integer, PRIMARY KEY
- name: varchar
- rent_per_day: integer
- size: varchar
- image: text
- created_at: timestamp
- updated_at: timestamp


## Run the App

    nodemon bin/www


## Endpoint Overview

| Method | Route                     | Description                              |
| ------ | ----------------          | ---------------------------------------  |
| POST   | /api/v1/register          | Add new user to database                 |
| POST   | /api/v1/login             | Login user to database                   |
| GET    | /api/v1/whoami            | Shows current logged in user             |
| POST   | /api/v1/add-admin/:id     | Add admin role based on user's ID        |
| GET    | /api/v1/dashboard-car     | Shows list of available cars in database |
| GET    | /api/v1/dashboard-car/:id | Shows car's data based on ID             |
| POST   | /api/v1/create-car        | Add new car's data to database           |
| POST   | /api/v1/update-car/:id    | Update car's data based on data input    |
| GET    | /api/v1/delete-car/:id    | Delete car's data based on ID            |


## Route List

`POST /api/v1/register`

    http://localhost:8000/api/v1/register

`POST /api/v1/login`

    http://localhost:8000/api/v1/login

`GET /api/v1/whoami`

    http://localhost:8000/api/v1/whoami

`POST /api/v1/addAdmin/:id`

    http://localhost:8000/api/v1/addAdmin/:id

`GET /api/v1/dashboard-car`

    http://localhost:8000/api/v1/dashboard-car

`GET /api/v1/dashboard-car/:id`

    http://localhost:8000/api/v1/dashboard-car/:id

`POST /api/v1/create-car`

    http://localhost:8000/api/v1/create-car

`POST /api/v1/update-car/:id`

    http://localhost:8000/api/v1/update-car/:id

`GET /api/v1/delete-car/:id`

    http://localhost:8000/api/v1/delete-car/:id