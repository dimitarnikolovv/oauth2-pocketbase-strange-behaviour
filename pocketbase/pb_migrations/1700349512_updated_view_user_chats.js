/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2uthc8xwvg4b12l")

  collection.options = {
    "query": "SELECT\n  u.id,\n  JSON_GROUP_ARRAY(DISTINCT p.id) AS postId,\n  JSON_GROUP_ARRAY(DISTINCT JSON_OBJECT(p.id, p.departFrom)) AS post\nFROM\n  posts p, users u, applications a\nWHERE\n  (p.author = u.id OR (u.id = a.applicant AND a.post = p.id AND a.verified = TRUE)) AND p.expired = FALSE\nGROUP BY u.id"
  }

  // remove
  collection.schema.removeField("m7xgvpb9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ta0a9mgh",
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
    "id": "civslwhh",
    "name": "post",
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
    "query": "SELECT\n  u.id,\n  JSON_GROUP_ARRAY(DISTINCT p.id) AS postId\nFROM\n  posts p, users u, applications a\nWHERE\n  (p.author = u.id OR (u.id = a.applicant AND a.post = p.id AND a.verified = TRUE)) AND p.expired = FALSE\nGROUP BY u.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m7xgvpb9",
    "name": "postId",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("ta0a9mgh")

  // remove
  collection.schema.removeField("civslwhh")

  return dao.saveCollection(collection)
})
