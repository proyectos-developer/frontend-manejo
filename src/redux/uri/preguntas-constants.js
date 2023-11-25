import { constantes } from "./constantes";

export const preguntasConstants = (data = {}, reset = false, id = 0, categoria = 0) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        get_preguntas: {
            path: `${categoria}`,
            stateType: 'get_preguntas',
            reset: reset
        },
        get_pregunta: {
            path: `${categoria}/${id}`,
            stateType: 'get_pregunta',
            reset: reset
        }
    }
}