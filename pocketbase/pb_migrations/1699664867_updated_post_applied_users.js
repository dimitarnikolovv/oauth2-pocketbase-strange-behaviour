/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ula9fg3z9sihawr")

  collection.options = {
    "query": "SELECT\n    p.id AS id,\n    GROUP_CONCAT(u.id) AS applications\nFROM\n    posts p\nLEFT JOIN\n    applications a ON p.id = a.post\nLEFT JOIN\n    users u ON a.applicant = u.id\nGROUP BY p.id"
  }

  // remove
  collection.schema.removeField("q89mgqmn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s7b3ckhl",
    "name": "applications",
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
    "query": "SELECT\n    p.id AS id,\n    u.id AS uid\nFROM\n    posts p\nJOIN\n    applications a ON p.id = a.post\nJOIN\n    users u ON a.applicant = u.id\nGROUP BY p.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q89mgqmn",
    "name": "uid",
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

  // remove
  collection.schema.removeField("s7b3ckhl")

  return dao.saveCollection(collection)
})
