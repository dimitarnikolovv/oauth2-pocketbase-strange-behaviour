/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "lcii4972suzs1hk",
    "created": "2023-11-13 16:13:50.303Z",
    "updated": "2023-11-13 16:13:50.303Z",
    "name": "user_subscriptions",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dsvl9gab",
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
    "options": {
      "query": "SELECT\n  ns.user AS id,\n  ns.subscriptions AS subscriptions\nFROM\n  notification_subscriptions ns\nGROUP BY ns.user"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lcii4972suzs1hk");

  return dao.deleteCollection(collection);
})
