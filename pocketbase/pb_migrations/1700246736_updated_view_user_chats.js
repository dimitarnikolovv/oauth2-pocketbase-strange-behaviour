/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2uthc8xwvg4b12l")

  collection.options = {
    "query": "SELECT\n  u.id,\n  GROUP_CONCAT(p.id) AS postId\nFROM\n  posts p, users u, applications a\nWHERE\n  p.author = u.id OR (u.id = a.applicant AND a.post = p.id AND a.verified = TRUE)\nGROUP BY u.id"
  }

  // remove
  collection.schema.removeField("dwej8odr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n6hofaxm",
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
    "query": "SELECT\n  u.id,\n  p.id AS postId\nFROM\n  posts p, users u, applications a\nWHERE\n  p.author = u.id OR (u.id = a.applicant AND a.post = p.id AND a.verified = TRUE)\nGROUP BY u.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dwej8odr",
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
  collection.schema.removeField("n6hofaxm")

  return dao.saveCollection(collection)
})
