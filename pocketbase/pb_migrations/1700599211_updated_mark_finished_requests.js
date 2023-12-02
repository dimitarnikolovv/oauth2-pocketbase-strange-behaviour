/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p3oubmehfiu1ibb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5wk7fwat",
    "name": "votedUsers",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p3oubmehfiu1ibb")

  // remove
  collection.schema.removeField("5wk7fwat")

  return dao.saveCollection(collection)
})
