/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k8oe3hlpvmqbb7v")

  collection.createRule = "@request.auth.id != '' &&\n@request.auth.id = @request.data.author && @request.data.expired:isset = false && \n@request.data.finished:isset = false && @request.data.setDriver:isset = false && @request.data.setPassengers:isset = false"
  collection.updateRule = "@request.auth.id = author && \n@request.data.expired:isset = false &&\n@request.data.finished:isset = false && @request.data.setDriver:isset = false && @request.data.setPassengers:isset = false"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qk5yu9bh",
    "name": "setDriver",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8gli8bji",
    "name": "setPassengers",
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

  collection.createRule = "@request.auth.id != '' && @request.auth.id = @request.data.author && @request.data.expired:isset = false && @request.data.finished:isset = false"
  collection.updateRule = "@request.auth.id = author && @request.data.expired:isset = false"

  // remove
  collection.schema.removeField("qk5yu9bh")

  // remove
  collection.schema.removeField("8gli8bji")

  return dao.saveCollection(collection)
})
