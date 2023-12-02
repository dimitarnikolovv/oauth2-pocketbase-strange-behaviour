/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o4a8bhy7xu4xe02")

  collection.options = {
    "query": "SELECT\n  p.id,\n  COALESCE(p.preview, '') AS preview\nFROM\n  posts p\nGROUP BY p.id"
  }

  // remove
  collection.schema.removeField("nqq5yqu5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ecs7t26s",
    "name": "preview",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o4a8bhy7xu4xe02")

  collection.options = {
    "query": "SELECT\n  p.id,\n  p.preview\nFROM\n  posts p\nGROUP BY p.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nqq5yqu5",
    "name": "preview",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("ecs7t26s")

  return dao.saveCollection(collection)
})
