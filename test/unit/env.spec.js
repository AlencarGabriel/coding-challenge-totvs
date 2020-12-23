'use strict'

const { test, trait } = use('Test/Suite')('Unit Test Env')
const Env = use('App/Models/Env');

/**
 * Testa o modelo Env criando um registro
 */
test('create env for UserTest1', async ({ assert }) => {
  await Env.create({
    user: "UserTest1",
    version: "12.1.27",
    db_type: "oracle"
  });
})

