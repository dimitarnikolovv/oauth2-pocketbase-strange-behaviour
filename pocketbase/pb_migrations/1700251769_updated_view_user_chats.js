/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2uthc8xwvg4b12l")

  collection.options = {
    "query": "SELECT\n  u.id,\n  JSON_GROUP_ARRAY(p.id) AS postId,\n  JSON_GROUP_ARRAY(u.id) as participants\nFROM\n  posts p, users u, applications a\nWHERE\n  (p.author = u.id OR (u.id = a.applicant AND a.post = p.id AND a.verified = TRUE)) AND p.expired = FALSE\nGROUP BY u.id"
  }

  // remove
  collection.schema.removeField("tc7l3yfu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fzxvowj3",
    "name": "postId",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z7w65frv",
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
  const collection = dao.findCollectionByNameOrId("2uthc8xwvg4b12l")

  collection.options = {
    "query": "SELECT\n  u.id,\n  JSON_GROUP_ARRAY(p.id) AS postId\nFROM\n  posts p, users u, applications a\nWHERE\n  (p.author = u.id OR (u.id = a.applicant AND a.post = p.id AND a.verified = TRUE)) AND p.expired = FALSE\nGROUP BY u.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tc7l3yfu",
    "name": "postId",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("fzxvowj3")

  // remove
  collection.schema.removeField("z7w65frv")

  return dao.saveCollection(collection)
})
