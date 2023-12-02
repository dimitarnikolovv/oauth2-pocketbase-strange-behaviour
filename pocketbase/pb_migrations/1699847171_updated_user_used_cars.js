/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf2s3nnwn2yw3et")

  collection.options = {
    "query": "SELECT\n  c.owner as id\nFROM\n  cars c\nleft join json_each(c.id) as je\nleft join posts on posts.car = je.value\nWHERE\nposts.author = c.owner"
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf2s3nnwn2yw3et")

  collection.options = {
    "query": "SELECT\n  c.owner as id\nFROM\n  cars c\nleft join json_each(c.id) as je\nleft join posts on posts.car = je.value"
  }

  return dao.saveCollection(collection)
})
