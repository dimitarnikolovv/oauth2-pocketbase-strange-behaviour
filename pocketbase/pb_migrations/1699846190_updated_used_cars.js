/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf2s3nnwn2yw3et")

  collection.options = {
    "query": "SELECT\n  p.author as id,\n  JSON_GROUP_ARRAY(c.id) AS usedCars\nFROM\n  cars c, posts p, users u\nLEFT jOIN cars ON c.id = p.car AND c.owner = u.id\nGROUP BY p.author"
  }

  // remove
  collection.schema.removeField("dwq2ftls")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6v8qxo16",
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
    "query": "SELECT\n  p.author as id,\n  JSON_GROUP_ARRAY(c.id) AS usedCars\nFROM\n  cars c, posts p, users u\nLEFT jOIN users ON c.id = p.car AND c.owner = u.id\nGROUP BY p.author"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dwq2ftls",
    "name": "usedCars",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("6v8qxo16")

  return dao.saveCollection(collection)
})
