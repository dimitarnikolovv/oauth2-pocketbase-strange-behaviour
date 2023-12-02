/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2uthc8xwvg4b12l")

  collection.listRule = ""
  collection.viewRule = ""
  collection.options = {
    "query": "SELECT\n  u.id,\n  JSON_GROUP_ARRAY(p.id) AS postId\nFROM\n  posts p, users u, applications a\nWHERE\n  p.author = u.id OR (u.id = a.applicant AND a.post = p.id AND a.verified = TRUE)\nGROUP BY p.id"
  }

  // remove
  collection.schema.removeField("lxuoypja")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lx92em3z",
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

  collection.listRule = null
  collection.viewRule = null
  collection.options = {
    "query": "SELECT\n  u.id,\n  p.id AS postId\nFROM\n  posts p, users u, applications a\nWHERE\n  p.author = u.id OR (u.id = a.applicant AND a.post = p.id AND a.verified = TRUE)\nGROUP BY p.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lxuoypja",
    "name": "postId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "k8oe3hlpvmqbb7v",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("lx92em3z")

  return dao.saveCollection(collection)
})
