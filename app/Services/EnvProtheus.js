"use strict";

const {exec} = require("child_process");

module.exports = class EnvProtheus {

    /**
     * Método para criação de um ambiente Protheus
     * @param data Modelo de Env
     */
    static async createEnv(data) {
        // await exec("ls -la", (error, stdout, stderr) => {
        //     if (error) {
        //         console.log(`error: ${error.message}`);
        //         return;
        //     }
        //     if (stderr) {
        //         console.log(`stderr: ${stderr}`);
        //         return;
        //     }
        //     console.log(`stdout: ${stdout}`);
        // });
        
        // Como não é conhecido o executável para criação de ambiente, será sorteado um código
        return Math.floor(Math.random() * 100).toString();
    }
}