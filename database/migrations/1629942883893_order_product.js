'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderProductSchema extends Schema {
  up() {
    this.create('order_products', (table) => {
      table.increments()

      table
        .integer('order_id')
        .unsigned()
        .references('id')
        .inTable('orders')
        .notNullable()
        .onDelete('CASCADE')

      table
        .integer('product_id')
        .unsigned()
        .references('id')
        .inTable('products')
        .notNullable()
        .onDelete('CASCADE')

      table.integer('qty').notNullable().defaultTo(1)
      table.decimal('price', [2, 10]).notNullable()

      table.timestamps()
    })
  }

  down() {
    this.drop('order_product')
  }
}

module.exports = OrderProductSchema
