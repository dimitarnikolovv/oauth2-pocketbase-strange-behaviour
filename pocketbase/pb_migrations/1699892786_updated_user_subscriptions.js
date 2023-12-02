/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lcii4972suzs1hk")

  collection.viewRule = ""

  // remove
  collection.schema.removeField("dsvl9gab")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ohtslamt",
    "name": "subscriptions",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lcii4972suzs1hk")

  collection.viewRule = null

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dsvl9gab",
    "name": "subscriptions",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("ohtslamt")

  return dao.saveCollection(collection)
})
