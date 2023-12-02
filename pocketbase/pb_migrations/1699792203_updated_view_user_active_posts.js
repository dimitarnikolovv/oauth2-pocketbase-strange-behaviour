/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zfe8375o8l06hay")

  collection.listRule = "@request.auth.id = id"
  collection.viewRule = "@request.auth.id = id"

  // remove
  collection.schema.removeField("dfdnvdfq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zvxsgzxv",
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

  collection.listRule = null
  collection.viewRule = null

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

  // remove
  collection.schema.removeField("zvxsgzxv")

  return dao.saveCollection(collection)
})
