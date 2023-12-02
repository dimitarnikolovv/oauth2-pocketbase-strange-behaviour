/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mdrdoh14975vhbc")

  collection.options = {
    "query": "SELECT\n  p.author AS id,\n  SUM(CASE WHEN (ap.verified = FALSE AND ap.declined = FALSE) THEN 1 ELSE 0 END) AS totalApplications\nFROM \n  applications ap,\n  posts p\nWHERE p.id = ap.post\nGROUP BY \n  p.author\n"
  }

  // remove
  collection.schema.removeField("bueaa57o")

  // remove
  collection.schema.removeField("02hpdpv8")

  // remove
  collection.schema.removeField("5vic7ko5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9kk45bet",
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
    "query": "SELECT\n  p.author AS id,\n  SUM(CASE WHEN ap.verified = FALSE THEN 1 ELSE 0 END) AS totalToVerify,\n  SUM(CASE WHEN ap.declined = FALSE THEN 1 ELSE 0 END) AS totalToDecline,\n  SUM(CASE WHEN ap.verified = FALSE THEN 1 ELSE 0 END + CASE WHEN ap.declined = FALSE THEN 1 ELSE 0 END) AS totalApplications\nFROM \n  applications ap,\n  posts p\nWHERE p.id = ap.post\nGROUP BY \n  p.author\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bueaa57o",
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
    "id": "02hpdpv8",
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
    "id": "5vic7ko5",
    "name": "totalApplications",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("9kk45bet")

  return dao.saveCollection(collection)
})
