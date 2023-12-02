/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nn8gm39lz35jil2")

  collection.deleteRule = "@request.auth.id = applicant.id && verified=false"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nn8gm39lz35jil2")

  collection.deleteRule = "@request.auth.id = applicant.id"

  return dao.saveCollection(collection)
})
