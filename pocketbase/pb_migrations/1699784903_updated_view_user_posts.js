/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zfe8375o8l06hay")

  collection.options = {
    "query": "SELECT \n  u.id as id, \n  p.id as userPosts\nFROM \n  users u, posts p\nJOIN\n  posts ON u.id = p.author"
  }

  // remove
  collection.schema.removeField("lalmoudi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jdccduzr",
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
    "query": "SELECT \n  u.id as id, \n  p.id as userPosts\nFROM \n  users u\nJOIN \n  posts p ON u.id = p.id;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lalmoudi",
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
  collection.schema.removeField("jdccduzr")

  return dao.saveCollection(collection)
})
