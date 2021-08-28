'use strict'

const Env = use('Env')
const Route = use('Route')

Route.get('/', () => {
  return {
    greeting: 'Welcome to the Service Layer API',
    'sys-version': Env.get('SYS_VERSION')
  }
})

// Users
// Route.get('/users', 'UserController.index')
// Route.get('/users/:id', 'UserController.show')
// Route.post('/users', 'UserController.store')
// Route.put('/users/:id', 'UserController.update')
// Route.delete('/users/:id', 'UserController.destroy')

Route.resource('tags', 'TagController')
  .apiOnly()
  .validator(
    new Map([
      [['tags.store'], ['TagValidator']],
      [['tags.update'], ['TagValidator']]
    ])
  )

Route.resource('users', 'UserController')
  .apiOnly()
  .validator(
    new Map([
      [['users.store'], ['UserValidator']],
      [['users.update'], ['UserValidator']]
    ])
  )

Route.resource('products', 'ProductController')
  .apiOnly()
  .validator(
    new Map([
      [['products.store'], ['ProductValidator']],
      [['products.update'], ['ProductValidator']]
    ])
  )

  Route.resource('orders', 'OrderController')
  .apiOnly()
  .validator(
    new Map([
      [['orders.store'], ['OrderValidator']],
      [['orders.update'], ['OrderValidator']]
    ])
  )
