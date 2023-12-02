/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0jv42lgp8ghm7yt")

  collection.options = {
    "query": "SELECT\n  p.id,\n  JSON_GROUP_ARRAY(DISTINCT u.id) AS participants\nFROM\n  users u\n  JOIN applications a ON u.id = a.applicant AND a.verified = TRUE\n  JOIN posts p ON (u.id = p.author OR u.id = a.applicant) AND p.expired = FALSE\nGROUP BY p.id"
  }

  // remove
  collection.schema.removeField("h13hlufy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "soltgnbg",
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
    "query": "SELECT\n  p.id,\n  JSON_GROUP_ARRAY(u.id) AS participants\nFROM\n  users u, applications a, posts p\nWHERE\n  (u.id = p.author OR (u.id = a.applicant AND a.post = post AND a.verified = TRUE) AND p.expired = FALSE)\nGROUP BY p.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h13hlufy",
    "name": "participants",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("soltgnbg")

  return dao.saveCollection(collection)
})
