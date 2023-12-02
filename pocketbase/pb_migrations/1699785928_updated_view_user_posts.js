/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zfe8375o8l06hay")

  collection.options = {
    "query": "SELECT \n  u.id as id, \n  p.id as userPosts\nFROM \n  users u, posts p\nINNER JOIN posts ON p.author = u.id\nGROUP BY u.id"
  }

  // remove
  collection.schema.removeField("mrbsb9xj")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zfe8375o8l06hay")

  collection.options = {
    "query": "SELECT \n  u.id as id, \n  GROUP_CONCAT(p.id) as userPosts\nFROM \n  users u, posts p\nINNER JOIN posts ON p.author = u.id\nGROUP BY u.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mrbsb9xj",
    "name": "userPosts",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("1atyh8lu")

  return dao.saveCollection(collection)
})
