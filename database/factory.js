'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/User', (faker, i, data = {}) => {
  return {
    username: faker.name(),
    email: faker.email(),
    password: faker.string(),
    phone: faker.phone({ country: "pt" }),
    ... data
  }
})

Factory.blueprint('App/Models/Token', (faker, i, data = {}) => {
  return {
    token: faker.string(),
    phone: faker.phone({ country: "pt" }),
    ... data
  }
})
