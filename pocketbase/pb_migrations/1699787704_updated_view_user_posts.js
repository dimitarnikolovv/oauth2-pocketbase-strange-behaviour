/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zfe8375o8l06hay")

  collection.options = {
    "query": "SELECT \n  u.id as id\nFROM \n  users u, posts p\nLEFT JOIN JSON_EACH(p.id) as ids\nLEFT JOIN posts on p.id = ids.value\nGROUP BY u.id"
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zfe8375o8l06hay")

  collection.options = {
    "query": "SELECT \n  u.id as id\nFROM \n  users u, posts p\nLEFT JOIN json_each(p.id) as ids\nJOIN posts on p.id = ids.value\nGROUP BY u.id"
  }

  return dao.saveCollection(collection)
})
