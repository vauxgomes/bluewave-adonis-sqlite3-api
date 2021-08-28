'use strict'

const Tag = use('App/Models/Tag')

class TagController {
  async index() {
    return await Tag.all()
  }

  async show({ params }) {
    const tag = await Tag.findOrFail(params.id)
    return tag
  }

  async store({ request }) {
    const data = request.only(['name', 'active'])
    const tag = await Tag.create(data)
    
    return tag
  }

  async update({ params, request }) {
    const tag = await Tag.findOrFail(params.id)
    const data = request.only(['name', 'active'])

    tag.merge(data)
    await tag.save()

    return tag
  }

  async destroy({ params }) {
    const tag = await Tag.findOrFail(params.id)
    return await tag.delete()
  }
}

module.exports = TagController
