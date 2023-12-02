/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ula9fg3z9sihawr")

  collection.options = {
    "query": "SELECT\n  p.id AS id,\n  a.applicant AS aplicants\nFROM \n  posts p, applications a\nWHERE \n  a.post = p.id\nGROUP BY p.id"
  }

  // remove
  collection.schema.removeField("oqb69cs0")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ula9fg3z9sihawr")

  collection.options = {
    "query": "SELECT\n  p.id AS id,\n  a.applicant AS aplicant\nFROM \n  posts p, applications a\nWHERE \n  a.post = p.id\nGROUP BY p.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oqb69cs0",
    "name": "aplicant",
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
  collection.schema.removeField("wztefgum")

  return dao.saveCollection(collection)
})
