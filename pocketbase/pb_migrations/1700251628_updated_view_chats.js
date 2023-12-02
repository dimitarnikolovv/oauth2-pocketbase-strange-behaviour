/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0jv42lgp8ghm7yt")

  collection.listRule = ""
  collection.viewRule = ""

  // remove
  collection.schema.removeField("rqrkwlyp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h13hlufy",
    "name": "participants",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0jv42lgp8ghm7yt")

  collection.listRule = null
  collection.viewRule = null

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rqrkwlyp",
    "name": "participants",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("h13hlufy")

  return dao.saveCollection(collection)
})
