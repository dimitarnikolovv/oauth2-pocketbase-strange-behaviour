/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jvhtsmtup62kqvb")

  collection.options = {
    "query": "SELECT\n    r.target as id,                             \n    ru.username AS author_username,\n    ru.firstName AS author_firstName,\n    ru.lastName as author_lastName,\n    ru.id AS author_id,\n    r.target,                       \n    ROUND(AVG(r.rating)) AS averageRating,\n    COUNT(*) AS totalRatings\nFROM\n    ratings r\nJOIN\n    users ru ON r.author = ru.id\nleft join json_each(r.target) as je\nleft join users on users.id = je.value\nGROUP BY r.target\n"
  }

  // remove
  collection.schema.removeField("kpr9nika")

  // remove
  collection.schema.removeField("o1k4xjul")

  // remove
  collection.schema.removeField("zahtym9f")

  // remove
  collection.schema.removeField("zgxgkfoi")

  // remove
  collection.schema.removeField("a7v1jdw3")

  // remove
  collection.schema.removeField("slgm1mwh")

  // remove
  collection.schema.removeField("g6grffif")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x5dwx62u",
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
    "id": "k3ptjg2w",
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
    "id": "zmudv1kk",
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
    "id": "tudynls2",
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
    "id": "yqt1mtso",
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
    "id": "etp1woia",
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
    "id": "oyntenio",
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
    "query": "SELECT\n    r.target as id,                             \n    ru.username AS author_username,\n    ru.firstName AS author_firstName,\n    ru.lastName as author_lastName,\n    ru.id AS author_id,\n    r.target,                       \n    ROUND(AVG(r.rating)) AS averageRating,\n    COUNT(*) AS totalRatings\nFROM\n    ratings r\nJOIN\n    users ru ON r.author = ru.id\n  left join json_each(r.target) as je\nleft join users on users.id = je.value\nGROUP BY r.target\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kpr9nika",
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
    "id": "o1k4xjul",
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
    "id": "zahtym9f",
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
    "id": "zgxgkfoi",
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
    "id": "a7v1jdw3",
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
    "id": "slgm1mwh",
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
    "id": "g6grffif",
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
  collection.schema.removeField("x5dwx62u")

  // remove
  collection.schema.removeField("k3ptjg2w")

  // remove
  collection.schema.removeField("zmudv1kk")

  // remove
  collection.schema.removeField("tudynls2")

  // remove
  collection.schema.removeField("yqt1mtso")

  // remove
  collection.schema.removeField("etp1woia")

  // remove
  collection.schema.removeField("oyntenio")

  return dao.saveCollection(collection)
})
