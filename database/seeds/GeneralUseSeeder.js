'use strict'

const Database = use('Database')

class GeneralUseSeeder {
  async run() {
    // Tags
    await Database.table('product_tag').insert({
      product_id: 1,
      tag_id: 1
    })

    // Users
    await Database.table('users').insert({
      name: 'Name',
      username: 'Username',
      email: 'email@email.com',
      password: 'password',
      user_type_id: 1
    })

    // Products
    await Database.table('products').insert({
      name: 'Produto 1',
      price: 10.0
    })

    await Database.table('products').insert({
      name: 'Produto 2',
      price: 20.0
    })

    // Order
    await Database.table('orders').insert({
      user_id: 1,
      address: 'Rua 1',
      total: 200
    })

    // Order Products
    await Database.table('order_products').insert({
      order_id: 1,
      product_id: 1,
      qty: 1,
      price: 100
    })

    await Database.table('order_products').insert({
      order_id: 1,
      product_id: 2,
      qty: 1,
      price: 100
    })
  }
}

module.exports = GeneralUseSeeder
