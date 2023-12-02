/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2uthc8xwvg4b12l")

  collection.options = {
    "query": "SELECT\n  u.id,\n  JSON_GROUP_ARRAY(\n    JSON_OBJECT(\n      'chatId', c.id,\n      'departFrom', p.departFrom,\n      'arriveAt', p.arriveAt,\n      'stops', p.additionalStops\n    )\n  ) AS chats\nFROM\n  users u, chats c, posts p\nWHERE\n  p.id = c.post AND u.id IN (c.participants)\nGROUP BY u.id;"
  }

  // remove
  collection.schema.removeField("i1ibqlxs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v4p7pbfk",
    "name": "chats",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2uthc8xwvg4b12l")

  collection.options = {
    "query": "SELECT\n  u.id,\n  JSON_GROUP_ARRAY(\n    JSON_OBJECT(\n      'chatId', c.id,\n      'departFrom', p.departFrom,\n      'arriveAt', p.arriveAt,\n      'stops', p.additionalStops\n    )\n  ) AS chats\nFROM\n  users u, chats c, posts p\nWHERE\n  p.id = c.post\nGROUP BY u.id;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i1ibqlxs",
    "name": "chats",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("v4p7pbfk")

  return dao.saveCollection(collection)
})
