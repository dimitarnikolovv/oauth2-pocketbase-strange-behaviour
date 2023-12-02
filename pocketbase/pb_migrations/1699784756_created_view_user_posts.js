/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zfe8375o8l06hay",
    "created": "2023-11-12 10:25:56.990Z",
    "updated": "2023-11-12 10:25:56.990Z",
    "name": "view_user_posts",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lalmoudi",
        "name": "userPosts",
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
      "query": "SELECT \n  u.id as id, \n  p.id as userPosts\nFROM \n  users u\nJOIN \n  posts p ON u.id = p.id;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zfe8375o8l06hay");

  return dao.deleteCollection(collection);
})
