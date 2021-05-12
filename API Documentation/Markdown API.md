
# FlowersEverAfter

E-commerce floral shop API for orders, products, reviews and users endpoints.

## Indices

* [Orders](#orders)

  * [GET /api/orders/:id](#1-get-apiorders:id)
  * [GET /api/orders/myorders](#2-get-apiordersmyorders)

* [Products](#products)

  * [DELETE /api/products/:id](#1-delete-apiproducts:id)
  * [GET /api/products](#2-get-apiproducts)
  * [GET /api/products/:id](#3-get-apiproducts:id)
  * [POST /api/products](#4-post-apiproducts)
  * [PUT /api/products/:id](#5-put-apiproducts:id)

* [Reviews](#reviews)

  * [POST /api/products/:id/reviews](#1-post-apiproducts:idreviews)

* [Users & Auth](#users-&-auth)

  * [DELETE /api/users/:id](#1-delete-apiusers:id)
  * [GET /api/users](#2-get-apiusers)
  * [GET /api/users/:id](#3-get-apiusers:id)
  * [GET /api/users/profile](#4-get-apiusersprofile)
  * [POST /api/users](#5-post-apiusers)
  * [POST /api/users/login](#6-post-apiuserslogin)
  * [PUT /api/users/:id](#7-put-apiusers:id)
  * [PUT /api/users/profile](#8-put-apiusersprofile)


--------


## Orders
Routes that have to do with orders.



### 1. GET /api/orders/:id


Get an order by id


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/orders/6073fc221117b4586d4f8d33
```



### 2. GET /api/orders/myorders


Get logged in user orders


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/orders/myorders
```



## Products
All routes that have to do with products



### 1. DELETE /api/products/:id


Delete a product. Admin only.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/products/606ff6387a98ef5d4303342e
```



### 2. GET /api/products


Get all products


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/products
```



### 3. GET /api/products/:id


Get single product by id


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/products/6076122bd178450d178a3403
```



### 4. POST /api/products


Add new sample product. Admin only.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/products
```



### 5. PUT /api/products/:id


Update a product by id. Admin only.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/products/6073d9a3ee407e4235eb7b37
```



***Body:***

```js        
{
    "name": "Arc Reactor",
    "description": "Test description",
    "price":"10",
    "category": "electronics",
    "countInStock":10,
    "image": "/images/arc.jpg",
    "brand": "Sample Stark Industry"
}
```



## Reviews



### 1. POST /api/products/:id/reviews


Add new product review.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/products/6076122bd178450d178a3403/reviews
```



***Body:***

```js        
{
    "rating":5,
    "comment": "These are great bouquet of flowers"
}
```



## Users & Auth
Routes that have to do with managing users and authentication.



### 1. DELETE /api/users/:id


Delete a user. Admin only.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/users/607355fd53fc630ed596e8d5
```



### 2. GET /api/users


Get all users. Admin only


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/users
```



### 3. GET /api/users/:id


Get user by ID. Admin only.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/users/6076122bd178450d178a3401
```



### 4. GET /api/users/profile


Return logged in user.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/users/profile
```



### 5. POST /api/users


Create new user


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/users
```



***Body:***

```js        
{
    "name": "Steven R.",
    "email": "steve@mail.com",
    "password": "testdemo"
}
```



### 6. POST /api/users/login


Authenticate user and get token.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/users/login
```



***Body:***

```js        
{
    "email": "steve@mail.com",
    "password": "testdemo"
}
```



### 7. PUT /api/users/:id


Update user by id. Admin only.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/users/606ff6387a98ef5d4303342b
```



***Body:***

```js        
{
    "name":"Captin America"
}
```



### 8. PUT /api/users/profile


Update user profile.


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/users/profile
```



***Body:***

```js        
{
    "name": "Steve R",
    "email":"steve@mail.com",
    "password":"testdemo"
}
```



---
[Back to top](#flowerseverafter)
> Generated at: 2021-05-12 12:06:34 by Jimmy Lam
