'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/**
 * Modelo da entidade Env
 */
class Env extends Model {

    static boot () {
        super.boot()
        this.addHook('beforeCreate', 'EnvHook.validate')
        this.addHook('beforeCreate', 'EnvHook.envProtheus')
      }

    /**
     * Método para configurar os campos que não serão retornados por padrão do modelo
     */
    static get hidden() {
        return [
            "created_at",
            "updated_at"
        ];
    }

}

module.exports = Env
