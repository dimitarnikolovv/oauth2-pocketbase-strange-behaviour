/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nn8gm39lz35jil2")

  collection.updateRule = "@request.data.user.id = post.author && verified=false"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nn8gm39lz35jil2")

  collection.updateRule = "@request.data.user.id = post.author"

  return dao.saveCollection(collection)
})
