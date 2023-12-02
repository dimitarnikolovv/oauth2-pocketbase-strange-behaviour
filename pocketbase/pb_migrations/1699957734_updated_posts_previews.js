/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ysdfwkh99m3i635")

  collection.createRule = "@request.auth.id = author"
  collection.updateRule = "@request.auth.id = author"
  collection.deleteRule = "@request.auth.id = author"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lfwjxoup",
    "name": "author",
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

  collection.createRule = "@request.auth.id = authur"
  collection.updateRule = "@request.auth.id = authur"
  collection.deleteRule = "@request.auth.id = authur"

  // update
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
})
