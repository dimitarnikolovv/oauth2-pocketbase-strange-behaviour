/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jvhtsmtup62kqvb")

  collection.options = {
    "query": "SELECT\n    r.target as id,                             \n    ru.username AS author_username,\n    ru.firstName AS author_firstName,\n    ru.lastName as author_lastName,\n    ru.id AS author_id,\n    r.target,                       \n    ROUND(AVG(r.rating)) AS averageRating,\n    COUNT(*) AS totalRatings\nFROM\n    ratings r\nJOIN\n    users ru ON r.author = ru.id\nGROUP BY r.target"
  }

  // remove
  collection.schema.removeField("xyfojmm3")

  // remove
  collection.schema.removeField("kurebjng")

  // remove
  collection.schema.removeField("dtjsyhmm")

  // remove
  collection.schema.removeField("mhobqxay")

  // remove
  collection.schema.removeField("liyqiinr")

  // remove
  collection.schema.removeField("hcjqraun")

  // remove
  collection.schema.removeField("yi9a4ixn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hojf6dpd",
    "name": "author_username",
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
    "id": "g2llgu03",
    "name": "author_firstName",
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
    "id": "dcz8v7t4",
    "name": "author_lastName",
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
    "id": "8f4lfucj",
    "name": "author_id",
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
    "id": "mjycwgmq",
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
    "id": "ad66xcoy",
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
    "id": "9wc4qo67",
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
    "query": "SELECT\n    r.id,                             \n    ru.username AS author_username,\n    ru.firstName AS author_firstName,\n    ru.lastName as author_lastName,\n    ru.id AS author_id,\n    r.target,                       \n    ROUND(AVG(r.rating)) AS averageRating,\n    COUNT(*) AS totalRatings\nFROM\n    ratings r\nJOIN\n    users ru ON r.author = ru.id\nGROUP BY r.target"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xyfojmm3",
    "name": "author_username",
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
    "id": "kurebjng",
    "name": "author_firstName",
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
    "id": "dtjsyhmm",
    "name": "author_lastName",
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
    "id": "mhobqxay",
    "name": "author_id",
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
    "id": "liyqiinr",
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
    "id": "hcjqraun",
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
    "id": "yi9a4ixn",
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
  collection.schema.removeField("hojf6dpd")

  // remove
  collection.schema.removeField("g2llgu03")

  // remove
  collection.schema.removeField("dcz8v7t4")

  // remove
  collection.schema.removeField("8f4lfucj")

  // remove
  collection.schema.removeField("mjycwgmq")

  // remove
  collection.schema.removeField("ad66xcoy")

  // remove
  collection.schema.removeField("9wc4qo67")

  return dao.saveCollection(collection)
})
