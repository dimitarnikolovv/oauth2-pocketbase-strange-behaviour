/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jvhtsmtup62kqvb")

  collection.options = {
    "query": "SELECT\n    r.target as id,                             \n    r.target,                       \n    ROUND(AVG(r.rating)) AS averageRating,\n    COUNT(*) AS totalRatings,\n    SUM(CASE WHEN r.rating=1 THEN 1 ELSE 0 END) AS oneStar,\n    SUM(CASE WHEN r.rating=2 THEN 1 ELSE 0 END) AS twoStar,\n    SUM(CASE WHEN r.rating=3 THEN 1 ELSE 0 END) AS threeStar,\n    SUM(CASE WHEN r.rating=4 THEN 1 ELSE 0 END) AS fourStar,\n    SUM(CASE WHEN r.rating=5 THEN 1 ELSE 0 END) AS fiveStar\nFROM\n    ratings r\nJOIN\n    users ru ON r.author = ru.id\nGROUP BY r.target\n"
  }

  // remove
  collection.schema.removeField("yvdlhdy5")

  // remove
  collection.schema.removeField("j8zknx2o")

  // remove
  collection.schema.removeField("tngl9hdf")

  // remove
  collection.schema.removeField("xrsbr5nk")

  // remove
  collection.schema.removeField("i9mvv0g4")

  // remove
  collection.schema.removeField("ca0kcho6")

  // remove
  collection.schema.removeField("3xn2g56k")

  // remove
  collection.schema.removeField("qtbmhuex")

  // remove
  collection.schema.removeField("evwta6wu")

  // remove
  collection.schema.removeField("ud5u858o")

  // remove
  collection.schema.removeField("oyx9iui4")

  // remove
  collection.schema.removeField("xac2obqe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sncmhktl",
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
    "id": "rsjuuqjz",
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
    "id": "dz5n7cfn",
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
    "id": "lvpmbbwo",
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
    "id": "ocb9f5mq",
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
    "id": "r4hiuxgk",
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
    "id": "iuhbpboo",
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
    "id": "aiulyofw",
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
    "query": "SELECT\n    r.target as id,                             \n    ru.username AS author_username,\n    ru.firstName AS author_firstName,\n    ru.lastName as author_lastName,\n    ru.id AS author_id,\n    r.target,                       \n    ROUND(AVG(r.rating)) AS averageRating,\n    COUNT(*) AS totalRatings,\n    SUM(CASE WHEN r.rating=1 THEN 1 ELSE 0 END) AS oneStar,\n    SUM(CASE WHEN r.rating=2 THEN 1 ELSE 0 END) AS twoStar,\n    SUM(CASE WHEN r.rating=3 THEN 1 ELSE 0 END) AS threeStar,\n    SUM(CASE WHEN r.rating=4 THEN 1 ELSE 0 END) AS fourStar,\n    SUM(CASE WHEN r.rating=5 THEN 1 ELSE 0 END) AS fiveStar\nFROM\n    ratings r\nJOIN\n    users ru ON r.author = ru.id\nGROUP BY r.target\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yvdlhdy5",
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
    "id": "j8zknx2o",
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
    "id": "tngl9hdf",
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
    "id": "xrsbr5nk",
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
    "id": "i9mvv0g4",
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
    "id": "ca0kcho6",
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
    "id": "3xn2g56k",
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
    "id": "qtbmhuex",
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
    "id": "evwta6wu",
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
    "id": "ud5u858o",
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
    "id": "oyx9iui4",
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
    "id": "xac2obqe",
    "name": "fiveStar",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("sncmhktl")

  // remove
  collection.schema.removeField("rsjuuqjz")

  // remove
  collection.schema.removeField("dz5n7cfn")

  // remove
  collection.schema.removeField("lvpmbbwo")

  // remove
  collection.schema.removeField("ocb9f5mq")

  // remove
  collection.schema.removeField("r4hiuxgk")

  // remove
  collection.schema.removeField("iuhbpboo")

  // remove
  collection.schema.removeField("aiulyofw")

  return dao.saveCollection(collection)
})
