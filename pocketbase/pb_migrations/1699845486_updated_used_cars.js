/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf2s3nnwn2yw3et")

  collection.options = {
    "query": "SELECT\n  c.id\nFROM\n  cars c, posts p\nWHERE\n  c.id = p.car"
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf2s3nnwn2yw3et")

  collection.options = {
    "query": "SELECT\n  c.id\nFROM\n  cars c, posts p\nWHERE\n  c.id = p.id"
  }

  return dao.saveCollection(collection)
})
