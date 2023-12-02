/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k8oe3hlpvmqbb7v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nbt9vpat",
    "name": "finished",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k8oe3hlpvmqbb7v")

  // remove
  collection.schema.removeField("nbt9vpat")

  return dao.saveCollection(collection)
})
