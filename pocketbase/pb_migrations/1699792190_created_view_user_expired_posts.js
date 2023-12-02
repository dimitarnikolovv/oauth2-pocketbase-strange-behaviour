/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "xlj1m22fd1opiml",
    "created": "2023-11-12 12:29:50.033Z",
    "updated": "2023-11-12 12:29:50.033Z",
    "name": "view_user_expired_posts",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hfysbxph",
        "name": "userPosts",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": "@request.auth.id = id",
    "viewRule": "@request.auth.id = id",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT \n  u.id AS id,\n  JSON_GROUP_ARRAY(p.id) as userPosts\nFROM \n  users u, posts p\nWHERE\n  p.author = u.id AND p.expired = TRUE\nGROUP BY u.id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xlj1m22fd1opiml");

  return dao.deleteCollection(collection);
})
