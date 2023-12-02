/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r3zta191fbr6r8a")

  collection.options = {
    "query": "SELECT\n  ap.applicant AS id,\n  SUM(CASE WHEN ap.verified = TRUE THEN 1 ELSE 0 END) AS totalVerified,\n  SUM(CASE WHEN ap.declined = TRUE THEN 1 ELSE 0 END) AS totalDeclined,\n  SUM(CASE WHEN ap.verified = TRUE THEN 1 ELSE 0 END + CASE WHEN ap.declined = TRUE THEN 1 ELSE 0 END) AS totalApplications\nFROM\n applications ap, posts p\nWHERE p.id = ap.post AND p.expired = FALSE AND p.finished = FALSE\nGROUP BY ap.applicant"
  }

  // remove
  collection.schema.removeField("gxjdsoot")

  // remove
  collection.schema.removeField("nkmfou90")

  // remove
  collection.schema.removeField("hjc0pqhb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sphwqdm5",
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
    "id": "iahlexzw",
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
    "id": "y3xtzkka",
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
    "query": "SELECT\n  ap.applicant AS id,\n  SUM(CASE WHEN ap.verified = TRUE THEN 1 ELSE 0 END) AS totalVerified,\n  SUM(CASE WHEN ap.declined = TRUE THEN 1 ELSE 0 END) AS totalDeclined,\n  SUM(CASE WHEN ap.verified = TRUE THEN 1 ELSE 0 END + CASE WHEN ap.declined = TRUE THEN 1 ELSE 0 END) AS totalApplications\nFROM\n applications ap, posts p\nWHERE p.id = ap.post AND p.expired = FALSE\nGROUP BY ap.applicant"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gxjdsoot",
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
    "id": "nkmfou90",
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
    "id": "hjc0pqhb",
    "name": "totalApplications",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("sphwqdm5")

  // remove
  collection.schema.removeField("iahlexzw")

  // remove
  collection.schema.removeField("y3xtzkka")

  return dao.saveCollection(collection)
})
