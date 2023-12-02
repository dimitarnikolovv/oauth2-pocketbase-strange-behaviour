/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nn8gm39lz35jil2")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_LE2kEOi` ON `applications` (\n  `applicant`,\n  `post`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nn8gm39lz35jil2")

  collection.indexes = []

  return dao.saveCollection(collection)
})
