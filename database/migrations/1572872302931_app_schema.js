'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AppSchema extends Schema {
  up () {
    this.create('apps', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.text('description', 254).notNullable()
      table.string('version', 60).notNullable()
    })
  }

  down () {
    this.drop('apps')
  }
}

module.exports = AppSchema
