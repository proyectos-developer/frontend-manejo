import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ICON } from '../../../assets/constants/images'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler'
import BarraSuperior from '../comun/barrasuperior'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import {preguntasdata} from '../../../redux/slice/preguntasdata'
import { preguntasConstants } from '../../../redux/uri/preguntas-constants'
import { useEffect } from 'react'
import { set_id_pregunta, set_nro_pregunta, set_respuesta_catorce, set_respuesta_cinco, set_respuesta_cuarenta, set_respuesta_cuatro, set_respuesta_diez, set_respuesta_diezynueve, 
         set_respuesta_diezyocho, 
         set_respuesta_diezyseis, set_respuesta_diezysiete, set_respuesta_doce, set_respuesta_dos, set_respuesta_nueve, set_respuesta_ocho, set_respuesta_once, 
         set_respuesta_quince, set_respuesta_seis, set_respuesta_siete, set_respuesta_trece, set_respuesta_treinta, set_respuesta_treintaycinco, 
         set_respuesta_treintaycuatro, set_respuesta_treintaydos, set_respuesta_treintaynueve, set_respuesta_treintayocho, set_respuesta_treintayseis, 
         set_respuesta_treintaysiete, set_respuesta_treintaytres, set_respuesta_treintayuno, set_respuesta_tres, set_respuesta_uno, set_respuesta_veinte, 
         set_respuesta_veinteycinco, set_respuesta_veinteycuatro, set_respuesta_veinteydos, set_respuesta_veinteynueve, set_respuesta_veinteyocho, 
         set_respuesta_veinteyseis, set_respuesta_veinteysiete, set_respuesta_veinteytres, set_respuesta_veinteyuno } from '../../../redux/actions/dataactions'

export default function CategoriaUnoPreguntas ({navigation}) {

    const dispatch = useDispatch ()
    const isFocused = useIsFocused()

    const [id_inicial, setIdInicial] = useState (0)
    const [opcion,   setOpcion]   = useState ('')
    const [tipo_pregunta, setTipoPregunta] = useState ('')
    const [pregunta, setPregunta] = useState ('')
    const [opcion_a, setOpcionA]  = useState ('')
    const [opcion_b, setOpcionB]  = useState ('')
    const [opcion_c, setOpcionC]  = useState ('')
    const [opcion_d, setOpcionD]  = useState ('')
    const [respuesta_correcta, setRespuestaCorrecta]  = useState ('')

    const {get_pregunta} = useSelector(({preguntas}) => preguntas)
    const begin = useSelector(({begin}) => begin)
    const {id_pregunta, nro_pregunta} = useSelector(({datareducer}) => datareducer)

    useEffect (() => {
        if (isFocused){
            setIdInicial(id_pregunta)
            dispatch(preguntasdata(preguntasConstants({}, false, id_pregunta, 'preguntas_categoria_uno').get_pregunta))
        }
    }, [isFocused])

    useEffect (() => {
        if (get_pregunta && get_pregunta.pregunta){
            setPregunta(get_pregunta.pregunta.pregunta)
            setTipoPregunta(get_pregunta.pregunta.tipo_pregunta)
            setOpcionA(get_pregunta.pregunta.opcion_a)
            setOpcionB(get_pregunta.pregunta.opcion_b)
            setOpcionC(get_pregunta.pregunta.opcion_c)
            setOpcionD(get_pregunta.pregunta.opcion_d)
            setRespuestaCorrecta (get_pregunta.pregunta.respuesta)
        }
    }, [get_pregunta])

    const siguiente_pregunta = () => {
        if (opcion === ''){

        }else{
            const num_pregunta = nro_pregunta
            const update_data = {
                'usuario': opcion,
                'correcta': opcion !== respuesta_correcta ? false : true,
                'respuesta': respuesta_correcta
            }      
            setOpcion('')

            dispatch (num_pregunta === 1 ? set_respuesta_uno(update_data) : 
                      num_pregunta === 2 ? set_respuesta_dos (update_data) : 
                      num_pregunta === 3 ? set_respuesta_tres(update_data) :
                      num_pregunta === 4 ? set_respuesta_cuatro (update_data) : 
                      num_pregunta === 5 ? set_respuesta_cinco(update_data) : 
                      num_pregunta === 6 ? set_respuesta_seis(update_data) :
                      num_pregunta === 7 ? set_respuesta_siete (update_data) : 
                      num_pregunta === 8 ? set_respuesta_ocho(update_data) : 
                      num_pregunta === 9 ? set_respuesta_nueve(update_data) : 
                      num_pregunta === 10 ? set_respuesta_diez (update_data) :
                      num_pregunta === 11 ? set_respuesta_once(update_data) : 
                      num_pregunta === 12 ? set_respuesta_doce (update_data) : 
                      num_pregunta === 13 ? set_respuesta_trece(update_data) :
                      num_pregunta === 14 ? set_respuesta_catorce (update_data) : 
                      num_pregunta === 15 ? set_respuesta_quince(update_data) : 
                      num_pregunta === 16 ? set_respuesta_diezyseis(update_data) :
                      num_pregunta === 17 ? set_respuesta_diezysiete (update_data) : 
                      num_pregunta === 18 ? set_respuesta_diezyocho(update_data) : 
                      num_pregunta === 19 ? set_respuesta_diezynueve(update_data) :
                      num_pregunta === 20 ? set_respuesta_veinte (update_data) :
                      num_pregunta === 21 ? set_respuesta_veinteyuno(update_data) : 
                      num_pregunta === 22 ? set_respuesta_veinteydos (update_data) : 
                      num_pregunta === 23 ? set_respuesta_veinteytres(update_data) :
                      num_pregunta === 24 ? set_respuesta_veinteycuatro (update_data) : 
                      num_pregunta === 25 ? set_respuesta_veinteycinco(update_data) : 
                      num_pregunta === 26 ? set_respuesta_veinteyseis(update_data) :
                      num_pregunta === 27 ? set_respuesta_veinteysiete (update_data) : 
                      num_pregunta === 28 ? set_respuesta_veinteyocho(update_data) : 
                      num_pregunta === 29 ? set_respuesta_veinteynueve(update_data) : 
                      num_pregunta === 30 ? set_respuesta_treinta (update_data) :
                      num_pregunta === 31 ? set_respuesta_treintayuno(update_data) : 
                      num_pregunta === 32 ? set_respuesta_treintaydos (update_data) : 
                      num_pregunta === 33 ? set_respuesta_treintaytres(update_data) :
                      num_pregunta === 34 ? set_respuesta_treintaycuatro (update_data) : 
                      num_pregunta === 35 ? set_respuesta_treintaycinco(update_data) : 
                      num_pregunta === 36 ? set_respuesta_treintayseis(update_data) :
                      num_pregunta === 37 ? set_respuesta_treintaysiete (update_data) : 
                      num_pregunta === 38 ? set_respuesta_treintayocho(update_data) : 
                      num_pregunta === 39 ? set_respuesta_treintaynueve(update_data) : 
                                            set_respuesta_cuarenta (update_data))
            dispatch(set_id_pregunta(parseFloat(id_pregunta) + 1))
            dispatch(set_nro_pregunta(num_pregunta + 1))
            dispatch(preguntasdata(preguntasConstants({}, false, parseFloat(id_pregunta) + 1, 'preguntas_categoria_uno').get_pregunta))
        }
    }

    const finalizar_cuestionario = () => {
        if (opcion !== ''){
            const update_data = {
                'usuario': opcion,
                'correcta': opcion !== respuesta_correcta ? false : true,
                'respuesta': respuesta_correcta
            }    
            setOpcion ('')
            dispatch(set_respuesta_cuarenta (update_data))
            dispatch(preguntasdata(preguntasConstants({}, true, 0, 0).get_pregunta))
            navigation.navigate('ResultadosScreen')
        }
    }


    return (
        <GestureHandlerRootView style={{flex: 1, width: '100%'}}>
            
            <BarraSuperior navigation={navigation} categoria={'CATEGORÍA 1 - B2A'} nro_categoria={'preguntas_categoria_uno'}/>
            
            <View style={styles.container}>
                <Text style={styles.texto_pregunta}>{pregunta}</Text>
                {
                    tipo_pregunta === '0' ? (
                        <TouchableOpacity style={styles.opcion_respuesta} onPress={() => setOpcion ('a')}>
                            <Image source={opcion === 'a' ? ICON.RADIO_SELECT : ICON.RADIO_UNSELECT} style={styles.radio_select}/>
                            <Text style={styles.texto_opcion}>{opcion_a}</Text>
                        </TouchableOpacity>
                    ) : tipo_pregunta === '1' ? (
                        <View style={styles.opcion_imagen}>
                            <Image source={ICON.PREGUNTA_IMAGEN} />
                        </View>
                    ) :null
                }
                <TouchableOpacity style={styles.opcion_respuesta} onPress={() => setOpcion ('b')}>
                    <Image source={opcion === 'b' ? ICON.RADIO_SELECT : ICON.RADIO_UNSELECT} style={styles.radio_select}/>
                    <Text style={styles.texto_opcion}>{opcion_b}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opcion_respuesta} onPress={() => setOpcion ('c')}>
                    <Image source={opcion === 'c' ? ICON.RADIO_SELECT : ICON.RADIO_UNSELECT} style={styles.radio_select}/>
                    <Text style={styles.texto_opcion}>{opcion_c}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opcion_respuesta} onPress={() => setOpcion ('d')}>
                    <Image source={opcion === 'd' ? ICON.RADIO_SELECT : ICON.RADIO_UNSELECT} style={styles.radio_select}/>
                    <Text style={styles.texto_opcion}>{opcion_d}</Text>
                </TouchableOpacity>

                {
                    nro_pregunta === 40 ? (
                        <TouchableOpacity style={[styles.boton_siguiente, {backgroundColor: '#ff0000', marginBottom: 11}]} onPress={() => finalizar_cuestionario()}>
                            <Text style={styles.texto_finalizar}>Finalizar</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={styles.boton_siguiente} onPress={() => siguiente_pregunta()}>
                            <Text style={styles.texto_siguiente}>Siguiente</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
            {
              begin.loading ? ( 
                <View style={styles.view_loading}>
                  <Image source={ICON.LOADING_SCREEN} style={styles.icono_loading}/>
                </View>
              ) : null
            }
        </GestureHandlerRootView>
    )

}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 30,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    texto_pregunta: {
        fontFamily: 'Nunito-Black', fontSize: 13, lineHeight: 18, color: '#252525', 
        textAlign: 'center', 
        marginBottom: 21
    },
    opcion_respuesta: {
        width: 330,
        height: 81,
        marginBottom: 19,
        backgroundColor: 'white',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        paddingRight: 13,
        paddingLeft: 18
    },
    opcion_imagen: {
        width: 150,
        height: 95,
        marginBottom: 15
    },
    radio_select: {
        width: 25,
        height: 25,
        marginRight: 16
    },
    texto_opcion: {
        fontFamily: 'Nunito-Regular', fontSize: 14, lineHeight: 18, color: '#252525',
        width: 258
    },
    container_botones: {
        width: '100%',
        alignItems: 'center',
        height: 48
    },
    boton_siguiente: {
        backgroundColor: '#ff0000',
        borderRadius: 40,
        width: 270,
        height: 58,
        marginLeft: 45,
        marginRight: 45,
        marginTop: 22
    },
    boton_finalizar: {
        borderRadius: 40,
        width: 223,
        height: 48
    },
    texto_finalizar: {
        fontSize: 25,
        lineHeight: 48,
        color: 'white',
        fontFamily: 'Nunito-Bold',
        textAlign: 'center'
    },
    texto_siguiente: {
        fontFamily: 'Nunito-Bold', fontSize: 25, lineHeight: 58, color: 'white', textAlign: 'center'
    },
    view_loading: {
      position: 'absolute',
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignSelf: 'center'
    },
    icono_loading: {
      width: '100%'
    }
})