/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf2s3nnwn2yw3et")

  collection.options = {
    "query": "SELECT\n  c.owner as id,\n  JSON_GROUP_ARRAY(c.id) AS usedCars\nFROM\n  cars c\nJOIN cars, posts ON posts.car = cars.id\nGROUP BY c.id"
  }

  // remove
  collection.schema.removeField("sxjllv2j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "for8tb8t",
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
    "query": "SELECT\n  c.owner as id,\n  JSON_GROUP_ARRAY(c.id) AS usedCars\nFROM\n  cars c\nJOIN posts ON posts.car = c.id\nGROUP BY c.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sxjllv2j",
    "name": "usedCars",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("for8tb8t")

  return dao.saveCollection(collection)
})
