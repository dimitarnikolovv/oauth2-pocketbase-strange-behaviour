/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kuenx8n2b66qhm5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cx4qh16t",
    "name": "chat",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "vrrng44rrh84uo9",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kuenx8n2b66qhm5")

  // remove
  collection.schema.removeField("cx4qh16t")

  return dao.saveCollection(collection)
})
