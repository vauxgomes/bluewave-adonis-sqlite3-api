'use strict'

const Model = use('Model')

class Order extends Model {
  user() {
    return this.belongsTo('App/Models/User')
  }

  order_products() {
    return this.hasMany('App/Models/OrderProduct')
  }
}

module.exports = Order
