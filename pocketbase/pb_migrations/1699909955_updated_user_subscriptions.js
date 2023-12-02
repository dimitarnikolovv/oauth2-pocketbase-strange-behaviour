/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lcii4972suzs1hk")

  collection.listRule = null

  // remove
  collection.schema.removeField("jfliwa5r")

  // remove
  collection.schema.removeField("m5twdguw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tdz1xo4l",
    "name": "subscriptions",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6ls8squv",
    "name": "subId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "cgtxtos489pqx6s",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lcii4972suzs1hk")

  collection.listRule = ""

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jfliwa5r",
    "name": "subscriptions",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m5twdguw",
    "name": "subId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "cgtxtos489pqx6s",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("tdz1xo4l")

  // remove
  collection.schema.removeField("6ls8squv")

  return dao.saveCollection(collection)
})
