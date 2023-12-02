/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf2s3nnwn2yw3et")

  collection.listRule = "@request.auth.id = id"
  collection.viewRule = "@request.auth.id = id"

  // remove
  collection.schema.removeField("yisl0owa")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf2s3nnwn2yw3et")

  collection.listRule = ""
  collection.viewRule = ""

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yisl0owa",
    "name": "usedCars",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("lbghtnw2")

  return dao.saveCollection(collection)
})
