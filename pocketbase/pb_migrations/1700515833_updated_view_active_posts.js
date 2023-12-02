/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u87vp6quunw287x")

  collection.options = {
    "query": "SELECT\n  p.id,\n  p.additionalInformation,\n  p.additionalStops,\n  p.arriveAt,\n  u.id as author,\n  u.firstName as authorFirstName,\n  u.lastName as authorLastName,\n  u.avatar as authorAvatar,\n  u.nameVisibility as authorNameVisibility,\n  u.showAvatar as authorShowAvatar,\n  u.showTel as authorShowTel,\n  c.model as carModel,\n  c.make as carMake,\n  p.created,\n  p.departDate,\n  p.departDateTime,\n  p.departFrom,\n  p.departTime,\n  p.departTimeSecond,\n  p.maxPassengers,\n  p.passengers,\n  p.price,\n  p.tel,\n  p.updated,\n  IFNULL(vr.averageRating, 0) AS authorRating\nFROM \n  posts p, view_ratings vr, users u, cars c\nWHERE \n  p.expired = FALSE AND p.finished = FALSE AND vr.id = p.author AND p.author = u.id AND p.car = c.id"
  }

  // remove
  collection.schema.removeField("2pftenyt")

  // remove
  collection.schema.removeField("tmj8d1dw")

  // remove
  collection.schema.removeField("jw8jdmey")

  // remove
  collection.schema.removeField("9utzo5zt")

  // remove
  collection.schema.removeField("myioqujs")

  // remove
  collection.schema.removeField("vrqjqdvf")

  // remove
  collection.schema.removeField("6qu7gdm7")

  // remove
  collection.schema.removeField("qrx6ithe")

  // remove
  collection.schema.removeField("ks5wivr7")

  // remove
  collection.schema.removeField("vzz2p3xb")

  // remove
  collection.schema.removeField("ikki1zou")

  // remove
  collection.schema.removeField("ytlaj1ii")

  // remove
  collection.schema.removeField("p6iz4gfj")

  // remove
  collection.schema.removeField("qimw4zdd")

  // remove
  collection.schema.removeField("ekgzatiq")

  // remove
  collection.schema.removeField("unqorcjq")

  // remove
  collection.schema.removeField("kuk3demc")

  // remove
  collection.schema.removeField("4v8kmedv")

  // remove
  collection.schema.removeField("iipvc75p")

  // remove
  collection.schema.removeField("7ninzkzh")

  // remove
  collection.schema.removeField("a6ubtyvj")

  // remove
  collection.schema.removeField("ezjtu14m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hgzq0qlu",
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
    "id": "ga58yr1h",
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
    "id": "oardp5mi",
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
    "id": "ld7mrri2",
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
    "id": "1csbuwil",
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
    "id": "xrgbyiwr",
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
    "id": "nggus5eo",
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
    "id": "qswyhmlw",
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
    "id": "nn9hfdyt",
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
    "id": "uic4qp6b",
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
    "id": "l8bzduue",
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
    "id": "pfwfmtgn",
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
    "id": "c5dpjnld",
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
    "id": "vcebesco",
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
    "id": "xkcpxuam",
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
    "id": "1swiyktx",
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
    "id": "yjdbicil",
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
    "id": "rfnz2h1w",
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
    "id": "acu4cg6b",
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
    "id": "4g5f9w6t",
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
    "id": "qo7jd1q4",
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
    "id": "hrsldp6x",
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
    "query": "SELECT\n  p.id,\n  p.additionalInformation,\n  p.additionalStops,\n  p.arriveAt,\n  u.id as author,\n  u.firstName as authorFirstName,\n  u.lastName as authorLastName,\n  u.avatar as authorAvatar,\n  u.nameVisibility as authorNameVisibility,\n  u.showAvatar as authorShowAvatar,\n  u.showTel as authorShowTel,\n  c.model as carModel,\n  c.make as carMake,\n  p.created,\n  p.departDate,\n  p.departDateTime,\n  p.departFrom,\n  p.departTime,\n  p.departTimeSecond,\n  p.maxPassengers,\n  p.passengers,\n  p.price,\n  p.tel,\n  p.updated,\n  IFNULL(vr.averageRating, 0) AS authorRating\nFROM \n  posts p, view_ratings vr, users u, cars c\nWHERE \n  p.expired = FALSE AND vr.id = p.author AND p.author = u.id AND p.car = c.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2pftenyt",
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
    "id": "tmj8d1dw",
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
    "id": "jw8jdmey",
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
    "id": "9utzo5zt",
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
    "id": "myioqujs",
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
    "id": "vrqjqdvf",
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
    "id": "6qu7gdm7",
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
    "id": "qrx6ithe",
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
    "id": "ks5wivr7",
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
    "id": "vzz2p3xb",
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
    "id": "ikki1zou",
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
    "id": "ytlaj1ii",
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
    "id": "p6iz4gfj",
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
    "id": "qimw4zdd",
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
    "id": "ekgzatiq",
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
    "id": "unqorcjq",
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
    "id": "kuk3demc",
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
    "id": "4v8kmedv",
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
    "id": "iipvc75p",
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
    "id": "7ninzkzh",
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
    "id": "a6ubtyvj",
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
    "id": "ezjtu14m",
    "name": "authorRating",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("hgzq0qlu")

  // remove
  collection.schema.removeField("ga58yr1h")

  // remove
  collection.schema.removeField("oardp5mi")

  // remove
  collection.schema.removeField("ld7mrri2")

  // remove
  collection.schema.removeField("1csbuwil")

  // remove
  collection.schema.removeField("xrgbyiwr")

  // remove
  collection.schema.removeField("nggus5eo")

  // remove
  collection.schema.removeField("qswyhmlw")

  // remove
  collection.schema.removeField("nn9hfdyt")

  // remove
  collection.schema.removeField("uic4qp6b")

  // remove
  collection.schema.removeField("l8bzduue")

  // remove
  collection.schema.removeField("pfwfmtgn")

  // remove
  collection.schema.removeField("c5dpjnld")

  // remove
  collection.schema.removeField("vcebesco")

  // remove
  collection.schema.removeField("xkcpxuam")

  // remove
  collection.schema.removeField("1swiyktx")

  // remove
  collection.schema.removeField("yjdbicil")

  // remove
  collection.schema.removeField("rfnz2h1w")

  // remove
  collection.schema.removeField("acu4cg6b")

  // remove
  collection.schema.removeField("4g5f9w6t")

  // remove
  collection.schema.removeField("qo7jd1q4")

  // remove
  collection.schema.removeField("hrsldp6x")

  return dao.saveCollection(collection)
})
