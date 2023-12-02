/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ek77xgyi4fj56by")

  collection.listRule = "@request.auth.id = user"
  collection.viewRule = "@request.auth.id = user"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ek77xgyi4fj56by")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
})
