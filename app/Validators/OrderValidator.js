'use strict'

class OrderValidator {
  get rules() {
    return {
      user_id: 'required',
      address: 'required',
      total: 'required'
    }
  }

  get messages() {
    return {
      'user_id.required': 'Informe a propriedade user_id',
      'address.required': 'Informe a propriedade address',
      'total.required': 'Informe a propriedade total '
    }
  }
}

module.exports = OrderValidator
