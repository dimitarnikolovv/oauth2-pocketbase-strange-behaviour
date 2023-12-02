/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u87vp6quunw287x")

  collection.options = {
    "query": "SELECT\n  p.id,\n  p.additionalInformation,\n  p.additionalStops,\n  p.arriveAt,\n  u.firstName as authorFirstName,\n  u.lastName as authorLastName,\n  u.avatar as authorAvatar,\n  u.nameVisibility as authorNameVisibility,\n  u.showAvatar as authorShowAvatar,\n  u.showTel as authorShowTel,\n  c.model as carModel,\n  c.make as carMake,\n  p.created,\n  p.departDate,\n  p.departDateTime,\n  p.departFrom,\n  p.departTime,\n  p.departTimeSecond,\n  p.maxPassengers,\n  p.passengers,\n  p.price,\n  p.tel,\n  p.updated,\n  vr.averageRating AS authorRating\nFROM \n  posts p, view_ratings vr, users u, cars c\nWHERE \n  p.expired = FALSE AND vr.id = p.author AND p.author = u.id AND p.car = c.id"
  }

  // remove
  collection.schema.removeField("k45jnwp4")

  // remove
  collection.schema.removeField("iom8jsqm")

  // remove
  collection.schema.removeField("7uoyyp4z")

  // remove
  collection.schema.removeField("jw1oqvdc")

  // remove
  collection.schema.removeField("jfnjab57")

  // remove
  collection.schema.removeField("4y3bx8ia")

  // remove
  collection.schema.removeField("br1i8dud")

  // remove
  collection.schema.removeField("v7k3pnxz")

  // remove
  collection.schema.removeField("3ezznxvf")

  // remove
  collection.schema.removeField("xa05jfla")

  // remove
  collection.schema.removeField("jcjtfmjr")

  // remove
  collection.schema.removeField("1ctilgkr")

  // remove
  collection.schema.removeField("gjshv6is")

  // remove
  collection.schema.removeField("dcbx1u1r")

  // remove
  collection.schema.removeField("ykeonhrg")

  // remove
  collection.schema.removeField("w5kstasq")

  // remove
  collection.schema.removeField("my505mvo")

  // remove
  collection.schema.removeField("9ijtxwlx")

  // remove
  collection.schema.removeField("u8bk1gmh")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u87vp6quunw287x")

  collection.options = {
    "query": "SELECT\n  p.id,\n  p.additionalInformation,\n  p.additionalStops,\n  p.arriveAt,\n  u.firstName as authorFirstName,\n  u.lastName as authorLastName,\n  u.avatar as authorAvatar,\n  u.nameVisibility as authorNameVisibility,\n  u.showAvatar as authorShowAvatar,\n  u.showTel as authorShowTel,\n  \n  p.created,\n  p.departDate,\n  p.departDateTime,\n  p.departFrom,\n  p.departTime,\n  p.departTimeSecond,\n  p.maxPassengers,\n  p.passengers,\n  p.price,\n  p.tel,\n  p.updated,\n  vr.averageRating AS authorRating\nFROM \n  posts p, view_ratings vr, users u, cars c\nWHERE \n  p.expired = FALSE AND vr.id = p.author AND p.author = u.id AND p.car = c.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k45jnwp4",
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
    "id": "iom8jsqm",
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
    "id": "7uoyyp4z",
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
    "id": "jw1oqvdc",
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
    "id": "jfnjab57",
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
    "id": "4y3bx8ia",
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
    "id": "br1i8dud",
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
    "id": "v7k3pnxz",
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
    "id": "3ezznxvf",
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
    "id": "xa05jfla",
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
    "id": "jcjtfmjr",
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
    "id": "1ctilgkr",
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
    "id": "gjshv6is",
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
    "id": "dcbx1u1r",
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
    "id": "ykeonhrg",
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
    "id": "w5kstasq",
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
    "id": "my505mvo",
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
    "id": "9ijtxwlx",
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
    "id": "u8bk1gmh",
    "name": "authorRating",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

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

  return dao.saveCollection(collection)
})
