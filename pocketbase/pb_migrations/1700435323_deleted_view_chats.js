/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0jv42lgp8ghm7yt");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "0jv42lgp8ghm7yt",
    "created": "2023-11-17 20:06:54.147Z",
    "updated": "2023-11-18 21:23:16.357Z",
    "name": "view_chats",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bhgc711s",
        "name": "participants",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": "(@request.auth.id ?= @collection.posts.author && @collection.posts.id ?= id && @collection.posts.expired ?= false) || \n(@request.auth.id ?= @collection.applications.applicant && @collection.applications.verified ?= true && @collection.applications.post ?= id && @collection.applications.post.expired ?= false)",
    "viewRule": "(@request.auth.id ?= @collection.posts.author && @collection.posts.id ?= id && @collection.posts.expired ?= false) || \n(@request.auth.id ?= @collection.applications.applicant && @collection.applications.verified ?= true && @collection.applications.post ?= id && @collection.applications.post.expired ?= false)",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\n  p.id,\n  JSON_GROUP_ARRAY(DISTINCT u.id) AS participants\nFROM\n  users u\n  JOIN applications a ON a.verified = TRUE\n  JOIN posts p ON (u.id = p.author OR u.id = a.applicant) AND a.post = p.id AND p.expired = FALSE\nGROUP BY p.id"
    }
  });

  return Dao(db).saveCollection(collection);
})
