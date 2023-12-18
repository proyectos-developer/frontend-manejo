import { datatypes } from "../actions/dataactions";

const initialState = {
    lista_respuestas: [],
    menu_open: false,
    id_pregunta: 0,
    nro_pregunta: 1,
    nro_categoria: '',
    respuesta_uno: {},
    respuesta_dos: {},
    respuesta_tres: {},
    respuesta_cuatro: {},
    respuesta_cinco: {},
    respuesta_seis: {},
    respuesta_siete: {},
    respuesta_ocho: {},
    respuesta_nueve: {},
    respuesta_diez: {},
    respuesta_once: {},
    respuesta_doce: {},
    respuesta_trece: {},
    respuesta_catorce: {},
    respuesta_quince: {},
    respuesta_diezyseis: {},
    respuesta_diezysiete: {},
    respuesta_diezyocho: {},
    respuesta_diezynueve: {},
    respuesta_veinte: {},
    respuesta_veinteyuno: {},
    respuesta_veinteydos: {},
    respuesta_veinteytres: {},
    respuesta_veinteycuatro: {},
    respuesta_veinteycinco: {},
    respuesta_veinteyseis: {},
    respuesta_veinteysiete: {},
    respuesta_veinteyocho: {},
    respuesta_veinteynueve: {},
    respuesta_treinta: {},
    respuesta_treintayuno: {},
    respuesta_treintaydos: {},
    respuesta_treintaytres: {},
    respuesta_treintaycuatro: {},
    respuesta_treintaycinco: {},
    respuesta_treintayseis: {},
    respuesta_treintaysiete: {},
    respuesta_treintayocho: {},
    respuesta_treintaynueve: {},
    respuesta_cuarenta: {},
}

const datareducer = (state = initialState, action) => {
    if (action.type === datatypes.SET_MENU_OPEN){
        const menu_open = action.menu_open
        return {
            ... state,
            menu_open
        }
    }else if (action.type === datatypes.SET_LISTA_RESPUESTAS){
        const lista_respuestas = action.lista_respuestas
        return {
            ... state,
            lista_respuestas
        }
    }else if (action.type === datatypes.SET_ID_PREGUNTA){
        const id_pregunta = action.id_pregunta
        return {
            ... state,
            id_pregunta
        }
    }else if (action.type === datatypes.SET_NRO_PREGUNTA){
        const nro_pregunta = action.nro_pregunta
        return {
            ... state,
            nro_pregunta
        }
    }else if (action.type === datatypes.SET_NRO_CATEGORIA){
        const nro_categoria = action.nro_categoria
        return {
            ... state,
            nro_categoria
        }
    }else if (action.type === datatypes.SET_RESPUESTA_UNO){
        const respuesta_uno = action.respuesta_uno
        return {
            ... state,
            respuesta_uno
        }
    }else if (action.type === datatypes.SET_RESPUESTA_DOS){
        const respuesta_dos = action.respuesta_dos
        return {
            ... state,
            respuesta_dos
        }
    }else if (action.type === datatypes.SET_RESPUESTA_TRES){
        const respuesta_tres = action.respuesta_tres
        return {
            ... state,
            respuesta_tres
        }
    }else if (action.type === datatypes.SET_RESPUESTA_CUATRO){
        const respuesta_cuatro = action.respuesta_cuatro
        return {
            ... state,
            respuesta_cuatro
        }
    }else if (action.type === datatypes.SET_RESPUESTA_CINCO){
        const respuesta_cinco = action.respuesta_cinco
        return {
            ... state,
            respuesta_cinco
        }
    }else if (action.type === datatypes.SET_RESPUESTA_SEIS){
        const respuesta_seis = action.respuesta_seis
        return {
            ... state,
            respuesta_seis
        }
    }else if (action.type === datatypes.SET_RESPUESTA_SIETE){
        const respuesta_siete = action.respuesta_siete
        return {
            ... state,
            respuesta_siete
        }
    }else if (action.type === datatypes.SET_RESPUESTA_OCHO){
        const respuesta_ocho = action.respuesta_ocho
        return {
            ... state,
            respuesta_ocho
        }
    }else if (action.type === datatypes.SET_RESPUESTA_NUEVE){
        const respuesta_nueve = action.respuesta_nueve
        return {
            ... state,
            respuesta_nueve
        }
    }else if (action.type === datatypes.SET_RESPUESTA_DIEZ){
        const respuesta_diez = action.respuesta_diez
        return {
            ... state,
            respuesta_diez
        }
    }else if (action.type === datatypes.SET_RESPUESTA_ONCE){
        const respuesta_once = action.respuesta_once
        return {
            ... state,
            respuesta_once
        }
    }else if (action.type === datatypes.SET_RESPUESTA_DOCE){
        const respuesta_doce = action.respuesta_doce
        return {
            ... state,
            respuesta_doce
        }
    }else if (action.type === datatypes.SET_RESPUESTA_TRECE){
        const respuesta_trece = action.respuesta_trece
        return {
            ... state,
            respuesta_trece
        }
    }else if (action.type === datatypes.SET_RESPUESTA_CATORCE){
        const respuesta_catorce = action.respuesta_catorce
        return {
            ... state,
            respuesta_catorce
        }
    }else if (action.type === datatypes.SET_RESPUESTA_QUINCE){
        const respuesta_quince = action.respuesta_quince
        return {
            ... state,
            respuesta_quince
        }
    }else if (action.type === datatypes.SET_RESPUESTA_DIEZYSEIS){
        const respuesta_diezyseis = action.respuesta_diezyseis
        return {
            ... state,
            respuesta_diezyseis
        }
    }else if (action.type === datatypes.SET_RESPUESTA_DIEZYSIETE){
        const respuesta_diezysiete = action.respuesta_diezysiete
        return {
            ... state,
            respuesta_diezysiete
        }
    }else if (action.type === datatypes.SET_RESPUESTA_DIEZYOCHO){
        const respuesta_diezyocho = action.respuesta_diezyocho
        return {
            ... state,
            respuesta_diezyocho
        }
    }else if (action.type === datatypes.SET_RESPUESTA_DIEZYNUEVE){
        const respuesta_diezynueve = action.respuesta_diezynueve
        return {
            ... state,
            respuesta_diezynueve
        }
    }else if (action.type === datatypes.SET_RESPUESTA_VEINTE){
        const respuesta_veinte = action.respuesta_veinte
        return {
            ... state,
            respuesta_veinte
        }
    }else if (action.type === datatypes.SET_RESPUESTA_VEINTEYUNO){
        const respuesta_veinteyuno = action.respuesta_veinteyuno
        return {
            ... state,
            respuesta_veinteyuno
        }
    }else if (action.type === datatypes.SET_RESPUESTA_VEINTEYDOS){
        const respuesta_veinteydos = action.respuesta_veinteydos
        return {
            ... state,
            respuesta_veinteydos
        }
    }else if (action.type === datatypes.SET_RESPUESTA_VEINTEYTRES){
        const respuesta_veinteytres = action.respuesta_veinteytres
        return {
            ... state,
            respuesta_veinteytres
        }
    }else if (action.type === datatypes.SET_RESPUESTA_VEINTEYCUATRO){
        const respuesta_veinteycuatro = action.respuesta_veinteycuatro
        return {
            ... state,
            respuesta_veinteycuatro
        }
    }else if (action.type === datatypes.SET_RESPUESTA_VEINTEYCINCO){
        const respuesta_veinteycinco = action.respuesta_veinteycinco
        return {
            ... state,
            respuesta_veinteycinco
        }
    }else if (action.type === datatypes.SET_RESPUESTA_VEINTEYSEIS){
        const respuesta_veinteyseis = action.respuesta_veinteyseis
        return {
            ... state,
            respuesta_veinteyseis
        }
    }else if (action.type === datatypes.SET_RESPUESTA_VEINTEYSIETE){
        const respuesta_veinteysiete = action.respuesta_veinteysiete
        return {
            ... state,
            respuesta_veinteysiete
        }
    }else if (action.type === datatypes.SET_RESPUESTA_VEINTEYOCHO){
        const respuesta_veinteyocho = action.respuesta_veinteyocho
        return {
            ... state,
            respuesta_veinteyocho
        }
    }else if (action.type === datatypes.SET_RESPUESTA_VEINTEYNUEVE){
        const respuesta_veinteynueve = action.respuesta_veinteynueve
        return {
            ... state,
            respuesta_veinteynueve
        }
    }else if (action.type === datatypes.SET_RESPUESTA_TREINTA){
        const respuesta_treinta = action.respuesta_treinta
        return {
            ... state,
            respuesta_treinta
        }
    }else if (action.type === datatypes.SET_RESPUESTA_TREINTAYUNO){
        const respuesta_treintayuno = action.respuesta_treintayuno
        return {
            ... state,
            respuesta_treintayuno
        }
    }else if (action.type === datatypes.SET_RESPUESTA_TREINTAYDOS){
        const respuesta_treintaydos = action.respuesta_treintaydos
        return {
            ... state,
            respuesta_treintaydos
        }
    }else if (action.type === datatypes.SET_RESPUESTA_TREINTAYTRES){
        const respuesta_treintaytres = action.respuesta_treintaytres
        return {
            ... state,
            respuesta_treintaytres
        }
    }else if (action.type === datatypes.SET_RESPUESTA_TREINTAYCUATRO){
        const respuesta_treintaycuatro = action.respuesta_treintaycuatro
        return {
            ... state,
            respuesta_treintaycuatro
        }
    }else if (action.type === datatypes.SET_RESPUESTA_TREINTAYCINCO){
        const respuesta_treintaycinco = action.respuesta_treintaycinco
        return {
            ... state,
            respuesta_treintaycinco
        }
    }else if (action.type === datatypes.SET_RESPUESTA_TREINTAYSEIS){
        const respuesta_treintayseis = action.respuesta_treintayseis
        return {
            ... state,
            respuesta_treintayseis
        }
    }else if (action.type === datatypes.SET_RESPUESTA_TREINTAYSIETE){
        const respuesta_treintaysiete = action.respuesta_treintaysiete
        return {
            ... state,
            respuesta_treintaysiete
        }
    }else if (action.type === datatypes.SET_RESPUESTA_TREINTAYOCHO){
        const respuesta_treintayocho = action.respuesta_treintayocho
        return {
            ... state,
            respuesta_treintayocho
        }
    }else if (action.type === datatypes.SET_RESPUESTA_TREINTAYNUEVE){
        const respuesta_treintaynueve = action.respuesta_treintaynueve
        return {
            ... state,
            respuesta_treintaynueve
        }
    }else if (action.type === datatypes.SET_RESPUESTA_CUARENTA){
        const respuesta_cuarenta = action.respuesta_cuarenta
        return {
            ... state,
            respuesta_cuarenta
        }
    }
    return state
}

export default datareducer