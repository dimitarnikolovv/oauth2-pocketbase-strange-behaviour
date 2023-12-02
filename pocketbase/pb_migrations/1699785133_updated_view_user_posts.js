/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zfe8375o8l06hay")

  collection.options = {
    "query": "SELECT \n  u.id as id, \n  GROUP_CONCAT(p.id) as userPosts\nFROM \n  users u, posts p\nJOIN\n  posts ON u.id = p.author\nWHERE\n  u.id = p.author\nGROUP BY u.id"
  }

  // remove
  collection.schema.removeField("8hnjffrv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jgfsgcux",
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
    "query": "SELECT \n  u.id as id, \n  GROUP_CONCAT(p.id) as userPosts\nFROM \n  users u, posts p\nJOIN\n  posts ON u.id = p.author\nGROUP BY u.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8hnjffrv",
    "name": "userPosts",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("jgfsgcux")

  return dao.saveCollection(collection)
})
