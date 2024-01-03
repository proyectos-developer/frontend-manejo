import { constants } from "./constants";

export const drivingschoolsConstants = (reset = false, search = 0) => {
    return {
        url: `${constants().url_principal[0].url}`,
        get_driving_schools: {
            path: `driving_school`,
            stateType: 'get_driving_schools',
            reset: reset
        },
        get_driving_schools_search: {
            path: `driving_school/search/${search}`,
            stateType: 'get_driving_schools_search',
            reset: reset
        }
    }
}