import { constants } from "./constants";

export const clinicsConstants = (reset = false, search = 0) => {
    return {
        url: `${constants().url_principal[0].url}`,
        get_clinics: {
            path: `clinics`,
            stateType: 'get_clinics',
            reset: reset
        },
        get_clinics_search: {
            path: `clinics/search/${search}`,
            stateType: 'get_clinics_search',
            reset: reset
        }
    }
}