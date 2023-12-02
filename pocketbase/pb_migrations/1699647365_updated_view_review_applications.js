/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mdrdoh14975vhbc")

  collection.viewRule = "@request.auth.id = id"

  // remove
  collection.schema.removeField("h3o9fabm")

  // remove
  collection.schema.removeField("sd1wa2hr")

  // remove
  collection.schema.removeField("cenfqyva")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5on08pib",
    "name": "totalToVerify",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "etqa1lkb",
    "name": "totalToDecline",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ogdtbrub",
    "name": "totalApplications",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mdrdoh14975vhbc")

  collection.viewRule = null

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h3o9fabm",
    "name": "totalToVerify",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sd1wa2hr",
    "name": "totalToDecline",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cenfqyva",
    "name": "totalApplications",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("5on08pib")

  // remove
  collection.schema.removeField("etqa1lkb")

  // remove
  collection.schema.removeField("ogdtbrub")

  return dao.saveCollection(collection)
})
