/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k8oe3hlpvmqbb7v")

  // remove
  collection.schema.removeField("uzycce7g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cu22tlz5",
    "name": "applications",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "nn8gm39lz35jil2",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k8oe3hlpvmqbb7v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uzycce7g",
    "name": "verifiedPassengers",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("cu22tlz5")

  return dao.saveCollection(collection)
})
