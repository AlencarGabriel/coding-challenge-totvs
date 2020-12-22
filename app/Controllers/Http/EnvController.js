'use strict'

const Env = use('App/Models/Env');
const EnvProtheus = use("App/Services/EnvProtheus");
const Utils = use("App/Services/Utils");
const EnvsLimit = 2

class EnvController {

    /**
     * Método criador de registro de ambientes
     */
    async create({ request, response }) {
        var data = request.only(['user', 'version', 'db_type']);
        const countEnvs = await Env.query().where('user', '=', data.user).count();
        const database_valid = data.db_type.match(/^(oracle|postgres)$/i)

        // Verifica a validade do banco de dados informado
        if (!database_valid) {

            return Utils.error(
                `'${data.db_type}' não é um banco autorizado ou válido`,
                { response, code: 400, detailedMessage: "Utilizar apenas Oracle ou Postgres" }
            );

        }

        // Verifica se o usuário já possui o limite máximo de ambientes permitidos
        if (countEnvs[0].count < EnvsLimit) {
            // Cria o ambiente Protheus do usuário
            data.service_code = await EnvProtheus.createEnv(data);

            // Grava o registro de ambiente criado
            try {
                const env = await Env.create(data);

                return Utils.success(
                    env,
                    "Ambiente inserido",
                    { request, response, code: 201 }
                );

            } catch (error) {
                return Utils.error(
                    "Ocorreu um erro ao inserir os dados. " + error.message,
                    { response, code: 500, detailedMessage: error.stack }
                );
            }

        } else {

            return Utils.error(
                `Usuário ${data.user} já possui o limite de ${EnvsLimit} ambientes`,
                { response, code: 400, detailedMessage: "" }
            );

        }

    }

    /**
     * Método para listar todos os registros de ambientes
     */
    async list() {
        return await Env.all();
    }


}

module.exports = EnvController;
