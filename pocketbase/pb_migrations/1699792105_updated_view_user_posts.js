/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zfe8375o8l06hay")

  collection.name = "view_user_active_posts"
  collection.options = {
    "query": "SELECT \n  u.id AS id,\n  JSON_GROUP_ARRAY(p.id) as userPosts\nFROM \n  users u, posts p\nWHERE\n  p.author = u.id AND p.expired = FALSE\nGROUP BY u.id"
  }

  // remove
  collection.schema.removeField("pwtc9trb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dfdnvdfq",
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

  collection.name = "view_user_posts"
  collection.options = {
    "query": "SELECT \n  u.id AS id,\n  JSON_GROUP_ARRAY(p.id) as userPosts\nFROM \n  users u, posts p\nWHERE\n  p.author = u.id\nGROUP BY u.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pwtc9trb",
    "name": "userPosts",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("dfdnvdfq")

  return dao.saveCollection(collection)
})
