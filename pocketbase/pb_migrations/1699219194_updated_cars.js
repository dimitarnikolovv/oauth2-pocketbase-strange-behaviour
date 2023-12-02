/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7fyrdhygdape9m0")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gajrztky",
    "name": "image",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/webp",
        "image/gif"
      ],
      "thumbs": [
        "40x40",
        "128x128",
        "80x80"
      ],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7fyrdhygdape9m0")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gajrztky",
    "name": "image",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/webp",
        "image/gif"
      ],
      "thumbs": [
        "40x40",
        "128x128"
      ],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
