'use strict'

const Order = use('App/Models/Order')
const OrderProduct = use('App/Models/OrderProduct')

class OrderController {
  async index() {
    return await Order.all()
  }

  async show({ params }) {
    const order = await Order.findOrFail(params.id)
    // await order.load('order_products')

    order.products = await OrderProduct.query()
      .select([
        'products.id',
        'products.name',
        'products.price',
        'order_products.qty',
        'order_products.price'
      ])
      .innerJoin('products', 'products.id', 'product_id')
      .where('order_id', order.id)
      .fetch()

    // await order.load('user')
    return order
  }

  async store({ request }) {
    const data = request.only(['user_id', 'address', 'note', 'total'])
    const order = await Order.create(data)

    return order
  }

  async update({ params, request }) {
    const order = await Order.findOrFail(params.id)
    const data = request.only(['user_id', 'address', 'note', 'total'])

    order.merge(data)
    await order.save()

    return order
  }

  async destroy({ params }) {
    const order = await Order.findOrFail(params.id)
    return await order.delete()
  }
}

module.exports = OrderController
