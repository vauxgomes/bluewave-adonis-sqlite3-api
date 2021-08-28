'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  tag() {
    return this.belongsToMany('App/Models/Tag')
  }

  orders() {
    return this.belongsToMany('App/Models/Order')
  }
}

module.exports = Product
