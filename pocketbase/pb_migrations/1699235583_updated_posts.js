/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k8oe3hlpvmqbb7v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kuk5viso",
    "name": "car",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "7fyrdhygdape9m0",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k8oe3hlpvmqbb7v")

  // remove
  collection.schema.removeField("kuk5viso")

  return dao.saveCollection(collection)
})
