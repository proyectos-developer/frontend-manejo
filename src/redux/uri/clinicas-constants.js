import { constantes } from "./constantes";

export const clinicasConstants = (reset = false) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        get_clinicas: {
            path: `clinicas`,
            stateType: 'get_clinicas',
            reset: reset
        }
    }
}