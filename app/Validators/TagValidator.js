'use strict'

class TagValidator {
  get rules() {
    return {
      name: 'required'
    }
  }

  get messages() {
    return {
      'name.required': 'Informe a propriedade name'
    }
  }
}

module.exports = TagValidator
