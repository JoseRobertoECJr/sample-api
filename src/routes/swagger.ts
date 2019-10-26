export const swaggerDocument = {
    "swagger": "2.0",
    "info": {
        "version": "1.0.0",
        "title": "Sample App",
        "description": "Sample App",
        "license": {
          "name": "joserobertoecjr",
          "url": "github.com/joserobertoecjr"
        }
    },
    "host": "localhost:3000",
    "basePath": "/api",
    "tags": [
        {
          "name": "Users",
          "description": "API for users in the system"
        }
    ],
    "schemes": [
        "http"
    ],
    "consumes": [
        "application/json"
    ],
    "produces": [
        "application/json"
    ],
    "paths": {
        "/sample/do-something/{defautParam}": {
            "get": {
                "tags": [
                    "Sample"
                ],
                "description": "Sample call for api",
                "parameters": [
                    { "name": "defautParam", "in": "path", "description": "Default param in path to controller" }
                ],
                "produces": [ "application/json" ],
                "responses": { "200": { "description": "Success message", "schema": "#sample/do-something" } }
            },
        },
        "/sample/do-another-thing": {
            "post": {
                "tags": [
                    "Sample"
                ],
                "description": "Sample call for api",
                "parameters": [
                    { "name": "defautParam", "in": "body", "description": "Default param in path to controller" }
                ],
                "produces": [ "application/json" ],
                "responses": { "200": { "description": "Success message", "schema": "#sample/do-something" } }
            },
        }
    }
}