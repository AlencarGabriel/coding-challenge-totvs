'use strict'

const { test, trait } = use('Test/Suite')('Functional Test Env')
const Env = use('App/Models/Env');

trait('Test/ApiClient')

test('post api env', async ({ client }) => {

  const env = {
    user: "UserTest2",
    version: "12.1.27",
    db_type: "postgres"
  }

  const response = await client.post('/env/create').send(env).end()

  response.assertStatus(201)
  
})

test('post api env - error 2 services', async ({ client }) => {

  const env = {
    user: "UserTest2",
    version: "12.1.27",
    db_type: "postgres"
  }

  const response = await client.post('/env/create').send(env).end()

  response.assertStatus(400)
  
})

test('get list of envs', async ({ client }) => {
  const response = await client.get('/envs').end()

  response.assertStatus(200)

})
