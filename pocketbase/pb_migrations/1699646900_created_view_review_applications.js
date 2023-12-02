/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "mdrdoh14975vhbc",
    "created": "2023-11-10 20:08:20.944Z",
    "updated": "2023-11-10 20:08:20.944Z",
    "name": "view_review_applications",
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
      "query": "SELECT\n  p.author as id\n\nFROM \n  applications ap,\n  posts p\nWHERE p.id = ap.post\n"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("mdrdoh14975vhbc");

  return dao.deleteCollection(collection);
})
