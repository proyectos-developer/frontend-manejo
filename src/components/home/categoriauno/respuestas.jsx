import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ICON } from '../../../assets/constants/images'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler'
import BarraSuperiorRespuestas from '../comun/barrasuperiorrespuestas'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import {preguntasdata} from '../../../redux/slice/preguntasdata'
import { preguntasConstants } from '../../../redux/uri/preguntas-constants'
import { useEffect } from 'react'
import { set_id_pregunta, set_nro_pregunta } from '../../../redux/actions/dataactions'

export default function CategoriaUnoRespuestas ({navigation}) {

    const dispatch = useDispatch ()
    const isFocused = useIsFocused()

    const [tipo_pregunta, setTipoPregunta] = useState ('')
    const [pregunta, setPregunta] = useState ('')
    const [opcion_a, setOpcionA]  = useState ('')
    const [opcion_b, setOpcionB]  = useState ('')
    const [opcion_c, setOpcionC]  = useState ('')
    const [opcion_d, setOpcionD]  = useState ('')

    const begin = useSelector(({begin}) => begin)
    const {get_pregunta} = useSelector(({preguntas}) => preguntas)
    const {id_pregunta, nro_pregunta, nro_categoria, lista_respuestas} = useSelector (({datareducer}) => datareducer)


    useEffect (() => {
        if (isFocused){
            dispatch(preguntasdata(preguntasConstants({}, false, id_pregunta, 'preguntas_categoria_uno').get_pregunta))
        }
    }, [isFocused])

    useEffect (() => {
        if ((get_pregunta && get_pregunta.pregunta)){
            setPregunta(get_pregunta.pregunta.pregunta)
            setTipoPregunta(get_pregunta.pregunta.tipo_pregunta)
            setOpcionA(get_pregunta.pregunta.opcion_a)
            setOpcionB(get_pregunta.pregunta.opcion_b)
            setOpcionC(get_pregunta.pregunta.opcion_c)
            setOpcionD(get_pregunta.pregunta.opcion_d)
        }
    }, [get_pregunta])

    const siguiente_pregunta = () => {
        dispatch(set_nro_pregunta(nro_pregunta + 1))
        dispatch(set_id_pregunta(parseFloat(id_pregunta) + 1))
        dispatch(preguntasdata(preguntasConstants({}, true, parseFloat(id_pregunta) + 1, 0).get_pregunta))
        dispatch(preguntasdata(preguntasConstants({}, false, parseFloat(id_pregunta) + 1, 'preguntas_categoria_uno').get_pregunta))
    }

    const repetir_examen = () => {
        dispatch(preguntasdata(preguntasConstants({}, true, 0, 0).get_pregunta))
        navigation.navigate('SeleccionScreen')
    }

    return (
        <GestureHandlerRootView style={{flex: 1, width: '100%'}}>
            
            <BarraSuperiorRespuestas navigation={navigation} categoria={'CATEGORÍA 1 - B2A'} nro_categoria={nro_categoria}
                    correcta={lista_respuestas[nro_pregunta - 1].correcta}/>
            
            <View style={styles.container}>
                <Text style={styles.texto_pregunta}>{pregunta}</Text>
                {
                    (get_pregunta && get_pregunta.pregunta) && tipo_pregunta === '0' ? (
                        get_pregunta.pregunta.respuesta === 'a' ? (
                            <TouchableOpacity style={[styles.opcion_respuesta, {backgroundColor: 'rgba(4, 194, 0, 0.2)',  borderColor: '#04C200', borderWidth: 2}]}>
                                <Image source={ICON.RESULTADOS_RADIO_BUTTON_GREEN} style={styles.radio_select}/>
                                <Text style={styles.texto_opcion}>{opcion_a}</Text>
                            </TouchableOpacity>
                        ) : get_pregunta.pregunta.respuesta !== 'a' && lista_respuestas[nro_pregunta - 1].usuario === 'a'  ? (
                            <TouchableOpacity style={[styles.opcion_respuesta, {backgroundColor: 'rgba(255, 0, 0, 0.2)',  borderColor: '#ff0000', borderWidth: 2}]}>
                                <Image source={ICON.RESULTADOS_RADIO_BUTTON_RED} style={styles.radio_select}/>
                                <Text style={styles.texto_opcion}>{opcion_a}</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity style={[styles.opcion_respuesta, {backgroundColor: 'white',  borderColor: 'white', borderWidth: 2}]}>
                                <Image source={ICON.RADIO_UNSELECT} style={styles.radio_select}/>
                                <Text style={styles.texto_opcion}>{opcion_a}</Text>
                            </TouchableOpacity>
                        )
                    ) : tipo_pregunta === '1' ? (
                        <View style={styles.opcion_imagen}>
                            <Image source={ICON.PREGUNTA_IMAGEN} />
                        </View>
                    ) :null
                }
                {
                    (get_pregunta && get_pregunta.pregunta) && get_pregunta.pregunta.respuesta === 'b' ? (
                        <TouchableOpacity style={[styles.opcion_respuesta, {backgroundColor: 'rgba(4, 194, 0, 0.2)',  borderColor: '#04C200', borderWidth: 2}]}>
                            <Image source={ICON.RESULTADOS_RADIO_BUTTON_GREEN} style={styles.radio_select}/>
                            <Text style={styles.texto_opcion}>{opcion_b}</Text>
                        </TouchableOpacity>
                    ) : (get_pregunta && get_pregunta.pregunta) && get_pregunta.pregunta.respuesta !== 'b' && lista_respuestas[nro_pregunta - 1].usuario === 'b'  ? (
                        <TouchableOpacity style={[styles.opcion_respuesta, {backgroundColor: 'rgba(255, 0, 0, 0.2)',  borderColor: '#ff0000', borderWidth: 2}]}>
                            <Image source={ICON.RESULTADOS_RADIO_BUTTON_RED} style={styles.radio_select}/>
                            <Text style={styles.texto_opcion}>{opcion_b}</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={[styles.opcion_respuesta, {backgroundColor: 'white',  borderColor: 'white', borderWidth: 2}]}>
                            <Image source={ICON.RADIO_UNSELECT} style={styles.radio_select}/>
                            <Text style={styles.texto_opcion}>{opcion_b}</Text>
                        </TouchableOpacity>
                    )
                }
                {
                    (get_pregunta && get_pregunta.pregunta) && get_pregunta.pregunta.respuesta === 'c' ? (
                        <TouchableOpacity style={[styles.opcion_respuesta, {backgroundColor: 'rgba(4, 194, 0, 0.2)',  borderColor: '#04C200', borderWidth: 2}]}>
                            <Image source={ICON.RESULTADOS_RADIO_BUTTON_GREEN} style={styles.radio_select}/>
                            <Text style={styles.texto_opcion}>{opcion_c}</Text>
                        </TouchableOpacity>
                    ) : (get_pregunta && get_pregunta.pregunta) && get_pregunta.pregunta.respuesta !== 'c' && lista_respuestas[nro_pregunta - 1].usuario === 'c'  ? (
                        <TouchableOpacity style={[styles.opcion_respuesta, {backgroundColor: 'rgba(255, 0, 0, 0.2)',  borderColor: '#ff0000', borderWidth: 2}]}>
                            <Image source={ICON.RESULTADOS_RADIO_BUTTON_RED} style={styles.radio_select}/>
                            <Text style={styles.texto_opcion}>{opcion_c}</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={[styles.opcion_respuesta, {backgroundColor: 'white',  borderColor: 'white', borderWidth: 2}]}>
                            <Image source={ICON.RADIO_UNSELECT} style={styles.radio_select}/>
                            <Text style={styles.texto_opcion}>{opcion_c}</Text>
                        </TouchableOpacity>
                    )
                }
                {
                    (get_pregunta && get_pregunta.pregunta) && get_pregunta.pregunta.respuesta === 'd' ? (
                        <TouchableOpacity style={[styles.opcion_respuesta, {backgroundColor: 'rgba(4, 194, 0, 0.2)',  borderColor: '#04C200', borderWidth: 2}]}>
                            <Image source={ICON.RESULTADOS_RADIO_BUTTON_GREEN} style={styles.radio_select}/>
                            <Text style={styles.texto_opcion}>{opcion_d}</Text>
                        </TouchableOpacity>
                    ) : (get_pregunta && get_pregunta.pregunta) && get_pregunta.pregunta.respuesta !== 'd' && lista_respuestas[nro_pregunta - 1].usuario === 'd'  ? (
                        <TouchableOpacity style={[styles.opcion_respuesta, {backgroundColor: 'rgba(255, 0, 0, 0.2)',  borderColor: '#ff0000', borderWidth: 2}]}>
                            <Image source={ICON.RESULTADOS_RADIO_BUTTON_RED} style={styles.radio_select}/>
                            <Text style={styles.texto_opcion}>{opcion_d}</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={[styles.opcion_respuesta, {backgroundColor: 'white',  borderColor: 'white', borderWidth: 2}]}>
                            <Image source={ICON.RADIO_UNSELECT} style={styles.radio_select}/>
                            <Text style={styles.texto_opcion}>{opcion_d}</Text>
                        </TouchableOpacity>
                    )
                }

                {
                    nro_pregunta === 40 ? (
                        <TouchableOpacity style={styles.boton_siguiente} onPress={() => repetir_examen()}>
                            <Text style={styles.texto_siguiente}>REPETIR EXAMEN</Text>
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
    boton_siguiente: {
        backgroundColor: '#ff0000',
        borderRadius: 40,
        width: 270,
        height: 58,
        marginLeft: 45,
        marginRight: 45,
        marginTop: 22
    },
    texto_siguiente: {
        fontFamily: 'Nunito-Bold', fontSize: 25, lineHeight: 58, color: 'white', textAlign: 'center'
    }
})