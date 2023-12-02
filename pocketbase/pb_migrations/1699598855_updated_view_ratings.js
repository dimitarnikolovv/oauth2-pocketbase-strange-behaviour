/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jvhtsmtup62kqvb")

  collection.options = {
    "query": "SELECT\n    r.target as id,                                                 \n    ROUND(AVG(r.rating)) AS averageRating,\n    COUNT(*) AS totalRatings,\n    SUM(CASE WHEN r.rating=1 THEN 1 ELSE 0 END) AS oneStar,\n    SUM(CASE WHEN r.rating=2 THEN 1 ELSE 0 END) AS twoStar,\n    SUM(CASE WHEN r.rating=3 THEN 1 ELSE 0 END) AS threeStar,\n    SUM(CASE WHEN r.rating=4 THEN 1 ELSE 0 END) AS fourStar,\n    SUM(CASE WHEN r.rating=5 THEN 1 ELSE 0 END) AS fiveStar\nFROM\n    ratings r\nGROUP BY r.target\n"
  }

  // remove
  collection.schema.removeField("mu3v91b5")

  // remove
  collection.schema.removeField("pyt2iuak")

  // remove
  collection.schema.removeField("xuqesqcl")

  // remove
  collection.schema.removeField("81myo6c6")

  // remove
  collection.schema.removeField("vlxyynho")

  // remove
  collection.schema.removeField("dhmrktfn")

  // remove
  collection.schema.removeField("alnn0qs5")

  // remove
  collection.schema.removeField("cxymmppk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qiqmsthx",
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
    "id": "nytflf9a",
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
    "id": "whc8ptoz",
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
    "id": "kexabike",
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
    "id": "lal6ubci",
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
    "id": "kgis9zlq",
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
    "id": "4wfnwdgi",
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
    "query": "SELECT\n    r.target as id,                             \n    r.target,                       \n    ROUND(AVG(r.rating)) AS averageRating,\n    COUNT(*) AS totalRatings,\n    SUM(CASE WHEN r.rating=1 THEN 1 ELSE 0 END) AS oneStar,\n    SUM(CASE WHEN r.rating=2 THEN 1 ELSE 0 END) AS twoStar,\n    SUM(CASE WHEN r.rating=3 THEN 1 ELSE 0 END) AS threeStar,\n    SUM(CASE WHEN r.rating=4 THEN 1 ELSE 0 END) AS fourStar,\n    SUM(CASE WHEN r.rating=5 THEN 1 ELSE 0 END) AS fiveStar\nFROM\n    ratings r\nGROUP BY r.target\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mu3v91b5",
    "name": "target",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pyt2iuak",
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
    "id": "xuqesqcl",
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
    "id": "81myo6c6",
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
    "id": "vlxyynho",
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
    "id": "dhmrktfn",
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
    "id": "alnn0qs5",
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
    "id": "cxymmppk",
    "name": "fiveStar",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("qiqmsthx")

  // remove
  collection.schema.removeField("nytflf9a")

  // remove
  collection.schema.removeField("whc8ptoz")

  // remove
  collection.schema.removeField("kexabike")

  // remove
  collection.schema.removeField("lal6ubci")

  // remove
  collection.schema.removeField("kgis9zlq")

  // remove
  collection.schema.removeField("4wfnwdgi")

  return dao.saveCollection(collection)
})
