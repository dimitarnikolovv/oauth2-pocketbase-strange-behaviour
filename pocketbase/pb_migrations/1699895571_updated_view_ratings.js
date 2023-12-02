/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jvhtsmtup62kqvb")

  collection.options = {
    "query": "SELECT\n    r.user as id,                                                 \n    ROUND(AVG(r.rating)) AS averageRating,\n    COUNT(*) AS totalRatings,\n    SUM(CASE WHEN r.rating=1 THEN 1 ELSE 0 END) AS oneStar,\n    SUM(CASE WHEN r.rating=2 THEN 1 ELSE 0 END) AS twoStar,\n    SUM(CASE WHEN r.rating=3 THEN 1 ELSE 0 END) AS threeStar,\n    SUM(CASE WHEN r.rating=4 THEN 1 ELSE 0 END) AS fourStar,\n    SUM(CASE WHEN r.rating=5 THEN 1 ELSE 0 END) AS fiveStar\nFROM\n    ratings r\nGROUP BY r.user\n"
  }

  // remove
  collection.schema.removeField("f98z7vly")

  // remove
  collection.schema.removeField("12r38m15")

  // remove
  collection.schema.removeField("pntgomss")

  // remove
  collection.schema.removeField("ch1jigkj")

  // remove
  collection.schema.removeField("h8rpevez")

  // remove
  collection.schema.removeField("xq3rgtlj")

  // remove
  collection.schema.removeField("mndeyrdz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tjmudbt6",
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
    "id": "kxpwzry4",
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
    "id": "jvjzc5sn",
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
    "id": "jddumgd9",
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
    "id": "ud8d9the",
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
    "id": "9zgvdjyj",
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
    "id": "maywvyg4",
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
    "query": "SELECT\n    r.user as id,                                                 \n    ROUND(AVG(r.rating)) AS averageRating,\n    COUNT(*) AS totalRatings,\n    SUM(CASE WHEN r.rating=1 THEN 1 ELSE 0 END) AS oneStar,\n    SUM(CASE WHEN r.rating=2 THEN 1 ELSE 0 END) AS twoStar,\n    SUM(CASE WHEN r.rating=3 THEN 1 ELSE 0 END) AS threeStar,\n    SUM(CASE WHEN r.rating=4 THEN 1 ELSE 0 END) AS fourStar,\n    SUM(CASE WHEN r.rating=5 THEN 1 ELSE 0 END) AS fiveStar\nFROM\n    ratings r, users u\nWHERE r.user = u.id\nGROUP BY r.user\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f98z7vly",
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
    "id": "12r38m15",
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
    "id": "pntgomss",
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
    "id": "ch1jigkj",
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
    "id": "h8rpevez",
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
    "id": "xq3rgtlj",
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
    "id": "mndeyrdz",
    "name": "fiveStar",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("tjmudbt6")

  // remove
  collection.schema.removeField("kxpwzry4")

  // remove
  collection.schema.removeField("jvjzc5sn")

  // remove
  collection.schema.removeField("jddumgd9")

  // remove
  collection.schema.removeField("ud8d9the")

  // remove
  collection.schema.removeField("9zgvdjyj")

  // remove
  collection.schema.removeField("maywvyg4")

  return dao.saveCollection(collection)
})
