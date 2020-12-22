'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Env extends Model {

    /**
     * @description
     * Método para configurar os campos que não serão retornados por padrão do modelo.
     */
    static get hidden() {
        return [
            "created_at",
            "updated_at"
        ];
    }

}

module.exports = Env
