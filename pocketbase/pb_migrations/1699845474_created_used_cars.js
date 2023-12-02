/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cf2s3nnwn2yw3et",
    "created": "2023-11-13 03:17:54.272Z",
    "updated": "2023-11-13 03:17:54.272Z",
    "name": "used_cars",
    "type": "view",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\n  c.id\nFROM\n  cars c, posts p\nWHERE\n  c.id = p.id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cf2s3nnwn2yw3et");

  return dao.deleteCollection(collection);
})
