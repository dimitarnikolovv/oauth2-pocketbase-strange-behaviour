/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ula9fg3z9sihawr",
    "created": "2023-11-11 00:53:20.551Z",
    "updated": "2023-11-11 00:53:20.551Z",
    "name": "post_applied_users",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "oqb69cs0",
        "name": "aplicant",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
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
      "query": "SELECT\n  p.id AS id,\n  a.applicant AS aplicant\nFROM \n  posts p, applications a\nWHERE \n  a.post = p.id\nGROUP BY p.id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ula9fg3z9sihawr");

  return dao.deleteCollection(collection);
})
