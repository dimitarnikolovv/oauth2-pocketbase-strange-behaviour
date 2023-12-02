/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nn8gm39lz35jil2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pmfwt9xo",
    "name": "post",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "k8oe3hlpvmqbb7v",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nn8gm39lz35jil2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pmfwt9xo",
    "name": "post",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "k8oe3hlpvmqbb7v",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
