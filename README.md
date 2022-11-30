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
- Endpoint : `API/articles`
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

### **b. get All artikel**

Request :

- Method : GET
- Endpoint : `API/articles`
- Header :
  - Accept: application/json

Response :

```json
{

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
    },
    {
      "id": 2,
      "title": "tittle2",
      "authorName": "author2",
      "postDescription": "description2",
      "postContent": "content2",
      "tags_1": "tag1_2",
      "tags_2": "tag2_2",
      "tags_3": "tag3_2",
      "imageUrl": "url2"
    }
}
```

### **d. get User by id**

Request :

- Method : GET
- Endpoint : `API/articles/:id`
- Header :
  - Accept: application/json

Response :

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

### **e. edit dan update User**

Request :

- Method : PATCH
- Endpoint : `API/articles/:id`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body :

```json
{
  "title": "tittle3",
  "authorName": "author3",
  "postDescription": "description3",
  "postContent": "content3"
}
```

Response :

```json
{
  "message": "Artikel updated"
}
```

### **g. delete Artikel**

Request :

- Method : DELETE
- Endpoint : `API/articles/:id`
- Header :
  - Accept: application/json

Response :

```json
{
  "message": "User Deleted"
}
```
