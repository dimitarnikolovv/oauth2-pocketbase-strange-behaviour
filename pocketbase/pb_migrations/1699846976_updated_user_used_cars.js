/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf2s3nnwn2yw3et")

  collection.options = {
    "query": "SELECT\n  c.owner as id\nFROM\n  cars c\nleft join json_each(c.id) as je\nleft join posts on posts.car = je.value\nGROUP BY c.id"
  }

  // remove
  collection.schema.removeField("avf96weh")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf2s3nnwn2yw3et")

  collection.options = {
    "query": "SELECT\n  c.owner as id,\n  JSON_GROUP_ARRAY(c.id) AS usedCars\nFROM\n  cars c, posts\nJOIN posts p ON posts.car = c.id\nGROUP BY c.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "avf96weh",
    "name": "usedCars",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
