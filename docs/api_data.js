define({ "api": [
  {
    "type": "post",
    "url": "/api/user/login",
    "title": "Login User",
    "name": "LoginUser",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Reponse:",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"18927398172c hsdkucbfy voq2 3rj23.41.2,3k4hjd`x8o237c49p8123759[48c17]`\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/auth.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/api/user/register",
    "title": "Register User",
    "name": "RegisterUser",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password2",
            "description": "<p>password2 confirmartion du password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n  \"name\": \"Freddie Mercury\",\n  \"email\": \"example@example.corm\"\n  \"password\": \"password\"\n  \"password2\": \"password\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Successful Reponse:",
          "content": "HTTP/1.1 400 NOT FOUND\n{\n  \"Error\": \"Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/auth.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/api/user/logout",
    "title": "Signup User",
    "name": "SignupUser",
    "group": "Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>You arre logged out</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Reponse:",
          "content": "HTTP/1.1 201 OK\n{\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/auth.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "PostModel",
    "url": "Model",
    "title": "Post",
    "name": "PostModel",
    "group": "MongoDb",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>titre d'un post</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>contenu du post</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./models/postModel.js",
    "groupTitle": "MongoDb"
  },
  {
    "type": "UserModel",
    "url": "Model",
    "title": "User",
    "name": "UserModel",
    "group": "MongoDb",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name du user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email du user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password du user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./models/userModel.js",
    "groupTitle": "MongoDb"
  },
  {
    "type": "post",
    "url": "/api/posts/add",
    "title": "Add Posts",
    "name": "AddPosts",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "String",
            "description": "<p>} title titre du texte</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n  \"titre1\": \"Freddie Mercury\",\n  \"text1\": \"Je suis medecin\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Post id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Post title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Post text</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n  \"id\": 4,\n  \"title4\": \"Météo\",\n  \"text4\": \"Il pleut\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "post",
    "url": "/api/posts/delete/:id",
    "title": "Delete Posts",
    "name": "DeletePosts",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "String",
            "description": "<p>} title titre du texte</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n  \"titre\": \"Freddie Mercury\",\n  \"text\": \"Je suis medecin\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Post title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Post text</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n  \"_id\": \"5e4aca4cf1040342ecadb141\",\n  \"title\": \"Météo\",\n  \"text\": \"Il pleut\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "get",
    "url": "/api/posts",
    "title": "Get Posts",
    "name": "GetPosts",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>titre du texte</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>contenu du texte</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n  \"titre1\": \"Freddie Mercury\",\n  \"text1\": \"Je suis medecin\"\n}\n{\n  \"titre2\": \"Le temps\",\n  \"text2\": \"Le ciel est bleu\"\n}\n{\n  \"titre3\": \"Bordeaux\",\n  \"text3\": \"Il fait beau\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n  \"id\": 4,\n  \"title4\": \"Freddie Mercury\",\n  \"text4\": \"example@example.corm\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "get",
    "url": "/api/posts/:id",
    "title": "Get Posts by Id",
    "name": "GetPostsId",
    "group": "Posts",
    "parameter": {
      "examples": [
        {
          "title": "Example Body for id=1:",
          "content": "{\n  \"titre1\": \"Freddie Mercury\",\n  \"text1\": \"Je suis medecin\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Post id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Post title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Post text</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n  \"id\": 4,\n  \"title4\": \"Météo\",\n  \"text4\": \"Il pleut\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "put",
    "url": "/api/posts/edit/:id",
    "title": "Put Posts",
    "name": "PutPosts",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "String",
            "description": "<p>} title titre du texte</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n  \"titre1\": \"Freddie Mercury\",\n  \"text1\": \"Je suis medecin\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Post id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Post title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Post text</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n  \"id\": 4,\n  \"title4\": \"Météo\",\n  \"text4\": \"Il pleut\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/posts.js",
    "groupTitle": "Posts"
  }
] });
