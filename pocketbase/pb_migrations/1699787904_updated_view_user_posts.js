/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zfe8375o8l06hay")

  collection.options = {
    "query": "SELECT \n  u.id AS id\nFROM \n  users u, posts p\nLEFT JOIN JSON_EACH(p.author) AS ids\nLEFT JOIN users ON u.id = ids.value\nGROUP BY u.id"
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zfe8375o8l06hay")

  collection.options = {
    "query": "SELECT \n  u.id as id\nFROM \n  users u, posts p\nLEFT JOIN JSON_EACH(p.author) as ids\nLEFT JOIN posts on u.id = ids.value\nGROUP BY u.id"
  }

  return dao.saveCollection(collection)
})
