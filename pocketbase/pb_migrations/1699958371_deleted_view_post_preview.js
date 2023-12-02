/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("o4a8bhy7xu4xe02");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "o4a8bhy7xu4xe02",
    "created": "2023-11-14 10:37:25.442Z",
    "updated": "2023-11-14 10:39:03.543Z",
    "name": "view_post_preview",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ecs7t26s",
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
      "query": "SELECT\n  p.id,\n  COALESCE(p.preview, '') AS preview\nFROM\n  posts p\nGROUP BY p.id"
    }
  });

  return Dao(db).saveCollection(collection);
})
