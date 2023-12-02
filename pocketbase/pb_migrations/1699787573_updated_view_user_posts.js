/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zfe8375o8l06hay")

  collection.options = {
    "query": "SELECT \n  u.id as id\nFROM \n  users u, posts p\nleft join json_each(p.id) as pIDs\nleft join posts on u.id = pIDs.value\nGROUP BY u.id"
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zfe8375o8l06hay")

  collection.options = {
    "query": "SELECT \n  u.id as id\nFROM \n  users u, posts p\nleft join json_each(p.id) as pIDs\nleft join users on u.id = pIDs.value\nGROUP BY u.id"
  }

  return dao.saveCollection(collection)
})
