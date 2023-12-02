/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nsk0enxbx3gh78p")

  collection.createRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nsk0enxbx3gh78p")

  collection.createRule = "@request.auth.id != \"\" && @request.auth.id = @request.data.author"

  return dao.saveCollection(collection)
})
