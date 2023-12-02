/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "2uthc8xwvg4b12l",
    "created": "2023-11-17 17:47:34.100Z",
    "updated": "2023-11-17 17:47:34.100Z",
    "name": "view_user_chats",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lxuoypja",
        "name": "postId",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "k8oe3hlpvmqbb7v",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\n  u.id,\n  p.id AS postId\nFROM\n  posts p, users u, applications a\nWHERE\n  p.author = u.id OR (u.id = a.applicant AND a.post = p.id AND a.verified = TRUE)\nGROUP BY p.id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2uthc8xwvg4b12l");

  return dao.deleteCollection(collection);
})
