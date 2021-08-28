# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

#### Migrations
```js
adonis make:migration TABLENAME
```

#### Seeds
```js
adonis make:seed SEEDERNAME

//
adonis seed
```

#### Models
```js
adonis make:model MODELNAME
```

#### Controllers
```js
adonis make:controller CONTROLLERNAME
```

#### Routes
```js
adonis route:list
```

#### Validators
```js
// npm install @adonisjs/validator
// adonis install @adonisjs/validator
adonis install @adonisjs/validator@legacy
```
