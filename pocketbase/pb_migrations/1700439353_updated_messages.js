/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kuenx8n2b66qhm5")

  collection.listRule = "@request.auth.id = chat.post.author ||chat.participants~@request.auth.id "
  collection.viewRule = "@request.auth.id = chat.post.author ||  chat.participants~@request.auth.id  "

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kuenx8n2b66qhm5")

  collection.listRule = "@request.auth.id = chat.post.author || @request.auth.id ~ chat.participants"
  collection.viewRule = "@request.auth.id = chat.post.author ||  @request.auth.id ~ chat.participants"

  return dao.saveCollection(collection)
})
