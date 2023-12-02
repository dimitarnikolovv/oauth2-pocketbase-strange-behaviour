/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u87vp6quunw287x")

  collection.options = {
    "query": "SELECT\n  p.id,\n  p.additionalInformation,\n  p.additionalStops,\n  p.arriveAt,\n  u.firstName as authorFirstName,\n  p.car,\n  p.created,\n  p.departDate,\n  p.departDateTime,\n  p.departFrom,\n  p.departTime,\n  p.departTimeSecond,\n  p.maxPassengers,\n  p.passengers,\n  p.price,\n  p.tel,\n  p.updated,\n  vr.averageRating AS authorRating\nFROM \n  posts p, view_ratings vr, users u\nWHERE \n  p.expired = FALSE AND vr.id = p.author AND p.author = u.id"
  }

  // remove
  collection.schema.removeField("zkdivxz7")

  // remove
  collection.schema.removeField("9p0rece3")

  // remove
  collection.schema.removeField("qgefqwd2")

  // remove
  collection.schema.removeField("pw39utsi")

  // remove
  collection.schema.removeField("qk8nthmd")

  // remove
  collection.schema.removeField("pp5xkaye")

  // remove
  collection.schema.removeField("pyyenvqu")

  // remove
  collection.schema.removeField("jzzmyooq")

  // remove
  collection.schema.removeField("ujwvprkq")

  // remove
  collection.schema.removeField("xfhzoyy4")

  // remove
  collection.schema.removeField("fhkef4mr")

  // remove
  collection.schema.removeField("zpj6uyic")

  // remove
  collection.schema.removeField("rjh2xvjv")

  // remove
  collection.schema.removeField("peebclzz")

  // remove
  collection.schema.removeField("6knnrff6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mbhkqrcc",
    "name": "additionalInformation",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 500,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uzb2x7qb",
    "name": "additionalStops",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gooetv73",
    "name": "arriveAt",
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
    "id": "wwwc4cvh",
    "name": "authorFirstName",
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
    "id": "lwathpu6",
    "name": "car",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "7fyrdhygdape9m0",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hfhjvxgi",
    "name": "departDate",
    "type": "date",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ecomlznv",
    "name": "departDateTime",
    "type": "date",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j5brisgx",
    "name": "departFrom",
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
    "id": "mddyclmw",
    "name": "departTime",
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
    "id": "rnusrm8i",
    "name": "departTimeSecond",
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
    "id": "uy0vkqhg",
    "name": "maxPassengers",
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
    "id": "aigonhxb",
    "name": "passengers",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": true
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bxwqv67h",
    "name": "price",
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
    "id": "tnoyfqjs",
    "name": "tel",
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
    "id": "v9djawgs",
    "name": "authorRating",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u87vp6quunw287x")

  collection.options = {
    "query": "SELECT\n  p.id,\n  p.additionalInformation,\n  p.additionalStops,\n  p.arriveAt,\n  p.author,\n  p.car,\n  p.created,\n  p.departDate,\n  p.departDateTime,\n  p.departFrom,\n  p.departTime,\n  p.departTimeSecond,\n  p.maxPassengers,\n  p.passengers,\n  p.price,\n  p.tel,\n  p.updated,\n  vr.averageRating\nFROM \n  posts p, view_ratings vr\nWHERE \n  p.expired = FALSE AND vr.id = p.author"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zkdivxz7",
    "name": "additionalInformation",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 500,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9p0rece3",
    "name": "additionalStops",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qgefqwd2",
    "name": "arriveAt",
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
    "id": "pw39utsi",
    "name": "author",
    "type": "relation",
    "required": true,
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
    "id": "qk8nthmd",
    "name": "car",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "7fyrdhygdape9m0",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pp5xkaye",
    "name": "departDate",
    "type": "date",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pyyenvqu",
    "name": "departDateTime",
    "type": "date",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jzzmyooq",
    "name": "departFrom",
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
    "id": "ujwvprkq",
    "name": "departTime",
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
    "id": "xfhzoyy4",
    "name": "departTimeSecond",
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
    "id": "fhkef4mr",
    "name": "maxPassengers",
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
    "id": "zpj6uyic",
    "name": "passengers",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": true
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rjh2xvjv",
    "name": "price",
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
    "id": "peebclzz",
    "name": "tel",
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
    "id": "6knnrff6",
    "name": "averageRating",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("mbhkqrcc")

  // remove
  collection.schema.removeField("uzb2x7qb")

  // remove
  collection.schema.removeField("gooetv73")

  // remove
  collection.schema.removeField("wwwc4cvh")

  // remove
  collection.schema.removeField("lwathpu6")

  // remove
  collection.schema.removeField("hfhjvxgi")

  // remove
  collection.schema.removeField("ecomlznv")

  // remove
  collection.schema.removeField("j5brisgx")

  // remove
  collection.schema.removeField("mddyclmw")

  // remove
  collection.schema.removeField("rnusrm8i")

  // remove
  collection.schema.removeField("uy0vkqhg")

  // remove
  collection.schema.removeField("aigonhxb")

  // remove
  collection.schema.removeField("bxwqv67h")

  // remove
  collection.schema.removeField("tnoyfqjs")

  // remove
  collection.schema.removeField("v9djawgs")

  return dao.saveCollection(collection)
})
