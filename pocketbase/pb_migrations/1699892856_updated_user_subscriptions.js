/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lcii4972suzs1hk")

  collection.options = {
    "query": "SELECT\n  ns.user AS id,\n  ns.subscriptions AS subscriptions,\n  ns.id as subId\nFROM\n  notification_subscriptions ns\nGROUP BY ns.user"
  }

  // remove
  collection.schema.removeField("ohtslamt")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lcii4972suzs1hk")

  collection.options = {
    "query": "SELECT\n  ns.user AS id,\n  ns.subscriptions AS subscriptions\nFROM\n  notification_subscriptions ns\nGROUP BY ns.user"
  }

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

  // remove
  collection.schema.removeField("3lpwp7wc")

  // remove
  collection.schema.removeField("bdb4gcng")

  return dao.saveCollection(collection)
})
