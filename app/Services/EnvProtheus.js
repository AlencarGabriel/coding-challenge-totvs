"use strict";

const {exec} = require("child_process");

module.exports = class EnvProtheus {

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

        return Math.floor(Math.random() * 100).toString();
    }
}