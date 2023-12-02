/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf2s3nnwn2yw3et")

  collection.options = {
    "query": "SELECT\n  p.author as id,\n  JSON_GROUP_ARRAY(c.id) AS usedCars\nFROM\n  cars c, posts p\nWHERE\n  p.car = c.id\n"
  }

  // remove
  collection.schema.removeField("x7fw7kmo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0jdqpycz",
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
    "query": "SELECT\n  p.author as id,\n  JSON_GROUP_ARRAY(c.id) AS usedCars\nFROM\n  cars c, posts p\nWHERE\n  p.car = c.id\nGROUP BY p.author"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x7fw7kmo",
    "name": "usedCars",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("0jdqpycz")

  return dao.saveCollection(collection)
})
