/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jvhtsmtup62kqvb")

  collection.options = {
    "query": "SELECT\n    r.target as id,                             \n    ru.username AS author_username,\n    ru.firstName AS author_firstName,\n    ru.lastName as author_lastName,\n    ru.id AS author_id,\n    r.target,                       \n    ROUND(AVG(r.rating)) AS averageRating,\n    COUNT(*) AS totalRatings\nFROM\n    ratings r\nJOIN\n    users ru ON r.author = ru.id\n\nGROUP BY r.target\n"
  }

  // remove
  collection.schema.removeField("mdlel5jb")

  // remove
  collection.schema.removeField("nmqt5ojl")

  // remove
  collection.schema.removeField("z3qgovfn")

  // remove
  collection.schema.removeField("rzbpuh21")

  // remove
  collection.schema.removeField("fggdgfiu")

  // remove
  collection.schema.removeField("htoc4ym2")

  // remove
  collection.schema.removeField("zgvtkwpn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "steqox1v",
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
    "id": "zfdhz9u7",
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
    "id": "g4n71eaa",
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
    "id": "21nf9egb",
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
    "id": "wp3elyzj",
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
    "id": "dt8r5vw7",
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
    "id": "wwsu5wip",
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
    "query": "SELECT\n    r.target as id,                             \n    ru.username AS author_username,\n    ru.firstName AS author_firstName,\n    ru.lastName as author_lastName,\n    ru.id AS author_id,\n    r.target,                       \n    ROUND(AVG(r.rating)) AS averageRating,\n    COUNT(*) AS totalRatings\nFROM\n    ratings r\n  left join json_each(r.target) as je\nleft join users on users.id = je.value\nJOIN\n    users ru ON r.author = ru.id\n\nGROUP BY r.target\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mdlel5jb",
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
    "id": "nmqt5ojl",
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
    "id": "z3qgovfn",
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
    "id": "rzbpuh21",
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
    "id": "fggdgfiu",
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
    "id": "htoc4ym2",
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
    "id": "zgvtkwpn",
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
  collection.schema.removeField("steqox1v")

  // remove
  collection.schema.removeField("zfdhz9u7")

  // remove
  collection.schema.removeField("g4n71eaa")

  // remove
  collection.schema.removeField("21nf9egb")

  // remove
  collection.schema.removeField("wp3elyzj")

  // remove
  collection.schema.removeField("dt8r5vw7")

  // remove
  collection.schema.removeField("wwsu5wip")

  return dao.saveCollection(collection)
})
