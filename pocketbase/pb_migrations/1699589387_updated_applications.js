/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nn8gm39lz35jil2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kbzslpfu",
    "name": "declined",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nn8gm39lz35jil2")

  // remove
  collection.schema.removeField("kbzslpfu")

  return dao.saveCollection(collection)
})
