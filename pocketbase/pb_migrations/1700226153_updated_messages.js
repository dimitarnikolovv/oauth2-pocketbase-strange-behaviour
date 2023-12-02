/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kuenx8n2b66qhm5")

  collection.listRule = "author = post.author.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kuenx8n2b66qhm5")

  collection.listRule = "@collection.post_applied_users.id ?= post.id"

  return dao.saveCollection(collection)
})
