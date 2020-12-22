'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnvSchema extends Schema {
  up() {
    this.create('envs', (table) => {
      table.increments()
      table.string('user', 50).notNullable()
      table.string('version', 50).notNullable()
      table.string('db_type', 10).notNullable()
      table.string('service_code', 50).notNullable().unique()
      table.timestamps()

      table.index(
        ['user'],
        'envs_user_idx'
      );

      table.index(
        ['service_code'],
        'envs_service_code_idx'
      );

    })
  }

  down() {
    this.drop('envs')
  }
}

module.exports = EnvSchema
