/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2uthc8xwvg4b12l")

  collection.options = {
    "query": "SELECT DISTINCT\n  u.id,\n  JSON_GROUP_ARRAY(p.id) AS postId\nFROM\n  posts p, users u, applications a\nWHERE\n  p.author = u.id OR (u.id = a.applicant AND a.post = p.id AND a.verified = TRUE)\nGROUP BY u.id"
  }

  // remove
  collection.schema.removeField("fiqis9oh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d77kwycg",
    "name": "postId",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2uthc8xwvg4b12l")

  collection.options = {
    "query": "SELECT\n  u.id,\n  JSON_GROUP_ARRAY(p.id) AS postId\nFROM\n  posts p, users u, applications a\nWHERE\n  p.author = u.id OR (u.id = a.applicant AND a.post = p.id AND a.verified = TRUE)\nGROUP BY u.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fiqis9oh",
    "name": "postId",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("d77kwycg")

  return dao.saveCollection(collection)
})
