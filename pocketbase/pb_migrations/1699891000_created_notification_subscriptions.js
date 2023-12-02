/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cgtxtos489pqx6s",
    "created": "2023-11-13 15:56:40.970Z",
    "updated": "2023-11-13 15:56:40.970Z",
    "name": "notification_subscriptions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vlgky1o0",
        "name": "user",
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
        "id": "ea3riztx",
        "name": "subscriptions",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("cgtxtos489pqx6s");

  return dao.deleteCollection(collection);
})
