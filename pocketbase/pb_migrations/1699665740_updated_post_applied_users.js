/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ula9fg3z9sihawr")

  collection.options = {
    "query": "SELECT\n    p.id AS id,\n   GROUP_CONCAT(u.id) AS applicants\nFROM\n    posts p\nLEFT JOIN\n    applications a ON p.id = a.post\nLEFT JOIN\n    users u ON a.applicant = u.id\nGROUP BY p.id"
  }

  // remove
  collection.schema.removeField("xfy4zsy9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "13mkytpi",
    "name": "applicants",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ula9fg3z9sihawr")

  collection.options = {
    "query": "SELECT\n    p.id AS id,\n   JSON_ARRAY_LENGTH(u.id) AS applicants\nFROM\n    posts p\nLEFT JOIN\n    applications a ON p.id = a.post\nLEFT JOIN\n    users u ON a.applicant = u.id\nGROUP BY p.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xfy4zsy9",
    "name": "applicants",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("13mkytpi")

  return dao.saveCollection(collection)
})
