# API Documentation

## User/Session Routes

### Login:
* ```POST /api/session```
* Require Authentication: false
* Request
  * Method:  POST
  * URL:  /session
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "credential": "john.smith@gmail.com",
      "password": "secret password"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Smith",
      "email": "john.smith@gmail.com",
      "username": "JohnSmith",
      "token": ""
    }
    ```

* Error Response: Invalid credentials
  * Status Code: 401
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Invalid credentials",
      "statusCode": 401
    }
    ```

* Error response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "credential": "Email or username is required",
        "password": "Password is required"
      }
    }
    ```

### Logout:
* ```DELETE /api/session```
* Require Authentication: false
* Request
    * Method: DELETE
    * URL: /session
    * Headers:
        * Content-Type: application/json
    * Body:
    ```none```

* Successful Response
    * Status Code: 200
    * Headers:
        * Content-Type: application/json
    * Body:
    ```json
    {
        "message": "success"
    }
    ```

### Signup:
* ```POST /api/users```
* Require Authentication: false
* Request
  * Method:  POST
  * URL:  /users
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "firstName": "John",
      "lastName": "Smith",
      "username": "JohnSmith",
      "email": "john.smith@gmail.com",
      "password": "secret password"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Smith",
      "username": "JohnSmith",
      "email": "john.smith@gmail.com",
      "token": ""
    }
    ```

* Error response: User already exists with the specified email
  * Status Code: 403
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "User already exists",
      "statusCode": 403,
      "errors": {
        "email": "User with that email already exists"
      }
    }
    ```

* Error response: User already exists with the specified username
  * Status Code: 403
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "User already exists",
      "statusCode": 403,
      "errors": {
        "username": "User with that username already exists"
      }
    }
    ```

* Error response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "email": "Invalid email",
        "username": "Username is required",
        "firstName": "First Name is required",
        "lastName": "Last Name is required"
      }
    }
    ```

### Restore Session User:
* ```GET /api/session```
* Require Authentication: true
* Request
  * Method:  GET
  * URL:  /session
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Smith",
      "email": "john.smith@gmail.com",
      "username": "JohnSmith"
    }
    ```

## Character Routes

### Create Character:
* ```POST /api/characters```
* Require Authentication: true
* Request
  * Method:  POST
  * URL:  /characters
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "name": "Alucard",
      "race": "Half-Elf",
      "class": "Warlock"
    }
    ```
* Successful Response
  * Status Code: 201
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "name": "Alucard",
      "race": "Half-Elf",
      "class": "Warlock",
      "userId": 1
    }
    ```

### Get Characters:
* ```GET /api/characters```
* Require Authentication: true
* Request
  * Method: GET
  * URL: /characters
  * Headers:
    * Content-Type: application/json
  * Body: none
* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    [
        {
        "id": 1,
        "name": "Alucard",
        "race": "Half-Elf",
        "class": "Warlock",
        "userId": 1
        },
        {
        "id": 2,
        "name": "Dante",
        "race": "Human",
        "class": "Fighter",
        "userId": 1
        }
    ]
    ```

### Get Character:
* ```GET /api/characters/id```
* Require Authentication: true
* Request
  * Method: GET
  * URL: /characters/:id
  * Headers:
    * Content-Type: application/json
  * Body: none
* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "name": "Alucard",
      "race": "Half-Elf",
      "class": "Warlock",
      "userId": 1
    }
    ```

### Update Character:
* ```PUT /api/characters/id```
* Require Authentication: true
* Request
  * Method: PUT
  * URL: /characters/:id
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "name": "NewName",
      "race": "NewRace",
      "class": "NewClass"
    }
    ```
* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "name": "NewName",
      "race": "NewRace",
      "class": "NewClass",
      "userId": 1
    }
    ```

### Delete Character:
* ```DELETE /api/characters/id```
* Require Authentication: true
* Request
  * Method: DELETE
  * URL: /characters/:id
  * Headers:
    * Content-Type: application/json
  * Body: none
* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Character deleted Successfully"
    }
    ```


## Spell Slot Routes

### Create Spell Slots:
* ```POST /api/characters/:characterId/spell-slots```
* Require Authentication: true
* Request
  * Method: POST
  * URL: /characters/:characterId/spell-slots
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "slot1": 3,
      "slot2": 2,
      "slot3": 1,
      "slot4": 0,
      "slot5": 0,
      "slot6": 0,
      "slot7": 0,
      "slot8": 0,
      "slot9": 0
    }
    ```
* Successful Response
  * Status Code: 201
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "slot1": 3,
      "slot1Exhaust": 0,
      "slot2": 2,
      "slot2Exhaust": 0,
      "slot3": 1,
      "slot3Exhaust": 0,
      "slot4": 0,
      "slot4Exhaust": 0,
      "slot5": 0,
      "slot5Exhaust": 0,
      "slot6": 0,
      "slot6Exhaust": 0,
      "slot7": 0,
      "slot7Exhaust": 0,
      "slot8": 0,
      "slot8Exhaust": 0,
      "slot9": 0,
      "slot9Exhaust": 0,
      "characterId": 1
    }
    ```

### Get Spell Slots:
* ```GET /api/characters/:characterId/spell-slots```
* Require Authentication: true
* Request
  * Method: GET
  * URL: /characters/:characterId/spell-slots
  * Headers:
    * Content-Type: application/json
  * Body: None

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "slot1": 3,
      "slot1Exhaust": 0,
      "slot2": 2,
      "slot2Exhaust": 0,
      "slot3": 1,
      "slot3Exhaust": 0,
      "slot4": 0,
      "slot4Exhaust": 0,
      "slot5": 0,
      "slot5Exhaust": 0,
      "slot6": 0,
      "slot6Exhaust": 0,
      "slot7": 0,
      "slot7Exhaust": 0,
      "slot8": 0,
      "slot8Exhaust": 0,
      "slot9": 0,
      "slot9Exhaust": 0,
      "characterId": 1
    }
    ```

### Update Spell Slots (change the total amount of slots):
* ```PUT /api/characters/:characterId/spell-slots```
* Require Authentication: true
* Request
  * Method: PUT
  * URL: /characters/:characterId/spell-slots
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "slot1": 5,
      "slot2": 4,
      "slot3": 3,
      "slot4": 2,
      "slot5": 1,
      "slot6": 0,
      "slot7": 0,
      "slot8": 0,
      "slot9": 0,
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "slot1": 5,
      "slot1Exhaust": 0,
      "slot2": 4,
      "slot2Exhaust": 0,
      "slot3": 3,
      "slot3Exhaust": 0,
      "slot4": 2,
      "slot4Exhaust": 0,
      "slot5": 1,
      "slot5Exhaust": 0,
      "slot6": 0,
      "slot6Exhaust": 0,
      "slot7": 0,
      "slot7Exhaust": 0,
      "slot8": 0,
      "slot8Exhaust": 0,
      "slot9": 0,
      "slot9Exhaust": 0,
      "characterId": 1
    }
    ```

### Exhaust Spell Slots (update spell slots table to reflect used spell slots):
* ```PUT /api/characters/:characterId/spell-slots/exhaust```
* Require Authentication: true
* Request
  * Method: PUT
  * URL: /characters/:characterId/spell-slots
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "slot1Exhaust": 3,
      "slot2Exhaust": 1,
      "slot3Exhaust": 1,
      "slot4Exhaust": 0,
      "slot5Exhaust": 0,
      "slot6Exhaust": 0,
      "slot7Exhaust": 0,
      "slot8Exhaust": 0,
      "slot9Exhaust": 0,
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "slot1": 5,
      "slot1Exhaust": 3,
      "slot2": 4,
      "slot2Exhaust": 1,
      "slot3": 3,
      "slot3Exhaust": 1,
      "slot4": 2,
      "slot4Exhaust": 0,
      "slot5": 1,
      "slot5Exhaust": 0,
      "slot6": 0,
      "slot6Exhaust": 0,
      "slot7": 0,
      "slot7Exhaust": 0,
      "slot8": 0,
      "slot8Exhaust": 0,
      "slot9": 0,
      "slot9Exhaust": 0,
      "characterId": 1
    }
    ```

### Delete Spell Slots:
* ```DELETE /api/spell-slots/id```
* Require Authentication: true


## Spell Routes

### Create Spell (search dnd api for spell and register its data):
* ```POST /api/characters/:characterId/spells```
* Require Authentication: true
* Request
  * Method: POST
  * URL: /characters/:characterId/spells
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "name": "Acid Arrow",
      "level": 1,
      "description": "...long spell description",
      "range": "90 feet",
      "attackType": "ranged",
      "damage": "4d4",
      "duration": "Instantaneous",
      "components": ['V', 'S', 'M'],
      "material": "Powdered rhubarb leaf and an adder's stomach.",
      "concentration": false,
      "castTime": "1 action",
      "ritual": false,
      "characterId": 1
    }
    ```

* Successful Response
  * Status Code: 201
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "name": "Acid Arrow",
      "level": 1,
      "description": "...long spell description",
      "range": "90 feet",
      "attackType": "ranged",
      "damage": "4d4",
      "duration": "Instantaneous",
      "components": ['V', 'S', 'M'],
      "material": "Powdered rhubarb leaf and an adder's stomach.",
      "concentration": false,
      "castTime": "1 action",
      "ritual": false,
      "characterId": 1
    }
    ```

### Get Spells:
* ```GET /api/characters/:characterId/spells```
* Require Authentication: true
* Request
  * Method: GET
  * URL: /characters/:characterId/spells
  * Headers:
    * Content-Type: application/json
  * Body: None

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    [
        {
        "id": 1,
        "name": "Acid Arrow",
        "level": 1,
        "description": "...long spell description",
        "range": "90 feet",
        "attackType": "ranged",
        "damage": "4d4",
        "duration": "Instantaneous",
        "components": ['V', 'S', 'M'],
        "material": "Powdered rhubarb leaf and an adder's stomach.",
        "concentration": false,
        "castTime": "1 action",
        "ritual": false,
        "characterId": 1
        },
        {
        "id": 2,
        "name": "Acid Splash",
        "level": 0,
        "description": "...long spell description",
        "range": "60 feet",
        "attackType": null,
        "damage": "1d6",
        "duration": "Instantaneous",
        "components": ['V', 'S'],
        "material": null,
        "concentration": false,
        "castTime": "1 action",
        "ritual": false,
        "characterId": 1
        }
    ]
    ```

### Get Spell:
* ```GET /api/characters/:characterId/spells/id```
* Require Authentication: true
* Request
  * Method: GET
  * URL: /characters/:characterId/spells/:id
  * Headers:
    * Content-Type: application/json
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
        {
        "id": 1,
        "name": "Acid Arrow",
        "level": 1,
        "description": "...long spell description",
        "range": "90 feet",
        "attackType": "ranged",
        "damage": "4d4",
        "duration": "Instantaneous",
        "components": ['V', 'S', 'M'],
        "material": "Powdered rhubarb leaf and an adder's stomach.",
        "concentration": false,
        "castTime": "1 action",
        "ritual": false,
        "characterId": 1
        }
    ```

### Update Spell (maybe?):
* ```PUT /api/spells/id```
* Require Authentication: true

### Delete Spell:
* ```DELETE /api/spells/id```
* Require Authentication: true
