/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "r3zta191fbr6r8a",
    "created": "2023-11-10 19:14:39.530Z",
    "updated": "2023-11-10 19:14:39.530Z",
    "name": "view_applications",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "v9vwk8au",
        "name": "totalApplications",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
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
      "query": "SELECT\n  ap.applicant AS id,\n  COUNT(*) AS totalApplications\nFROM\n applications ap\nWHERE\n  (ap.verified = TRUE OR ap.declined = TRUE)"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("r3zta191fbr6r8a");

  return dao.deleteCollection(collection);
})
