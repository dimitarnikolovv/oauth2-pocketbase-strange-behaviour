/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r3zta191fbr6r8a")

  collection.options = {
    "query": "SELECT\n  ap.applicant AS id,\n  SUM(CASE WHEN ap.verified = TRUE THEN 1 ELSE 0 END) AS totalVerified,\n  SUM(CASE WHEN ap.declined = TRUE THEN 1 ELSE 0 END) AS totalDeclined\n \nFROM\n applications ap\nGROUP BY ap.id"
  }

  // remove
  collection.schema.removeField("medffceq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "in8l4tnr",
    "name": "totalVerified",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k4rtawr2",
    "name": "totalDeclined",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r3zta191fbr6r8a")

  collection.options = {
    "query": "SELECT\n  ap.applicant AS id,\n  COUNT(*) AS totalApplications\nFROM\n applications ap\nWHERE\n  (ap.verified = TRUE OR ap.declined = TRUE)\nGROUP BY ap.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "medffceq",
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
  collection.schema.removeField("in8l4tnr")

  // remove
  collection.schema.removeField("k4rtawr2")

  return dao.saveCollection(collection)
})
