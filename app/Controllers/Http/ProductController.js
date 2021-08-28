'use strict'

const Product = use('App/Models/Product')

class ProductController {
  async index() {
    return await Product.all()
  }

  async show({ params }) {
    const product = await Product.findOrFail(params.id)
    await product.load('tag')

    return product
  }

  async store({ request }) {
    const data = request.only(['name', 'price'])
    const product = await Product.create(data)

    return product
  }

  async update({ params, request }) {
    const product = await Product.findOrFail(params.id)
    const data = request.only(['name', 'price'])

    product.merge(data)
    await product.save()

    return product
  }

  async destroy({ params }) {
    const product = await Product.findOrFail(params.id)
    return await product.delete()
  }
}

module.exports = ProductController
