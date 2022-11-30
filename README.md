# API Spec

## link API : https://greenpeace-backend-dev-production.up.railway.app/

<br>untuk admin kita menyediakan akun admin untuk akses membuat, mengedit, menghapus user dan artikel diharapkan login sebagai admin terlebih dahulu setelah memasukan kode tokennya berikut username dan password adminnya, setelah login masukan token authorization lalu pilih Bearer Token

```json
{
  "email": "admin@mail.com",
  "password": "admin"
}
```

## 1. Users dan Authorization

| Field Name    | Type     |
| ------------- | -------- |
| id            | ObjectId |
| name          | string   |
| email         | string   |
| password      | string   |
| refresh_token | string   |

### **a. User Login**

Request :

- Method : POST
- Endpoint : `API/login`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body :

```json
{
  "email": "contoh@mail.com",
  "password": "passwoRd123!@#"
}
```

Response :

```json
{
  "message": "Authentication successful!",
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNjY5ODMyMzAwLCJleHAiOjE2Njk4MzU5MDB9.Ggjrd0mbCBUnaJ6pi6_KU50uvkwvCZKJAcitc0IXbvA"
}
```

### **b. add User / Register**

Request :

- Method : POST
- Endpoint : `API/register`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body :

```json
{
  "name": "name",
  "email": "contohadmin@mail.com",
  "password": "passwoRd123!@#",
  "confPassword": "passwoRd123!@#"
}
```

Response :

```json
{
  "message": "User created successfully"
}
```

### **c. get All User**

Request :

- Method : GET
- Endpoint : `API/users`
- Header :
  - Accept: application/json

Response :

```json
{

    {
        "id": 1,
        "name": "contoh1",
        "email": "contoh1@gmail.com",
        "password": "password1",
        "refresh_token": "token1"
    },
    {
       "id": 2,
        "name": "contoh2",
        "email": "contoh2@gmail.com",
        "password": "password2",
        "refresh_token": "token2"
    }
}
```

### **d. get User by id**

Request :

- Method : GET
- Endpoint : `API/users/:id`
- Header :
  - Accept: application/json

Response :

```json
{
  "id": 1,
  "name": "contoh1",
  "email": "contoh1@gmail.com",
  "password": "password1",
  "refresh_token": "token1"
}
```

### **e. edit dan update User**

Request :

- Method : PATCH
- Endpoint : `API/users/:id`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body :

```json
{
  "name": "contoh2",
  "email": "contoh2@mail.com"
}
```

Response :

```json
{
  "message": "User updated"
}
```

### **f. get Token Refresh**

Request :

- Method : GET
- Endpoint : `API/token`
- Header :
  - Accept: application/json

Response :

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNjY5ODMyMzAwLCJleHAiOjE2Njk4MzU5MDB9.Ggjrd0mbCBUnaJ6pi6_KU50uvkwvCZKJAcitc0IXbvA"
}
```

### **g. delete User**

Request :

- Method : DELETE
- Endpoint : `API/users/:id`
- Header :
  - Accept: application/json

Response :

```json
{
  "message": "User Deleted"
}
```

### **h. User Logout**

Request :

- Method : DELETE
- Endpoint : `API/logout`
- Header :
  - Accept: application/json

Response :

```json
{
  "message": "Logout Successful!"
}
```

## 2. Artikels

| Field Name      | Type     |
| --------------- | -------- |
| id              | ObjectId |
| title           | string   |
| authorName      | string   |
| postDescription | text     |
| postContent     | text     |
| tags_1          | string   |
| tags_1          | string   |
| tags_1          | string   |
| imageUrl        | string   |

### **a. add Artikel**

Request :

- Method : POST
- Endpoint : `/articles`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body :

```json
{
  "id": 1,
  "title": "tittle",
  "authorName": "author",
  "postDescription": "description",
  "postContent": "content",
  "tags_1": "tag1",
  "tags_2": "tag2",
  "tags_3": "tag3",
  "imageUrl": "url"
}
```

Response :

```json
{
  "message": "Artikel Created"
}
```

### **b. add Point to Participant**

Request :

- Method : POST
- Endpoint : `/participants/:participantId/point`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body :

```json
{
  "eventId": 12,
  "weight": 50
}
```

Response :

```json
{
  "message": "success addPoint participant",
  "result": {
    "participant": {
      "id": 10,
      "email": "sayapeserta@mail.com"
    },
    "event": {
      "id": 12,
      "name": "Event Valentine"
    },
    "point": 25
  }
}
```

### **c. get All User/Admin**

Request :

- Method : GET
- Endpoint : `/participants/:participantId/point`
- Header :
  - Accept: application/json

Response :

```json
{
  "message": "success getAllPoint participant",
  "result": {
    "participant": {
      "id": 10,
      "email": "sayapeserta@mail.com"
    },
    "point": 123
  }
}
```

### **d. get Point from Participant ID in 1 Event**

Request :

- Method : GET
- Endpoint : `/participants/:participantId/point/event/:eventId`
- Header :
  - Accept: application/json

Response :

```json
{
  "message": "success getEventPoint participant",
  "result": {
    "participant": {
      "id": 10,
      "email": "sayapeserta@mail.com"
    },
    "event": {
      "id": 12,
      "name": "Event Valentine"
    },
    "point": 25
  }
}
```

## 3. Roles

| Field Name | Type     | Description     |
| ---------- | -------- | --------------- |
| id         | ObjectId | Users ID        |
| name       | string   | Users Role Name |

### **a. create Roles**

Request :

- Method : POST
- Endpoint : `/roles`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body :

```json
{
  "name": "superAdmin"
}
```

Response :

```json
{
  "message": "success create role",
  "result": {
    "id": 1,
    "name": "superAdmin"
  }
}
```

## 4. Events

| Field Name | Type     | Description     |
| ---------- | -------- | --------------- |
| id         | ObjectId | Users ID        |
| name       | string   | Users Role Name |

### **a. create Events**

Request :

- Method : POST
- Endpoint : `/events`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body :

```json
{
  "name": "Event Valentine",
  "date": "14-02-2022"
}
```

Response :

```json
{
  "message": "success create event",
  "result": {
    "id": 1,
    "name": "Event Valentine",
    "date": "14-02-2022",
    "createdBy": {
      "id": 1,
      "email": "contohadmin@mail.com"
    }
  }
}
```

### **d. get Event By ID (also include points)**

Request :

- Method : GET
- Endpoint : `/events/:eventId`
- Header :
  - Accept: application/json

Response :

```json
{
  "message": "success get event by id",
  "result": {
    "id": 12,
    "name": "Event Valentine",
    "date": "14-02-2022",
    "createdBy": {
      "id": 1,
      "email": "contohadmin@mail.com"
    },
    "leaderBoard": [
      {
        "id": 1,
        "email": "participant1@gmail.com",
        "point": 99
      },
      {
        "id": 4,
        "email": "participant4@gmail.com",
        "point": 90
      },
      {
        "id": 10,
        "email": "participant10@gmail.com",
        "point": 80
      }
    ]
  }
}
```

## 5. Blog

| Field Name  | Type     | Description      |
| ----------- | -------- | ---------------- |
| id          | ObjectId | Users ID         |
| thumbnail   | string   | Blog thumbnail   |
| title       | string   | Blog title       |
| description | string   | Blog description |
| content     | string   | Blog Roles       |

### **a. User Login**

Request :

- Method : POST
- Endpoint : `/users/login`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body :

```json
{
  "email": "contoh@mail.com",
  "password": "passwoRd123!@#"
}
```

Response :

```json
{
  "message": "success users login",
  "result": {
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJOYXdhc3RlIiwiaXNzIjoiMTAiLCJleHAiOjE2NDAwODEwNjYsImlhdCI6MTY0MDA4MTA2Nn0.yt6OtuvtPIeUncCeyCyMvLrT7dUwpo-7BLhSnkC_dzk"
  }
}
```

### **b. add blogs/**

Request :

- Method : POST
- Endpoint : `/`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body :

```json
{
    {
    "thumbnail": "gamabr2.jpg",
    "title":"berita4",
    "description":"ini berita",
    "content":"content1"
}
}
```

Response :

```json
{
  "message": "success create blog",
  "result": {
    "id": 7,
    "thumbnail": "gamabr2.jpg",
    "title": "berita4",
    "description": "ini berita",
    "content": "content1",
    "date": "2021-12-24T10:44:00.033Z",
    "userId": 4,
    "updatedAt": "2021-12-24T10:44:00.034Z",
    "createdAt": "2021-12-24T10:44:00.034Z"
  }
}
```

### **c. get All Blog**

Request :

- Method : GET
- Endpoint : `/`
- Header :
  - Accept: application/json

Response :

```json
{
  "result": [
    {
      "id": 3,
      "thumbnail": "gamabr2.jpg",
      "title": "berita3",
      "description": "ini berita",
      "content": "",
      "date": "2021-12-23T14:11:45.000Z",
      "userId": 4,
      "createdAt": "2021-12-23T14:11:45.000Z",
      "updatedAt": "2021-12-23T14:11:45.000Z"
    },
    {
      "id": 4,
      "thumbnail": "gamabr2.jpg",
      "title": "berita3",
      "description": "ini berita",
      "content": "",
      "date": "2021-12-23T14:11:48.000Z",
      "userId": 4,
      "createdAt": "2021-12-23T14:11:48.000Z",
      "updatedAt": "2021-12-23T14:11:48.000Z"
    },
    {
      "id": 5,
      "thumbnail": "gamabr2.jpg",
      "title": "berita3",
      "description": "ini berita",
      "content": "",
      "date": "2021-12-23T14:11:50.000Z",
      "userId": 4,
      "createdAt": "2021-12-23T14:11:50.000Z",
      "updatedAt": "2021-12-23T14:11:50.000Z"
    },
    {
      "id": 6,
      "thumbnail": "gamabr2.jpg",
      "title": "berita3",
      "description": "ini berita",
      "content": "",
      "date": "2021-12-23T14:11:51.000Z",
      "userId": 4,
      "createdAt": "2021-12-23T14:11:51.000Z",
      "updatedAt": "2021-12-23T14:11:51.000Z"
    },
    {
      "id": 7,
      "thumbnail": "gamabr2.jpg",
      "title": "berita4",
      "description": "ini berita",
      "content": "",
      "date": "2021-12-24T10:44:00.000Z",
      "userId": 4,
      "createdAt": "2021-12-24T10:44:00.000Z",
      "updatedAt": "2021-12-24T10:44:00.000Z"
    }
  ]
}
```

### **d. Get Blog Id**

Request :

- Method : GET
- Endpoint : `/blogs/:id`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body :

```json
{
  "message": "success get data Blogs",
  "result": {
    "id": 3,
    "thumbnail": "gamabr2.jpg",
    "title": "berita3",
    "description": "ini berita",
    "content": "",
    "date": "2021-12-23T14:11:45.000Z",
    "userId": 4,
    "createdAt": "2021-12-23T14:11:45.000Z",
    "updatedAt": "2021-12-23T14:11:45.000Z"
  }
}
```

### \*_e. update Blog blogs/id_

Request :

- Method : Put
- Endpoint : `/blogs/:id/`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body :

```json
{
  "thumbnail": "gamabr2.jpg",
  "title": "Skilvul"
}
```

Response :

```json
{
  "message": "update success data Blogs",
  "result": {
    "id": 3,
    "thumbnail": "gamabr2.jpg",
    "title": "Skilvul",
    "description": "ini berita",
    "content": "",
    "date": "2021-12-24T10:49:45.000Z",
    "userId": 4,
    "createdAt": "2021-12-23T14:11:45.000Z",
    "updatedAt": "2021-12-24T10:49:45.000Z"
  }
}
```

### **e. delete Blog from Blog/id**

Request :

- Method : DEL
- Endpoint : `/blog/id`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body :

```json
{
  "message": "delete success data Blogs",
  "result": {
    "message": "Blog with id 3 was deleted successfully"
  }
}
```
