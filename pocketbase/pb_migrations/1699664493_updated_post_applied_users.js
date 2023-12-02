/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ula9fg3z9sihawr")

  collection.options = {
    "query": "SELECT\n    p.id AS id,\n    u.id AS uid\nFROM\n    posts p\nJOIN\n    applications a ON p.id = a.post\nJOIN\n    users u ON a.applicant = u.id;"
  }

  // remove
  collection.schema.removeField("wztefgum")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k0p6tv4e",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ula9fg3z9sihawr")

  collection.options = {
    "query": "SELECT\n  p.id AS id,\n  a.applicant AS aplicants\nFROM \n  posts p, applications a\nWHERE \n  a.post = p.id\nGROUP BY p.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wztefgum",
    "name": "aplicants",
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
  collection.schema.removeField("k0p6tv4e")

  return dao.saveCollection(collection)
})
