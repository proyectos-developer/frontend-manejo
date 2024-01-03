import { datatypes } from "../actions/dataactions";

const initialState = {
    answer_list: [],
    menu_open: false,
    id_question: 0,
    number_question: 1,
    number_category: '',
    answer_1: {},
    answer_2: {},
    answer_3: {},
    answer_4: {},
    answer_5: {},
    answer_6: {},
    answer_7: {},
    answer_8: {},
    answer_9: {},
    answer_10: {},
    answer_11: {},
    answer_12: {},
    answer_13: {},
    answer_14: {},
    answer_15: {},
    answer_16: {},
    answer_17: {},
    answer_18: {},
    answer_19: {},
    answer_20: {},
    answer_21: {},
    answer_22: {},
    answer_23: {},
    answer_24: {},
    answer_25: {},
    answer_26: {},
    answer_27: {},
    answer_28: {},
    answer_29: {},
    answer_30: {},
    answer_31: {},
    answer_32: {},
    answer_33: {},
    answer_34: {},
    answer_35: {},
    answer_36: {},
    answer_37: {},
    answer_38: {},
    answer_39: {},
    answer_40: {}
}

const datareducer = (state = initialState, action) => {
    if (action.type === datatypes.SET_MENU_OPEN){
        const menu_open = action.menu_open
        return {
            ... state,
            menu_open
        }
    }else if (action.type === datatypes.SET_ANSWER_LIST){
        const answer_list = action.answer_list
        return {
            ... state,
            answer_list
        }
    }else if (action.type === datatypes.SET_ID_QUESTION){
        const id_question = action.id_question
        return {
            ... state,
            id_question
        }
    }else if (action.type === datatypes.SET_NUMBER_QUESTION){
        const number_question = action.number_question
        return {
            ... state,
            number_question
        }
    }else if (action.type === datatypes.SET_NUMBER_CATEGORY){
        const number_category = action.number_category
        return {
            ... state,
            number_category
        }
    }else if (action.type === datatypes.SET_ANSWER_1){
        const answer_1 = action.answer_1
        return {
            ... state,
            answer_1
        }
    }else if (action.type === datatypes.SET_ANSWER_2){
        const answer_2 = action.answer_2
        return {
            ... state,
            answer_2
        }
    }else if (action.type === datatypes.SET_ANSWER_3){
        const answer_3 = action.answer_3
        return {
            ... state,
            answer_3
        }
    }else if (action.type === datatypes.SET_ANSWER_4){
        const answer_4 = action.answer_4
        return {
            ... state,
            answer_4
        }
    }else if (action.type === datatypes.SET_ANSWER_5){
        const answer_5 = action.answer_5
        return {
            ... state,
            answer_5
        }
    }else if (action.type === datatypes.SET_ANSWER_6){
        const answer_6 = action.answer_6
        return {
            ... state,
            answer_6
        }
    }else if (action.type === datatypes.SET_ANSWER_7){
        const answer_7 = action.answer_7
        return {
            ... state,
            answer_7
        }
    }else if (action.type === datatypes.SET_ANSWER_8){
        const answer_8 = action.answer_8
        return {
            ... state,
            answer_8
        }
    }else if (action.type === datatypes.SET_ANSWER_9){
        const answer_9 = action.answer_9
        return {
            ... state,
            answer_9
        }
    }else if (action.type === datatypes.SET_ANSWER_10){
        const answer_11 = action.answer_11
        return {
            ... state,
            answer_11
        }
    }else if (action.type === datatypes.SET_ANSWER_11){
        const answer_11 = action.answer_11
        return {
            ... state,
            answer_11
        }
    }else if (action.type === datatypes.SET_ANSWER_12){
        const answer_12 = action.answer_12
        return {
            ... state,
            answer_12
        }
    }else if (action.type === datatypes.SET_ANSWER_13){
        const answer_13 = action.answer_13
        return {
            ... state,
            answer_13
        }
    }else if (action.type === datatypes.SET_ANSWER_14){
        const answer_14 = action.answer_14
        return {
            ... state,
            answer_14
        }
    }else if (action.type === datatypes.SET_ANSWER_15){
        const answer_15 = action.answer_15
        return {
            ... state,
            answer_15
        }
    }else if (action.type === datatypes.SET_ANSWER_16){
        const answer_16 = action.answer_16
        return {
            ... state,
            answer_16
        }
    }else if (action.type === datatypes.SET_ANSWER_17){
        const answer_17 = action.answer_17
        return {
            ... state,
            answer_17
        }
    }else if (action.type === datatypes.SET_ANSWER_18){
        const answer_18 = action.answer_18
        return {
            ... state,
            answer_18
        }
    }else if (action.type === datatypes.SET_ANSWER_19){
        const answer_19 = action.answer_19
        return {
            ... state,
            answer_19
        }
    }else if (action.type === datatypes.SET_ANSWER_20){
        const answer_20 = action.answer_20
        return {
            ... state,
            answer_20
        }
    }else if (action.type === datatypes.SET_ANSWER_21){
        const answer_21 = action.answer_21
        return {
            ... state,
            answer_21
        }
    }else if (action.type === datatypes.SET_ANSWER_22){
        const answer_22 = action.answer_22
        return {
            ... state,
            answer_22
        }
    }else if (action.type === datatypes.SET_ANSWER_23){
        const answer_23 = action.answer_23
        return {
            ... state,
            answer_23
        }
    }else if (action.type === datatypes.SET_ANSWER_24){
        const answer_24 = action.answer_24
        return {
            ... state,
            answer_24
        }
    }else if (action.type === datatypes.SET_ANSWER_25){
        const answer_25 = action.answer_25
        return {
            ... state,
            answer_25
        }
    }else if (action.type === datatypes.SET_ANSWER_26){
        const answer_26 = action.answer_26
        return {
            ... state,
            answer_26
        }
    }else if (action.type === datatypes.SET_ANSWER_27){
        const answer_27 = action.answer_27
        return {
            ... state,
            answer_27
        }
    }else if (action.type === datatypes.SET_ANSWER_28){
        const answer_28 = action.answer_28
        return {
            ... state,
            answer_28
        }
    }else if (action.type === datatypes.SET_ANSWER_29){
        const answer_29 = action.answer_29
        return {
            ... state,
            answer_29
        }
    }else if (action.type === datatypes.SET_ANSWER_30){
        const answer_30 = action.answer_30
        return {
            ... state,
            answer_30
        }
    }else if (action.type === datatypes.SET_ANSWER_31){
        const answer_31 = action.answer_31
        return {
            ... state,
            answer_31
        }
    }else if (action.type === datatypes.SET_ANSWER_32){
        const answer_32 = action.answer_32
        return {
            ... state,
            answer_32
        }
    }else if (action.type === datatypes.SET_ANSWER_33){
        const answer_33 = action.answer_33
        return {
            ... state,
            answer_33
        }
    }else if (action.type === datatypes.SET_ANSWER_34){
        const answer_34 = action.answer_34
        return {
            ... state,
            answer_34
        }
    }else if (action.type === datatypes.SET_ANSWER_35){
        const answer_35 = action.answer_35
        return {
            ... state,
            answer_35
        }
    }else if (action.type === datatypes.SET_ANSWER_36){
        const answer_36 = action.answer_36
        return {
            ... state,
            answer_36
        }
    }else if (action.type === datatypes.SET_ANSWER_37){
        const answer_37 = action.answer_37
        return {
            ... state,
            answer_37
        }
    }else if (action.type === datatypes.SET_ANSWER_38){
        const answer_38 = action.answer_38
        return {
            ... state,
            answer_38
        }
    }else if (action.type === datatypes.SET_ANSWER_39){
        const answer_39 = action.answer_39
        return {
            ... state,
            answer_39
        }
    }else if (action.type === datatypes.SET_ANSWER_40){
        const answer_40 = action.answer_40
        return {
            ... state,
            answer_40
        }
    }
    return state
}

export default datareducer