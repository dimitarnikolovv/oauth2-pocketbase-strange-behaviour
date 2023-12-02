/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mdrdoh14975vhbc")

  collection.options = {
    "query": "SELECT\n  p.author AS id,\n  \n  SUM(CASE WHEN ap.verified = FALSE THEN 1 ELSE 0 END) AS totalToVerify,\n  SUM(CASE WHEN ap.declined = FALSE THEN 1 ELSE 0 END) AS totalToDecline,\n  SUM(CASE WHEN ap.verified = FALSE THEN 1 ELSE 0 END + CASE WHEN ap.declined = FALSE THEN 1 ELSE 0 END) AS totalApplications\nFROM \n  applications ap,\n  posts p\nWHERE p.id = ap.post\nGROUP BY \n  p.author\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h3o9fabm",
    "name": "totalToVerify",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sd1wa2hr",
    "name": "totalToDecline",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cenfqyva",
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
  const collection = dao.findCollectionByNameOrId("mdrdoh14975vhbc")

  collection.options = {
    "query": "SELECT\n  p.author as id\n\nFROM \n  applications ap,\n  posts p\nWHERE p.id = ap.post\nGROUP BY \n  p.author\n"
  }

  // remove
  collection.schema.removeField("h3o9fabm")

  // remove
  collection.schema.removeField("sd1wa2hr")

  // remove
  collection.schema.removeField("cenfqyva")

  return dao.saveCollection(collection)
})
