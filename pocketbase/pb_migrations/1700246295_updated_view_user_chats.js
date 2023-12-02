/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2uthc8xwvg4b12l")

  collection.options = {
    "query": "SELECT\n  u.id,\n  JSON_GROUP_ARRAY(p.id) AS postId\nFROM\n  posts p, users u, applications a\nleft JOIN\n  applications ON (p.author = u.id OR (u.id = a.applicant AND a.post = p.id AND a.verified = TRUE))\nGROUP BY u.id"
  }

  // remove
  collection.schema.removeField("8c4hdal2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3xrjhva6",
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
    "query": "SELECT\n  u.id,\n  JSON_GROUP_ARRAY(p.id) AS postId\nFROM\n  posts p, users u, applications a\nJOIN\n  applications ON (p.author = u.id OR (u.id = a.applicant AND a.post = p.id AND a.verified = TRUE))\nGROUP BY u.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8c4hdal2",
    "name": "postId",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("3xrjhva6")

  return dao.saveCollection(collection)
})
