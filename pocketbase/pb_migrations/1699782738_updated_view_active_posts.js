/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u87vp6quunw287x")

  collection.options = {
    "query": "SELECT\n  p.id,\n  p.additionalInformation,\n  p.additionalStops,\n  p.arriveAt,\n  u.firstName as authorFirstName,\n  u.lastName as authorLastName,\n  u.avatar as authorAvatar,\n  p.car,\n  p.created,\n  p.departDate,\n  p.departDateTime,\n  p.departFrom,\n  p.departTime,\n  p.departTimeSecond,\n  p.maxPassengers,\n  p.passengers,\n  p.price,\n  p.tel,\n  p.updated,\n  vr.averageRating AS authorRating\nFROM \n  posts p, view_ratings vr, users u\nWHERE \n  p.expired = FALSE AND vr.id = p.author AND p.author = u.id"
  }

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pmrcjvmw",
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
    "id": "galdv17a",
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
    "id": "r3l2u2me",
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
    "id": "dvlmqwny",
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
    "id": "o3stodtm",
    "name": "authorLastName",
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
    "id": "ihtivu0r",
    "name": "authorAvatar",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/gif",
        "image/webp"
      ],
      "thumbs": [
        "40x40",
        "128x128",
        "64x64",
        "84x84",
        "56x56",
        "256x256"
      ],
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uswkv8co",
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
    "id": "r6a6ym7i",
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
    "id": "ned2baos",
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
    "id": "wnswrfld",
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
    "id": "tgqempdf",
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
    "id": "ntmzehgw",
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
    "id": "hxsziogp",
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
    "id": "lkyrffqb",
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
    "id": "4eqbx4md",
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
    "id": "pl0ncvly",
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
    "id": "jaarr6gi",
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
    "query": "SELECT\n  p.id,\n  p.additionalInformation,\n  p.additionalStops,\n  p.arriveAt,\n  u.firstName as authorFirstName,\n  p.car,\n  p.created,\n  p.departDate,\n  p.departDateTime,\n  p.departFrom,\n  p.departTime,\n  p.departTimeSecond,\n  p.maxPassengers,\n  p.passengers,\n  p.price,\n  p.tel,\n  p.updated,\n  vr.averageRating AS authorRating\nFROM \n  posts p, view_ratings vr, users u\nWHERE \n  p.expired = FALSE AND vr.id = p.author AND p.author = u.id"
  }

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

  // remove
  collection.schema.removeField("pmrcjvmw")

  // remove
  collection.schema.removeField("galdv17a")

  // remove
  collection.schema.removeField("r3l2u2me")

  // remove
  collection.schema.removeField("dvlmqwny")

  // remove
  collection.schema.removeField("o3stodtm")

  // remove
  collection.schema.removeField("ihtivu0r")

  // remove
  collection.schema.removeField("uswkv8co")

  // remove
  collection.schema.removeField("r6a6ym7i")

  // remove
  collection.schema.removeField("ned2baos")

  // remove
  collection.schema.removeField("wnswrfld")

  // remove
  collection.schema.removeField("tgqempdf")

  // remove
  collection.schema.removeField("ntmzehgw")

  // remove
  collection.schema.removeField("hxsziogp")

  // remove
  collection.schema.removeField("lkyrffqb")

  // remove
  collection.schema.removeField("4eqbx4md")

  // remove
  collection.schema.removeField("pl0ncvly")

  // remove
  collection.schema.removeField("jaarr6gi")

  return dao.saveCollection(collection)
})
