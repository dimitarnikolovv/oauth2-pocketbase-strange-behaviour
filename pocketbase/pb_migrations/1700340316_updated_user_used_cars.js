/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf2s3nnwn2yw3et")

  collection.options = {
    "query": "SELECT\n  c.owner as id,\n  JSON_GROUP_ARRAY(DISTINCT c.id) as usedCars\nFROM\n  cars c, posts p\nWHERE\n  p.car = c.id\nGROUP BY c.owner"
  }

  // remove
  collection.schema.removeField("lbghtnw2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "quawlrsg",
    "name": "usedCars",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf2s3nnwn2yw3et")

  collection.options = {
    "query": "SELECT\n  c.owner as id,\n  JSON_GROUP_ARRAY(c.id) as usedCars\nFROM\n  cars c, posts p\nWHERE\n  p.car = c.id\nGROUP BY c.owner"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lbghtnw2",
    "name": "usedCars",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("quawlrsg")

  return dao.saveCollection(collection)
})
