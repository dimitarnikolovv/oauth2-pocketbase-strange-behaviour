/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vrrng44rrh84uo9")

  collection.listRule = "@request.auth.id ?= participants"
  collection.viewRule = "@request.auth.id ?= participants"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vrrng44rrh84uo9")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
})
