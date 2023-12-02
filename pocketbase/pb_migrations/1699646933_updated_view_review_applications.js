/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mdrdoh14975vhbc")

  collection.options = {
    "query": "SELECT\n  p.author as id\n\nFROM \n  applications ap,\n  posts p\nWHERE p.id = ap.post\nGROUP BY \n  p.author\n"
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mdrdoh14975vhbc")

  collection.options = {
    "query": "SELECT\n  p.author as id\n\nFROM \n  applications ap,\n  posts p\nWHERE p.id = ap.post\n"
  }

  return dao.saveCollection(collection)
})
