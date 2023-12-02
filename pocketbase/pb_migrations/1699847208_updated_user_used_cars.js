/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf2s3nnwn2yw3et")

  collection.options = {
    "query": "SELECT\n  c.owner as id\nFROM\n  cars c, posts p\nWHERE\np.car = c.id"
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf2s3nnwn2yw3et")

  collection.options = {
    "query": "SELECT\n  c.owner as id\nFROM\n  cars c, posts p\nWHERE\np.author = c.owner"
  }

  return dao.saveCollection(collection)
})
