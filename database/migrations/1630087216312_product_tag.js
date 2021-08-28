'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductTagSchema extends Schema {
  up() {
    this.create('product_tag', (table) => {
      table.increments()

      table
        .integer('product_id')
        .unsigned()
        .references('id')
        .inTable('products')
        .notNullable()

      table
        .integer('tag_id')
        .unsigned()
        .references('id')
        .inTable('tags')
        .notNullable()

      table.timestamps()
    })
  }

  down() {
    this.drop('product_tag')
  }
}

module.exports = ProductTagSchema
