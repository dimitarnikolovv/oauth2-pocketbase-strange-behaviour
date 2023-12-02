/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7fyrdhygdape9m0")

  // remove
  collection.schema.removeField("ip7hcjod")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dysrx3ge",
    "name": "isInUse",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7fyrdhygdape9m0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ip7hcjod",
    "name": "isInUse",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("dysrx3ge")

  return dao.saveCollection(collection)
})
