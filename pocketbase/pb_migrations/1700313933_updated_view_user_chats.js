/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2uthc8xwvg4b12l")

  collection.listRule = "@request.auth.id = id"
  collection.viewRule = "@request.auth.id = id"

  // remove
  collection.schema.removeField("xmhyqagx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tur83eqy",
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

  collection.listRule = ""
  collection.viewRule = ""

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xmhyqagx",
    "name": "postId",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("tur83eqy")

  return dao.saveCollection(collection)
})
