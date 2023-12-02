/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0jv42lgp8ghm7yt")

  collection.options = {
    "query": "SELECT\n  p.id,\n  JSON_GROUP_ARRAY(DISTINCT u.id) AS participants\nFROM\n  users u\n  JOIN applications a ON a.verified = TRUE\n  JOIN posts p ON (u.id = p.author OR u.id = a.applicant) AND a.post = p.id AND p.expired = FALSE\nGROUP BY p.id"
  }

  // remove
  collection.schema.removeField("m31t0fze")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "enremr0l",
    "name": "participants",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0jv42lgp8ghm7yt")

  collection.options = {
    "query": "SELECT\n  p.id,\n  JSON_GROUP_ARRAY(DISTINCT u.id) AS participants\nFROM\n  users u\n  JOIN applications a ON u.id = a.applicant AND a.verified = TRUE\n  JOIN posts p ON (u.id = p.author OR u.id = a.applicant) AND a.post = p.id AND p.expired = FALSE\nGROUP BY p.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m31t0fze",
    "name": "participants",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("enremr0l")

  return dao.saveCollection(collection)
})
