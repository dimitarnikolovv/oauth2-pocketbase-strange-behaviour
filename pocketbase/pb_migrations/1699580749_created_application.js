/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "nn8gm39lz35jil2",
    "created": "2023-11-10 01:45:49.286Z",
    "updated": "2023-11-10 01:45:49.286Z",
    "name": "application",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0q9hoxrt",
        "name": "applicant",
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
        "id": "pmfwt9xo",
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
      },
      {
        "system": false,
        "id": "dosdpooa",
        "name": "passengers",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "q3lzuss3",
        "name": "verified",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "@request.auth.id = applicant.id",
    "createRule": "@request.auth.id = applicant.id",
    "updateRule": "@request.data.user.id = post.author",
    "deleteRule": "@request.auth.id = applicant.id",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nn8gm39lz35jil2");

  return dao.deleteCollection(collection);
})
