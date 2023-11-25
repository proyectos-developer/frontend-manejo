import { constantes } from "./constantes";

export const beginConstants = (data = {}, reset = false, id = 0, token = 0) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        login_user: {
            path: `login`,
            stateType: 'login_user',
            reset: reset,
            data: data
        },
        register_user: {
            path: `register`,
            stateType: 'register_user',
            data: data,
            reset: reset
        },
        get_user: {
            path: `user`,
            stateType: 'get_user',
            data: data,
            reset: reset,
            token: token
        },
    }
}