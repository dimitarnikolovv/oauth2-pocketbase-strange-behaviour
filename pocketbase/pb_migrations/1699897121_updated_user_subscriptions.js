/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lcii4972suzs1hk")

  collection.listRule = ""

  // remove
  collection.schema.removeField("3lpwp7wc")

  // remove
  collection.schema.removeField("bdb4gcng")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lcii4972suzs1hk")

  collection.listRule = null

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3lpwp7wc",
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
    "id": "bdb4gcng",
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
  collection.schema.removeField("jfliwa5r")

  // remove
  collection.schema.removeField("m5twdguw")

  return dao.saveCollection(collection)
})
