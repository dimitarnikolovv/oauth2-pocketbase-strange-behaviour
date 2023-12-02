/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nn8gm39lz35jil2")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nn8gm39lz35jil2")

  collection.viewRule = "@request.auth.id = applicant.id"

  return dao.saveCollection(collection)
})
