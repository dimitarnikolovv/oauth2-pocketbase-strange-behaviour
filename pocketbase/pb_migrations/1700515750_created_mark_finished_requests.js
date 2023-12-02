/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "p3oubmehfiu1ibb",
    "created": "2023-11-20 21:29:10.276Z",
    "updated": "2023-11-20 21:29:10.276Z",
    "name": "mark_finished_requests",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pygovbvb",
        "name": "post",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "k8oe3hlpvmqbb7v",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "fo0sprbv",
        "name": "neededVotes",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 1,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "feaehy67",
        "name": "votes",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": true
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": "",
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("p3oubmehfiu1ibb");

  return dao.deleteCollection(collection);
})
