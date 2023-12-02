/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kuenx8n2b66qhm5")

  collection.listRule = "@request.auth.id = post.author || (@request.auth.id ?= @collection.applications.applicant && @collection.applications.post = post)"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kuenx8n2b66qhm5")

  collection.listRule = "@request.auth.id = post.author"

  return dao.saveCollection(collection)
})
