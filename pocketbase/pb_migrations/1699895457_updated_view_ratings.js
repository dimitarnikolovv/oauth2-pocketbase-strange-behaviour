/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jvhtsmtup62kqvb")

  collection.options = {
    "query": "SELECT\n    r.user as id,                                                 \n    ROUND(AVG(r.rating)) AS averageRating,\n    COUNT(*) AS totalRatings,\n    SUM(CASE WHEN r.rating=1 THEN 1 ELSE 0 END) AS oneStar,\n    SUM(CASE WHEN r.rating=2 THEN 1 ELSE 0 END) AS twoStar,\n    SUM(CASE WHEN r.rating=3 THEN 1 ELSE 0 END) AS threeStar,\n    SUM(CASE WHEN r.rating=4 THEN 1 ELSE 0 END) AS fourStar,\n    SUM(CASE WHEN r.rating=5 THEN 1 ELSE 0 END) AS fiveStar\nFROM\n    ratings r, users u\nGROUP BY r.user\n"
  }

  // remove
  collection.schema.removeField("lavskdyc")

  // remove
  collection.schema.removeField("j2lniqsr")

  // remove
  collection.schema.removeField("4ssl7mpx")

  // remove
  collection.schema.removeField("q2ry5tan")

  // remove
  collection.schema.removeField("xbqo4ww1")

  // remove
  collection.schema.removeField("orxgsg4j")

  // remove
  collection.schema.removeField("pmmqsbw7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yl2b8bwc",
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
    "id": "i1ts0izg",
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
    "id": "82se52ak",
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
    "id": "shhqx1vt",
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
    "id": "pfo2u2gw",
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
    "id": "ujuvvybq",
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
    "id": "7ipnnrvo",
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
    "query": "SELECT\n    r.user as id,                                                 \n    ROUND(AVG(r.rating)) AS averageRating,\n    COUNT(*) AS totalRatings,\n    SUM(CASE WHEN r.rating=1 THEN 1 ELSE 0 END) AS oneStar,\n    SUM(CASE WHEN r.rating=2 THEN 1 ELSE 0 END) AS twoStar,\n    SUM(CASE WHEN r.rating=3 THEN 1 ELSE 0 END) AS threeStar,\n    SUM(CASE WHEN r.rating=4 THEN 1 ELSE 0 END) AS fourStar,\n    SUM(CASE WHEN r.rating=5 THEN 1 ELSE 0 END) AS fiveStar\nFROM\n    ratings r\nGROUP BY r.user\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lavskdyc",
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
    "id": "j2lniqsr",
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
    "id": "4ssl7mpx",
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
    "id": "q2ry5tan",
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
    "id": "xbqo4ww1",
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
    "id": "orxgsg4j",
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
    "id": "pmmqsbw7",
    "name": "fiveStar",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("yl2b8bwc")

  // remove
  collection.schema.removeField("i1ts0izg")

  // remove
  collection.schema.removeField("82se52ak")

  // remove
  collection.schema.removeField("shhqx1vt")

  // remove
  collection.schema.removeField("pfo2u2gw")

  // remove
  collection.schema.removeField("ujuvvybq")

  // remove
  collection.schema.removeField("7ipnnrvo")

  return dao.saveCollection(collection)
})
