/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("sdrb37kheabystq");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "sdrb37kheabystq",
    "created": "2023-11-08 16:13:25.010Z",
    "updated": "2023-11-08 16:13:25.010Z",
    "name": "viewRatings",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "i4zjzvzr",
        "name": "rater_username",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "frixhs9s",
        "name": "rater_firstName",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ed6ei0b8",
        "name": "rater_lastName",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "bjg7rtp2",
        "name": "rater_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "2tqdgpoo",
        "name": "user_rating",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 5,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "dohs1qx2",
        "name": "target",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "cb7epglp",
        "name": "averageRating",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "gdwerb6a",
        "name": "totalRatings",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\n    r.id,                             \n    ru.username AS rater_username,\n    ru.firstName AS rater_firstName,\n    ru.lastName as rater_lastName,\n    ru.id AS rater_id,\n    r.rating AS user_rating,\n    r.target,                       \n    AVG(r.rating) AS averageRating,\n    COUNT(*) AS totalRatings\nFROM\n    ratings r\nJOIN\n    users ru ON r.author = ru.id\nGROUP BY r.target"
    }
  });

  return Dao(db).saveCollection(collection);
})
