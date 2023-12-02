/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jvhtsmtup62kqvb")

  collection.options = {
    "query": "SELECT\n    r.id,                             \n    ru.username AS rater_username,\n    ru.firstName AS rater_firstName,\n    ru.lastName as rater_lastName,\n    ru.id AS rater_id,\n    r.target,                       \n    AVG(r.rating) AS averageRating,\n    COUNT(*) AS totalRatings\nFROM\n    ratings r\nJOIN\n    users ru ON r.author = ru.id\nGROUP BY r.target"
  }

  // remove
  collection.schema.removeField("ced86avr")

  // remove
  collection.schema.removeField("dwj72l4o")

  // remove
  collection.schema.removeField("iinmfola")

  // remove
  collection.schema.removeField("pztcrdkx")

  // remove
  collection.schema.removeField("dhim4dqy")

  // remove
  collection.schema.removeField("aqip2lbw")

  // remove
  collection.schema.removeField("hrsjayac")

  // remove
  collection.schema.removeField("eh2vqakl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "avpv97zd",
    "name": "rater_username",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hgkocamt",
    "name": "rater_firstName",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6o3zli2a",
    "name": "rater_lastName",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7zcblfp7",
    "name": "rater_id",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q6edpju7",
    "name": "target",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rvgndj9z",
    "name": "averageRating",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xwfpte6n",
    "name": "totalRatings",
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
  const collection = dao.findCollectionByNameOrId("jvhtsmtup62kqvb")

  collection.options = {
    "query": "SELECT\n    r.id,                             \n    ru.username AS rater_username,\n    ru.firstName AS rater_firstName,\n    ru.lastName as rater_lastName,\n    ru.id AS rater_id,\n    r.rating AS user_rating,\n    r.target,                       \n    AVG(r.rating) AS averageRating,\n    COUNT(*) AS totalRatings\nFROM\n    ratings r\nJOIN\n    users ru ON r.author = ru.id\nGROUP BY r.target"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ced86avr",
    "name": "rater_username",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dwj72l4o",
    "name": "rater_firstName",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iinmfola",
    "name": "rater_lastName",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pztcrdkx",
    "name": "rater_id",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dhim4dqy",
    "name": "user_rating",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 5,
      "noDecimal": true
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aqip2lbw",
    "name": "target",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hrsjayac",
    "name": "averageRating",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eh2vqakl",
    "name": "totalRatings",
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
  collection.schema.removeField("avpv97zd")

  // remove
  collection.schema.removeField("hgkocamt")

  // remove
  collection.schema.removeField("6o3zli2a")

  // remove
  collection.schema.removeField("7zcblfp7")

  // remove
  collection.schema.removeField("q6edpju7")

  // remove
  collection.schema.removeField("rvgndj9z")

  // remove
  collection.schema.removeField("xwfpte6n")

  return dao.saveCollection(collection)
})
