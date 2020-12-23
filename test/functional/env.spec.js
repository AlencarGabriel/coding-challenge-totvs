'use strict'

const { test, trait } = use('Test/Suite')('Functional Test Env')
const Env = use('App/Models/Env');

trait('Test/ApiClient')

/**
 * Testa o endpoint para criar ambiente
 */
test('post env for UserTest1', async ({ client }) => {

  const env = {
    user: "UserTest1",
    version: "12.1.27",
    db_type: "postgres"
  }

  const response = await client.post('/env/create').send(env).end()

  response.assertStatus(201)
  
})

/**
 * Testa regra de negócio (mais de 2 serviços p/ mesmo usuário) do modelo chamando o endpoint de criação de ambiente
 * @obs Até aqui já foi criado dois ambientes para o mesmo usuário. Por isso tem que dar erro
 */
test('post env for UserTest1 - error 2 services', async ({ client }) => {

  const env = {
    user: "UserTest1",
    version: "12.1.27",
    db_type: "postgres"
  }

  const response = await client.post('/env/create').send(env).end()

  response.assertStatus(500)
  
})

/**
 * Testa regra de negócio (banco inválido) do modelo chamando o endpoint de criação de ambiente
 */
test('post env for UserTest2 - error db invalid', async ({ client }) => {

  const env = {
    user: "UserTest2",
    version: "12.1.27",
    db_type: "sql server"
  }

  const response = await client.post('/env/create').send(env).end()

  response.assertStatus(500)
  
})

/**
 * Testa o endpoint para retornar os ambientes cadastrados
 */
test('get list of envs', async ({ client }) => {
  const response = await client.get('/envs').end()

  response.assertStatus(200)

})
