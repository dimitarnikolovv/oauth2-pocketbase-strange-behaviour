/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jvhtsmtup62kqvb")

  collection.options = {
    "query": "SELECT\n    u.id,   \n    COALESCE(ROUND(AVG(r.rating)), '') AS averageRating,\n    COUNT(*) AS totalRatings,\n    SUM(CASE WHEN r.rating=1 THEN 1 ELSE 0 END) AS oneStar,\n    SUM(CASE WHEN r.rating=2 THEN 1 ELSE 0 END) AS twoStar,\n    SUM(CASE WHEN r.rating=3 THEN 1 ELSE 0 END) AS threeStar,\n    SUM(CASE WHEN r.rating=4 THEN 1 ELSE 0 END) AS fourStar,\n    SUM(CASE WHEN r.rating=5 THEN 1 ELSE 0 END) AS fiveStar\nFROM\n    users u\nLEFT JOIN ratings r ON u.id = r.user\nGROUP BY u.id\n"
  }

  // remove
  collection.schema.removeField("7eedngdm")

  // remove
  collection.schema.removeField("ee3sykpz")

  // remove
  collection.schema.removeField("kenruqb4")

  // remove
  collection.schema.removeField("xwwtonrr")

  // remove
  collection.schema.removeField("ha1ynceu")

  // remove
  collection.schema.removeField("2atsioba")

  // remove
  collection.schema.removeField("ly5lzqd9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8gd0zuvt",
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
    "id": "mslasnjl",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tq9by4f4",
    "name": "oneStar",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ks8ijdbf",
    "name": "twoStar",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5ce0cj5c",
    "name": "threeStar",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nokxxikn",
    "name": "fourStar",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3u8h12gj",
    "name": "fiveStar",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jvhtsmtup62kqvb")

  collection.options = {
    "query": "SELECT\n    u.id,   \n    COALESCE(ROUND(AVG(r.rating)), '') AS averageRating,\n    COALESCE(COUNT(*), 0) AS totalRatings,\n    SUM(CASE WHEN r.rating=1 THEN 1 ELSE 0 END) AS oneStar,\n    SUM(CASE WHEN r.rating=2 THEN 1 ELSE 0 END) AS twoStar,\n    SUM(CASE WHEN r.rating=3 THEN 1 ELSE 0 END) AS threeStar,\n    SUM(CASE WHEN r.rating=4 THEN 1 ELSE 0 END) AS fourStar,\n    SUM(CASE WHEN r.rating=5 THEN 1 ELSE 0 END) AS fiveStar\nFROM\n    users u\nLEFT JOIN ratings r ON u.id = r.user\nGROUP BY u.id\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7eedngdm",
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
    "id": "ee3sykpz",
    "name": "totalRatings",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kenruqb4",
    "name": "oneStar",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xwwtonrr",
    "name": "twoStar",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ha1ynceu",
    "name": "threeStar",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2atsioba",
    "name": "fourStar",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ly5lzqd9",
    "name": "fiveStar",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("8gd0zuvt")

  // remove
  collection.schema.removeField("mslasnjl")

  // remove
  collection.schema.removeField("tq9by4f4")

  // remove
  collection.schema.removeField("ks8ijdbf")

  // remove
  collection.schema.removeField("5ce0cj5c")

  // remove
  collection.schema.removeField("nokxxikn")

  // remove
  collection.schema.removeField("3u8h12gj")

  return dao.saveCollection(collection)
})
