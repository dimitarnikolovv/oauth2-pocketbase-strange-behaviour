/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r3zta191fbr6r8a")

  collection.options = {
    "query": "SELECT\n  ap.applicant AS id,\n  SUM(CASE WHEN ap.verified = TRUE THEN 1 ELSE 0 END) AS totalVerified,\n  SUM(CASE WHEN ap.declined = TRUE THEN 1 ELSE 0 END) AS totalDeclined,\n  (CASE WHEN ap.verified = TRUE THEN 1 ELSE 0 END + CASE WHEN ap.declined = TRUE THEN 1 ELSE 0 END) AS totalApplications\nFROM\n applications ap\nGROUP BY ap.id"
  }

  // remove
  collection.schema.removeField("in8l4tnr")

  // remove
  collection.schema.removeField("k4rtawr2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o87xkk4p",
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
    "id": "7jr7qjc3",
    "name": "totalDeclined",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jy8c1mlq",
    "name": "totalApplications",
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
    "query": "SELECT\n  ap.applicant AS id,\n  SUM(CASE WHEN ap.verified = TRUE THEN 1 ELSE 0 END) AS totalVerified,\n  SUM(CASE WHEN ap.declined = TRUE THEN 1 ELSE 0 END) AS totalDeclined\n \nFROM\n applications ap\nGROUP BY ap.id"
  }

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

  // remove
  collection.schema.removeField("o87xkk4p")

  // remove
  collection.schema.removeField("7jr7qjc3")

  // remove
  collection.schema.removeField("jy8c1mlq")

  return dao.saveCollection(collection)
})
