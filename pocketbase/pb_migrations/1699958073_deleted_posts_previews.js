/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ysdfwkh99m3i635");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "ysdfwkh99m3i635",
    "created": "2023-11-14 10:14:32.978Z",
    "updated": "2023-11-14 10:28:54.376Z",
    "name": "posts_previews",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5d5zxq61",
        "name": "url",
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
        "id": "lfwjxoup",
        "name": "author",
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "@request.auth.id = author",
    "updateRule": "@request.auth.id = author",
    "deleteRule": "@request.auth.id = author",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
