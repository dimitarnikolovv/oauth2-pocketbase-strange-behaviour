/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r3zta191fbr6r8a")

  collection.viewRule = "@request.auth.id = id"

  // remove
  collection.schema.removeField("k3rj9sho")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "medffceq",
    "name": "totalApplications",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r3zta191fbr6r8a")

  collection.viewRule = null

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k3rj9sho",
    "name": "totalApplications",
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
  collection.schema.removeField("medffceq")

  return dao.saveCollection(collection)
})
