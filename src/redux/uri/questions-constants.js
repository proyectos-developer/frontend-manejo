import { constants } from "./constants";

export const questionsConstants = (data = {}, reset = false, id = 0, categoria = 0) => {
    return {
        url: `${constants().url_principal[0].url}`,
        get_questions: {
            path: `${categoria}`,
            stateType: 'get_questions',
            reset: reset
        },
        get_question: {
            path: `${categoria}/${id}`,
            stateType: 'get_question',
            reset: reset
        }
    }
}