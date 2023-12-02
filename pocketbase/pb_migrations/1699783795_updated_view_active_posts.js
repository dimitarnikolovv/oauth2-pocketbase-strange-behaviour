/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u87vp6quunw287x")

  collection.options = {
    "query": "SELECT\n  p.id,\n  p.additionalInformation,\n  p.additionalStops,\n  p.arriveAt,\n  u.id as author,\n  u.firstName as authorFirstName,\n  u.lastName as authorLastName,\n  u.avatar as authorAvatar,\n  u.nameVisibility as authorNameVisibility,\n  u.showAvatar as authorShowAvatar,\n  u.showTel as authorShowTel,\n  c.model as carModel,\n  c.make as carMake,\n  p.created,\n  p.departDate,\n  p.departDateTime,\n  p.departFrom,\n  p.departTime,\n  p.departTimeSecond,\n  p.maxPassengers,\n  p.passengers,\n  p.price,\n  p.tel,\n  p.updated,\n  vr.averageRating AS authorRating\nFROM \n  posts p, view_ratings vr, users u, cars c\nWHERE \n  p.expired = FALSE AND vr.id = p.author AND p.author = u.id AND p.car = c.id"
  }

  // remove
  collection.schema.removeField("lv9vxhff")

  // remove
  collection.schema.removeField("dszttbdm")

  // remove
  collection.schema.removeField("lahevch6")

  // remove
  collection.schema.removeField("ej8t3gqp")

  // remove
  collection.schema.removeField("aknnqznj")

  // remove
  collection.schema.removeField("h3shugdt")

  // remove
  collection.schema.removeField("nvygwgdo")

  // remove
  collection.schema.removeField("o39duatd")

  // remove
  collection.schema.removeField("hs614d6v")

  // remove
  collection.schema.removeField("mciijnkh")

  // remove
  collection.schema.removeField("guacu6sh")

  // remove
  collection.schema.removeField("f4n5iclt")

  // remove
  collection.schema.removeField("efwmu657")

  // remove
  collection.schema.removeField("u9vqgguu")

  // remove
  collection.schema.removeField("w5m4usrf")

  // remove
  collection.schema.removeField("5resuffj")

  // remove
  collection.schema.removeField("5t9nj11m")

  // remove
  collection.schema.removeField("vmyvmcfi")

  // remove
  collection.schema.removeField("7rathi60")

  // remove
  collection.schema.removeField("h0ox8otg")

  // remove
  collection.schema.removeField("qamgcl2v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y4mv56cd",
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
    "id": "ssfks9to",
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
    "id": "zzjrvbjd",
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
    "id": "eyxvvp2y",
    "name": "author",
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
    "id": "drjgllpr",
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
    "id": "uhg3jsfu",
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
    "id": "coicq0l6",
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
    "id": "u1kazvtg",
    "name": "authorNameVisibility",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "none",
        "onlyFirstName",
        "both"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "czdrlztg",
    "name": "authorShowAvatar",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bmg3cijb",
    "name": "authorShowTel",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "audbjq7j",
    "name": "carModel",
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
    "id": "intelf7k",
    "name": "carMake",
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
    "id": "gvzvkun9",
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
    "id": "lrphmecw",
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
    "id": "958cftlq",
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
    "id": "nfdytkpx",
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
    "id": "kjxve81l",
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
    "id": "jb7lvbhk",
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
    "id": "ps2mfvhp",
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
    "id": "onjsmdxe",
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
    "id": "arupdzs6",
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
    "id": "liurtkpy",
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
    "query": "SELECT\n  p.id,\n  p.additionalInformation,\n  p.additionalStops,\n  p.arriveAt,\n  u.firstName as authorFirstName,\n  u.lastName as authorLastName,\n  u.avatar as authorAvatar,\n  u.nameVisibility as authorNameVisibility,\n  u.showAvatar as authorShowAvatar,\n  u.showTel as authorShowTel,\n  c.model as carModel,\n  c.make as carMake,\n  p.created,\n  p.departDate,\n  p.departDateTime,\n  p.departFrom,\n  p.departTime,\n  p.departTimeSecond,\n  p.maxPassengers,\n  p.passengers,\n  p.price,\n  p.tel,\n  p.updated,\n  vr.averageRating AS authorRating\nFROM \n  posts p, view_ratings vr, users u, cars c\nWHERE \n  p.expired = FALSE AND vr.id = p.author AND p.author = u.id AND p.car = c.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lv9vxhff",
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
    "id": "dszttbdm",
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
    "id": "lahevch6",
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
    "id": "ej8t3gqp",
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
    "id": "aknnqznj",
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
    "id": "h3shugdt",
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
    "id": "nvygwgdo",
    "name": "authorNameVisibility",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "none",
        "onlyFirstName",
        "both"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o39duatd",
    "name": "authorShowAvatar",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hs614d6v",
    "name": "authorShowTel",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mciijnkh",
    "name": "carModel",
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
    "id": "guacu6sh",
    "name": "carMake",
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
    "id": "f4n5iclt",
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
    "id": "efwmu657",
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
    "id": "u9vqgguu",
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
    "id": "w5m4usrf",
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
    "id": "5resuffj",
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
    "id": "5t9nj11m",
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
    "id": "vmyvmcfi",
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
    "id": "7rathi60",
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
    "id": "h0ox8otg",
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
    "id": "qamgcl2v",
    "name": "authorRating",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("y4mv56cd")

  // remove
  collection.schema.removeField("ssfks9to")

  // remove
  collection.schema.removeField("zzjrvbjd")

  // remove
  collection.schema.removeField("eyxvvp2y")

  // remove
  collection.schema.removeField("drjgllpr")

  // remove
  collection.schema.removeField("uhg3jsfu")

  // remove
  collection.schema.removeField("coicq0l6")

  // remove
  collection.schema.removeField("u1kazvtg")

  // remove
  collection.schema.removeField("czdrlztg")

  // remove
  collection.schema.removeField("bmg3cijb")

  // remove
  collection.schema.removeField("audbjq7j")

  // remove
  collection.schema.removeField("intelf7k")

  // remove
  collection.schema.removeField("gvzvkun9")

  // remove
  collection.schema.removeField("lrphmecw")

  // remove
  collection.schema.removeField("958cftlq")

  // remove
  collection.schema.removeField("nfdytkpx")

  // remove
  collection.schema.removeField("kjxve81l")

  // remove
  collection.schema.removeField("jb7lvbhk")

  // remove
  collection.schema.removeField("ps2mfvhp")

  // remove
  collection.schema.removeField("onjsmdxe")

  // remove
  collection.schema.removeField("arupdzs6")

  // remove
  collection.schema.removeField("liurtkpy")

  return dao.saveCollection(collection)
})
