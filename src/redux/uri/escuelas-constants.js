import { constantes } from "./constantes";

export const escuelasConstants = () => {
    return {
        url: `${constantes(reset = false).url_principal[0].url}`,
        get_escuelas_manejo: {
            path: `escuelas_manejo`,
            stateType: 'get_escuelas_manejo',
            reset: reset
        }
    }
}