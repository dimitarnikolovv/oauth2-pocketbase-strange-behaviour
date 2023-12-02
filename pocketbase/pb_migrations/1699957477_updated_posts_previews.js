/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ysdfwkh99m3i635")

  // remove
  collection.schema.removeField("xru4pz0k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lfwjxoup",
    "name": "authur",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ysdfwkh99m3i635")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xru4pz0k",
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

  // remove
  collection.schema.removeField("lfwjxoup")

  return dao.saveCollection(collection)
})
