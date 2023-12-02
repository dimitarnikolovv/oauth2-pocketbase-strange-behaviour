/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r3zta191fbr6r8a")

  collection.options = {
    "query": "SELECT\n  ap.applicant AS id,\n  COUNT(*) AS totalApplications\nFROM\n applications ap\nWHERE\n  (ap.verified = TRUE OR ap.declined = TRUE)\nGROUP BY ap.id"
  }

  // remove
  collection.schema.removeField("v9vwk8au")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k3rj9sho",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r3zta191fbr6r8a")

  collection.options = {
    "query": "SELECT\n  ap.applicant AS id,\n  COUNT(*) AS totalApplications\nFROM\n applications ap\nWHERE\n  (ap.verified = TRUE OR ap.declined = TRUE)"
  }

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("k3rj9sho")

  return dao.saveCollection(collection)
})
