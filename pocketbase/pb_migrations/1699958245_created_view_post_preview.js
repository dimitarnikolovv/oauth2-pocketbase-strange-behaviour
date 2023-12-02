/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "o4a8bhy7xu4xe02",
    "created": "2023-11-14 10:37:25.442Z",
    "updated": "2023-11-14 10:37:25.442Z",
    "name": "view_post_preview",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nqq5yqu5",
        "name": "preview",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\n  p.id,\n  p.preview\nFROM\n  posts p\nGROUP BY p.id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("o4a8bhy7xu4xe02");

  return dao.deleteCollection(collection);
})
