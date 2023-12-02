/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k8oe3hlpvmqbb7v")

  collection.createRule = "@request.auth.id != '' && @request.auth.id = @request.data.author && @request.data.expired:isset = false && @request.data.finished:isset = false"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k8oe3hlpvmqbb7v")

  collection.createRule = "@request.auth.id != '' && @request.auth.id = @request.data.author && @request.data.expired:isset = false && @request.data.finished = false"

  return dao.saveCollection(collection)
})
