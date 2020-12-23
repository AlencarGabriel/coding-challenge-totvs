'use strict'

const Env = use('App/Models/Env');
const Utils = use("App/Services/Utils");

/**
 * Controller para gerenciamento dos ambientes
 */
class EnvController {

    /**
     * Método criador de registro de ambientes
     */
    async create({ request, response }) {

        // Captura os atributos necessários da requisição
        var data = request.only(['user', 'version', 'db_type']);

        try {
            // Grava o registro de ambiente criado
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

    }

    /**
     * Método para listar todos os registros de ambientes
     */
    async list() {
        return { items: await Env.all(), hasNext: false };
    }

}

module.exports = EnvController;
