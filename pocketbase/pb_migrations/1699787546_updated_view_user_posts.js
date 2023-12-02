/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zfe8375o8l06hay")

  collection.options = {
    "query": "SELECT \n  u.id as id\nFROM \n  users u, posts p\nleft join json_each(p.id) as pIDs\nleft join users on u.id = pIDs.value\nGROUP BY u.id"
  }

  // remove
  collection.schema.removeField("hfbgkglw")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zfe8375o8l06hay")

  collection.options = {
    "query": "SELECT \n  u.id as id, \n  JSON_GROUP_ARRAY(p.id) as userPosts\nFROM \n  users u, posts p\nWHERE\n  p.author = u.id\nGROUP BY u.id"
  }

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
})
