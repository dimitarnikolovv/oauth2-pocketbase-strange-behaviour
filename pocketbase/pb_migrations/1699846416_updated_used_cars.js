/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf2s3nnwn2yw3et")

  collection.options = {
    "query": "SELECT\n  c.owner as id,\n  JSON_GROUP_ARRAY(c.id) AS usedCars\nFROM\n  cars c, posts p\nWHERE\n  p.car = c.id\nGROUP BY p.id"
  }

  // remove
  collection.schema.removeField("5s65ttng")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "imj50p1i",
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
    "query": "SELECT\n  p.author as id,\n  JSON_GROUP_ARRAY(c.id) AS usedCars\nFROM\n  cars c, posts p\nWHERE\n  p.car = c.id\nGROUP BY p.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5s65ttng",
    "name": "usedCars",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("imj50p1i")

  return dao.saveCollection(collection)
})
