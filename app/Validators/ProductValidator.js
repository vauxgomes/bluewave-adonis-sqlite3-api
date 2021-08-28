'use strict'

class ProductValidator {
  get rules() {
    return {
      name: 'required',
      price: 'required'
    }
  }

  get messages() {
    return {
      'name.required': 'Informe a propriedade name',
      'price.required': 'Informe a propriedade price'
    }
  }
}
module.exports = ProductValidator
