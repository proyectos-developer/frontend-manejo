import { constantes } from "./constantes";

export const clinicasConstants = (reset = false, search = 0) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        get_clinicas: {
            path: `clinicas`,
            stateType: 'get_clinicas',
            reset: reset
        },
        get_clinicas_search: {
            path: `clinicas/search/${search}`,
            stateType: 'get_clinicas_search',
            reset: reset
        }
    }
}