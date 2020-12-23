'use strict'

const Env = use('App/Models/Env');
const EnvProtheus = use("App/Services/EnvProtheus");

const EnvHook = exports = module.exports = {}
const EnvsLimit = 2

/**
 * Realiza a validação do modelo
 * @param env Instancia atual do modelo Env
 */
EnvHook.validate = async (env) => {
    
    // Descobre a quantidade de ambientes que um usuário possui
    const countEnvs = await Env.query().where('user', '=', env.user).count();
    
    if (countEnvs[0].count >= EnvsLimit) {
        throw new Error(`Usuário ${env.user} já possui o limite de ${EnvsLimit} ambientes`)
    }

    // Só permite bancos oracle e postgres
    const database_valid = env.db_type.match(/^(oracle|postgres)$/i) 

    // Verifica a validade do banco de dados informado
    if (!database_valid) {
        throw new Error(`'${env.db_type}' não é um banco autorizado ou válido. Utilizar apenas Oracle ou Postgres`)
    }
    
}

/**
 * Gera o serviço e guarda o código gerado
 * @param env Instancia atual do modelo Env
 */
EnvHook.envProtheus = async (env) => {
    // Cria o ambiente Protheus do usuário
    env.service_code = await EnvProtheus.createEnv(env);
}
