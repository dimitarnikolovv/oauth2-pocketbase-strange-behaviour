/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2uthc8xwvg4b12l")

  collection.options = {
    "query": "SELECT\n  u.id,\n  JSON_GROUP_ARRAY(DISTINCT JSON_OBJECT('id', p.id, 'departFrom', p.departFrom, 'arriveAt', p.arriveAt, 'stops', p.additionalStops)) AS posts\nFROM\n  posts p, users u, applications a\nWHERE\n  (p.author = u.id OR (u.id = a.applicant AND a.post = p.id AND a.verified = TRUE)) AND p.expired = FALSE\nGROUP BY u.id"
  }

  // remove
  collection.schema.removeField("ekwg4hqs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aeneem77",
    "name": "posts",
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
    "query": "SELECT\n  u.id,\n  JSON_GROUP_ARRAY(DISTINCT JSON_OBJECT('id', p.id, 'departFrom', p.departFrom, 'arriveAt', p.arriveAt)) AS posts\nFROM\n  posts p, users u, applications a\nWHERE\n  (p.author = u.id OR (u.id = a.applicant AND a.post = p.id AND a.verified = TRUE)) AND p.expired = FALSE\nGROUP BY u.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ekwg4hqs",
    "name": "posts",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("aeneem77")

  return dao.saveCollection(collection)
})
