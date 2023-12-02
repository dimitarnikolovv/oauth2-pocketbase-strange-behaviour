/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0jv42lgp8ghm7yt",
    "created": "2023-11-17 20:06:54.147Z",
    "updated": "2023-11-17 20:06:54.147Z",
    "name": "view_chats",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rqrkwlyp",
        "name": "participants",
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
      "query": "SELECT\n  p.id,\n  JSON_GROUP_ARRAY(u.id) AS participants\nFROM\n  users u, applications a, posts p\nWHERE\n  (u.id = p.author OR (u.id = a.applicant AND a.post = post AND a.verified = TRUE) AND p.expired = FALSE)\nGROUP BY p.id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0jv42lgp8ghm7yt");

  return dao.deleteCollection(collection);
})
