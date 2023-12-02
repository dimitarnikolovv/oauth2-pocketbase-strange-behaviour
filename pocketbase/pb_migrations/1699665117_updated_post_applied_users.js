/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ula9fg3z9sihawr")

  collection.options = {
    "query": "SELECT\n    p.id AS id,\n    u.id AS applicants\nFROM\n    posts p\nLEFT JOIN\n    applications a ON p.id = a.post\nLEFT JOIN\n    users u ON a.applicant = u.id\nGROUP BY p.id"
  }

  // remove
  collection.schema.removeField("p2exdbk9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rjzikna5",
    "name": "applicants",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ula9fg3z9sihawr")

  collection.options = {
    "query": "SELECT\n    p.id AS id,\nJSON_ARRAY(JSON_OBJECT('user_id', u.id)) AS applied_users\nFROM\n    posts p\nLEFT JOIN\n    applications a ON p.id = a.post\nLEFT JOIN\n    users u ON a.applicant = u.id\nGROUP BY p.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p2exdbk9",
    "name": "applied_users",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("rjzikna5")

  return dao.saveCollection(collection)
})
