'use strict'

class UserValidator {
  get rules() {
    return {
      name: 'required',
      username: 'required',
      email: 'required|email',
      password: 'required',
      user_type_id: 'required'
    }
  }

  get messages() {
    return {
      'name.required': 'Informe a propriedade name',
      'username.required': 'Informe a propriedade username',
      'email.required': 'Informe a propriedade email',
      'email.email': 'Você deve informar um endereço de email válido.',
      'password.required': 'Informe a propriedade password',
      'user_type_id.required': 'Informe a propriedade user_type_id'
    }
  }
}

module.exports = UserValidator
