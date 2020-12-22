'use strict'

const { test, trait } = use('Test/Suite')('Unit Test Env')
const EnvProtheus = use("App/Services/EnvProtheus");
const Env = use('App/Models/Env');

test('create env', async ({ assert }) => {
  const env = {
    user: "UserTest2",
    version: "12.1.27",
    db_type: "oracle"
  }

  env.service_code = await EnvProtheus.createEnv(env)

  await Env.create(env);
})

