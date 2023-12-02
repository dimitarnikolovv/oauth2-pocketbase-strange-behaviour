/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2uthc8xwvg4b12l")

  collection.options = {
    "query": "SELECT\n  u.id,\n  JSON_GROUP_ARRAY(\n    JSON_OBJECT(\n      'chat_id', c.id,\n      'departFrom', p.departFrom,\n      'arriveAt', p.arriveAt,\n      'stops', p.additionalStops\n    )\n  ) AS chats\nFROM\n  users u, chats c, posts p\nWHERE\n  p.id = c.post\nGROUP BY u.id;"
  }

  // remove
  collection.schema.removeField("loxcryst")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tx24zl1q",
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
    "query": "SELECT\n  u.id,\n  JSON_GROUP_ARRAY(\n    JSON_OBJECT(\n      'chat_id', c.id,\n      'departFrom', p.departFrom,\n      'arriveAt', p.arriveAt,\n      'stops', p.additionalStops\n    )\n  ) AS chats\nFROM\n  users u\nJOIN\n  chats c ON u.id IN(SELECT c.participants)\nJOIN\n  posts p ON c.post = p.id\nGROUP BY u.id;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "loxcryst",
    "name": "chats",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("tx24zl1q")

  return dao.saveCollection(collection)
})
