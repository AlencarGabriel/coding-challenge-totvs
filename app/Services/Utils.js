"use strict";

module.exports = class Utils {

    /**
     * @description
     * Função de retorno de message. Utiliza o modelo padrão po-ui
     * @url
     * https://po-ui.io/documentation/po-http-interceptor
     */
    static success(data, message, { request, response, detailedMessage, code }) {
        const status = code || 200;
        const messages = [
            {
                code: status.toString(),
                message: message,
                detailedMessage: detailedMessage,
                type: "success",
            },
        ];
        data._messages = messages;
        return response.status(status).json(data);
    }

    /**
     * @description
     * Função de retorno de message. Utiliza o modelo padrão po-ui
     * @url
     * https://po-ui.io/documentation/po-http-interceptor
     */
    static error(message, { response, detailedMessage, code, details }) {
        const status = code || 400;
        return response.status(status).send({
            code: status.toString(),
            message,
            detailedMessage,
            details,
            type: status === 500 ? "error" : "warning",
        });
    }

};
