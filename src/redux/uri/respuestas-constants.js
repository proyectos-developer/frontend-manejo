import { constantes } from "./constantes";

export const respuestasConstants = (data = {}, reset = false, id = 0, categoria = 0, respuesta_usuario = 0, correcta_usuario = 0) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        new_respuesta: {
            path: `respuesta/store`,
            stateType: 'new_respuesta',
            data: data,
            reset: reset
        },
        get_respuesta: {
            path: `respuesta/${id}`,
            stateType: `get_respuesta`,
            reset: reset
        },
        update_respuesta: {
            path: `respuesta/actualizar/${id}/${respuesta_usuario}/${correcta_usuario}`,
            stateType: 'update_respuesta',
            data: data,
            reset: reset
        }
    }
}