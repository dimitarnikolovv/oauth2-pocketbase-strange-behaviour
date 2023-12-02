/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "41fw3kaqhp7uup9",
    "created": "2023-11-14 11:15:04.534Z",
    "updated": "2023-11-14 11:15:04.534Z",
    "name": "view_post_preview",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fcperef4",
        "name": "preview",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\n  p.id,\n  COALESCE(p.preview, '') as preview\nFROM\n  posts p\nGROUP BY p.id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("41fw3kaqhp7uup9");

  return dao.deleteCollection(collection);
})
