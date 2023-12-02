/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0jv42lgp8ghm7yt")

  collection.listRule = "(@request.auth.id ?= @collection.posts.author && @collection.posts.id ?= id && @collection.posts.expired ?= false) || \n(@request.auth.id ?= @collection.applications.applicant && @collection.applications.verified ?= true && @collection.applications.post ?= id && @collection.applications.post.expired ?= false)"
  collection.viewRule = "(@request.auth.id ?= @collection.posts.author && @collection.posts.id ?= id && @collection.posts.expired ?= false) || \n(@request.auth.id ?= @collection.applications.applicant && @collection.applications.verified ?= true && @collection.applications.post ?= id && @collection.applications.post.expired ?= false)"

  // remove
  collection.schema.removeField("enremr0l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bhgc711s",
    "name": "participants",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0jv42lgp8ghm7yt")

  collection.listRule = ""
  collection.viewRule = ""

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "enremr0l",
    "name": "participants",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("bhgc711s")

  return dao.saveCollection(collection)
})
