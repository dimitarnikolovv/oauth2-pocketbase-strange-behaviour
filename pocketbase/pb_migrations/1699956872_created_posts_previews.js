/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ysdfwkh99m3i635",
    "created": "2023-11-14 10:14:32.978Z",
    "updated": "2023-11-14 10:14:32.978Z",
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
        "id": "xru4pz0k",
        "name": "post",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "k8oe3hlpvmqbb7v",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ysdfwkh99m3i635");

  return dao.deleteCollection(collection);
})
