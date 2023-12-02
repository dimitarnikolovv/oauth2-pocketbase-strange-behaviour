/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zfe8375o8l06hay")

  collection.options = {
    "query": "SELECT \n  u.id as id, \n  JSON_GROUP_ARRAY(p.id) as userPosts\nFROM \n  users u, posts p\nWHERE\n  p.author = u.id\nGROUP BY u.id"
  }

  // remove
  collection.schema.removeField("1atyh8lu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hfbgkglw",
    "name": "userPosts",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zfe8375o8l06hay")

  collection.options = {
    "query": "SELECT \n  u.id as id, \n  p.id as userPosts\nFROM \n  users u, posts p\nINNER JOIN posts ON p.author = u.id\nGROUP BY u.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1atyh8lu",
    "name": "userPosts",
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
  collection.schema.removeField("hfbgkglw")

  return dao.saveCollection(collection)
})
