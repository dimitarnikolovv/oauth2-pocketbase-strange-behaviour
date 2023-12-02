/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ysdfwkh99m3i635")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = "@request.auth.id = authur"
  collection.updateRule = "@request.auth.id = authur"
  collection.deleteRule = "@request.auth.id = authur"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ysdfwkh99m3i635")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
