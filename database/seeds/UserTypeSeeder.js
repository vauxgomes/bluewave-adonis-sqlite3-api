'use strict'

const Database = use('Database')

class UserTypeSeeder {
  async run() {
    await Database.table('user_types').insert({ name: 'Administrador' })
    await Database.table('user_types').insert({ name: 'Colaborador' })
    await Database.table('user_types').insert({ name: 'Cliente' })
  }
}

module.exports = UserTypeSeeder
