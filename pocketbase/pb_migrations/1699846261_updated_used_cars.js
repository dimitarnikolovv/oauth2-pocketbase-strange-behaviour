/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf2s3nnwn2yw3et")

  collection.options = {
    "query": "SELECT\n  p.author as id,\n  GROUP_CONCAT(c.id) AS usedCars\nFROM\n  cars c, posts p\nWHERE\n  p.car = c.id\nGROUP BY p.author"
  }

  // remove
  collection.schema.removeField("6zrpjp79")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wfyrvhxj",
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
    "id": "6zrpjp79",
    "name": "usedCars",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("wfyrvhxj")

  return dao.saveCollection(collection)
})
