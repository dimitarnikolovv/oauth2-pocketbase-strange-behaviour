/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf2s3nnwn2yw3et")

  collection.options = {
    "query": "SELECT\n  c.owner as id,\n  JSON_GROUP_ARRAY(c.id) as usedCars\nFROM\n  cars c, posts p\nWHERE\n  p.car = c.id\nGROUP BY c.owner"
  }

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf2s3nnwn2yw3et")

  collection.options = {
    "query": "SELECT\n  c.owner as id\nFROM\n  cars c, posts p\nWHERE\np.car = c.id\nGROUP BY c.owner"
  }

  // remove
  collection.schema.removeField("yisl0owa")

  return dao.saveCollection(collection)
})
