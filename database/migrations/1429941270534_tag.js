'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TagSchema extends Schema {
  up() {
    this.create('tags', (table) => {
      table.increments()
      table.string('name', 30).notNullable().unique().index()
      table.boolean('active').defaultTo(true)
      table.timestamps()
    })
  }

  down() {
    this.drop('tags')
  }
}

module.exports = TagSchema
