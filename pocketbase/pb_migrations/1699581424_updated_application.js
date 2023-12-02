/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nn8gm39lz35jil2")

  collection.name = "applications"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nn8gm39lz35jil2")

  collection.name = "application"

  return dao.saveCollection(collection)
})
