import { constantes } from "./constantes";

export const escuelasConstants = (reset = false, search = 0) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        get_escuelas_manejo: {
            path: `escuelas_manejo`,
            stateType: 'get_escuelas_manejo',
            reset: reset
        },
        get_escuelas_manejo_search: {
            path: `escuelas_manejo/search/${search}`,
            stateType: 'get_escuelas_manejo_search',
            reset: reset
        }
    }
}