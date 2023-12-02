/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf2s3nnwn2yw3et")

  collection.name = "user_used_cars"

  // remove
  collection.schema.removeField("o1tpx368")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf2s3nnwn2yw3et")

  collection.name = "used_cars"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o1tpx368",
    "name": "usedCars",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("sxjllv2j")

  return dao.saveCollection(collection)
})
