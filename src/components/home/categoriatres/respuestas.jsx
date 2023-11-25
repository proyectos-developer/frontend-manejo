import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ICON } from '../../../assets/constants/images'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler'
import BarraSuperiorRespuestas from '../comun/barrasuperiorrespuestas'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused, useRoute } from '@react-navigation/native'
import {preguntasdata} from '../../../redux/slice/preguntasdata'
import { preguntasConstants } from '../../../redux/uri/preguntas-constants'
import { useEffect } from 'react'
import { set_id_pregunta, set_nro_pregunta } from '../../../redux/actions/dataactions'

export default function CategoriaTresRespuestas ({navigation}) {

    const dispatch = useDispatch ()
    const isFocused = useIsFocused()

    const [opcion,   setOpcion]   = useState ('')
    const [tipo_pregunta, setTipoPregunta] = useState ('')
    const [pregunta, setPregunta] = useState ('')
    const [opcion_a, setOpcionA]  = useState ('')
    const [opcion_b, setOpcionB]  = useState ('')
    const [opcion_c, setOpcionC]  = useState ('')
    const [opcion_d, setOpcionD]  = useState ('')
    const [respuesta_correcta, setRespuestaCorrecta]  = useState ('')

    const [respuesta_usuario, setRespuestaUsuario] = useState ('')
    const [correcta_usuario, setCorrectaUsuario] = useState (false)

    const {get_pregunta} = useSelector(({preguntas}) => preguntas)
    const {id_pregunta, nro_pregunta, nro_categoria, 
      respuesta_uno, respuesta_dos, respuesta_tres, respuesta_cuatro, respuesta_cinco, respuesta_seis, respuesta_siete, respuesta_ocho, respuesta_nueve, respuesta_diez,
      respuesta_once, respuesta_doce, respuesta_trece, respuesta_catorce, respuesta_quince, respuesta_diezyseis, respuesta_diezysiete, respuesta_diezyocho, respuesta_diezynueve, respuesta_veinte, 
      respuesta_veinteyuno, respuesta_veinteydos, respuesta_veinteytres, respuesta_veinteycuatro, respuesta_veinteycinco, respuesta_veinteyseis, respuesta_veinteysiete, respuesta_veinteyocho, respuesta_veinteynueve, respuesta_treinta,
      respuesta_treintayuno, respuesta_treintaydos, respuesta_treintaytres, respuesta_treintaycuatro, respuesta_treintaycinco, respuesta_treintayseis, respuesta_treintaysiete, respuesta_treintayocho, respuesta_treintaynueve, respuesta_cuarenta} = useSelector (({datareducer}) => datareducer)


    useEffect (() => {
        if (isFocused){
            dispatch(preguntasdata(preguntasConstants({}, false, id_pregunta, 'preguntas_categoria_tres').get_pregunta))
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

            setRespuestaUsuario(nro_pregunta === 1 ? respuesta_uno.usuario : nro_pregunta === 2 ? respuesta_dos.usuario : nro_pregunta === 3 ? respuesta_tres.usuario : nro_pregunta === 4 ? respuesta_cuatro.usuario : nro_pregunta === 5 ? respuesta_cinco.usuario : nro_pregunta === 6 ? respuesta_seis.usuario : nro_pregunta === 7 ? respuesta_siete.usuario : nro_pregunta === 8 ? respuesta_ocho.usuario : nro_pregunta === 9 ? respuesta_nueve.usuario : nro_pregunta === 10 ? respuesta_diez.usuario :
                                nro_pregunta === 11 ? respuesta_once.usuario : nro_pregunta === 12 ? respuesta_doce.usuario : nro_pregunta === 13 ? respuesta_trece.usuario : nro_pregunta === 14 ? respuesta_catorce.usuario : nro_pregunta === 15 ? respuesta_quince.usuario : nro_pregunta === 16 ? respuesta_diezyseis.usuario : nro_pregunta === 17 ? respuesta_diezysiete.usuario : nro_pregunta === 18 ? respuesta_diezyocho.usuario : nro_pregunta === 19 ? respuesta_diezynueve.usuario : nro_pregunta === 20 ? respuesta_veinte.usuario :
                                nro_pregunta === 21 ? respuesta_veinteyuno.usuario : nro_pregunta === 22 ? respuesta_veinteydos.usuario : nro_pregunta === 23 ? respuesta_veinteytres.usuario : nro_pregunta === 24 ? respuesta_veinteycuatro.usuario : nro_pregunta === 25 ? respuesta_veinteycinco.usuario : nro_pregunta === 26 ? respuesta_veinteyseis.usuario : nro_pregunta === 27 ? respuesta_veinteysiete.usuario : nro_pregunta === 28 ? respuesta_veinteyocho.usuario : nro_pregunta === 29 ? respuesta_veinteynueve.usuario : nro_pregunta === 30 ? respuesta_treinta.usuario :
                                nro_pregunta === 31 ? respuesta_treintayuno.usuario : nro_pregunta === 32 ? respuesta_treintaydos.usuario : nro_pregunta === 33 ? respuesta_treintaytres.usuario : nro_pregunta === 34 ? respuesta_treintaycuatro.usuario : nro_pregunta === 35 ? respuesta_treintaycinco.usuario : nro_pregunta === 36 ? respuesta_treintayseis.usuario : nro_pregunta === 37 ? respuesta_treintaysiete.usuario : nro_pregunta === 38 ? respuesta_treintayocho.usuario : nro_pregunta === 39 ? respuesta_treintaynueve.usuario : respuesta_cuarenta.usuario)

            setCorrectaUsuario(nro_pregunta === 1 ? respuesta_uno.correcta : nro_pregunta === 2 ? respuesta_dos.correcta : nro_pregunta === 3 ? respuesta_tres.correcta : nro_pregunta === 4 ? respuesta_cuatro.correcta : nro_pregunta === 5 ? respuesta_cinco.correcta : nro_pregunta === 6 ? respuesta_seis.correcta : nro_pregunta === 7 ? respuesta_siete.correcta : nro_pregunta === 8 ? respuesta_ocho.correcta : nro_pregunta === 9 ? respuesta_nueve.correcta : nro_pregunta === 10 ? respuesta_diez.correcta :
                                nro_pregunta === 11 ? respuesta_once.correcta : nro_pregunta === 12 ? respuesta_doce.correcta : nro_pregunta === 13 ? respuesta_trece.correcta : nro_pregunta === 14 ? respuesta_catorce.correcta : nro_pregunta === 15 ? respuesta_quince.correcta : nro_pregunta === 16 ? respuesta_diezyseis.correcta : nro_pregunta === 17 ? respuesta_diezysiete.correcta : nro_pregunta === 18 ? respuesta_diezyocho.correcta : nro_pregunta === 19 ? respuesta_diezynueve.correcta : nro_pregunta === 20 ? respuesta_veinte.correcta :
                                nro_pregunta === 21 ? respuesta_veinteyuno.correcta : nro_pregunta === 22 ? respuesta_veinteydos.correcta : nro_pregunta === 23 ? respuesta_veinteytres.correcta : nro_pregunta === 24 ? respuesta_veinteycuatro.correcta : nro_pregunta === 25 ? respuesta_veinteycinco.correcta : nro_pregunta === 26 ? respuesta_veinteyseis.correcta : nro_pregunta === 27 ? respuesta_veinteysiete.correcta : nro_pregunta === 28 ? respuesta_veinteyocho.correcta : nro_pregunta === 29 ? respuesta_veinteynueve.correcta : nro_pregunta === 30 ? respuesta_treinta.correcta :
                                nro_pregunta === 31 ? respuesta_treintayuno.correcta : nro_pregunta === 32 ? respuesta_treintaydos.correcta : nro_pregunta === 33 ? respuesta_treintaytres.correcta : nro_pregunta === 34 ? respuesta_treintaycuatro.correcta : nro_pregunta === 35 ? respuesta_treintaycinco.correcta : nro_pregunta === 36 ? respuesta_treintayseis.correcta : nro_pregunta === 37 ? respuesta_treintaysiete.correcta : nro_pregunta === 38 ? respuesta_treintayocho.correcta : nro_pregunta === 39 ? respuesta_treintaynueve.correcta : respuesta_cuarenta.usuario)
        }
    }, [get_pregunta])

    const siguiente_pregunta = () => {
        dispatch(set_nro_pregunta(nro_pregunta + 1))
        dispatch(set_id_pregunta(parseFloat(id_pregunta) + 1))
        dispatch(preguntasdata(preguntasConstants({}, false, parseFloat(id_pregunta) + 1, 'preguntas_categoria_tres').get_pregunta))
    }

    const repetir_examen = () => {
        dispatch(preguntasdata(preguntasConstants({}, true, 0, 0).get_pregunta))
        navigation.navigate('SeleccionScreen')
    }

    return (
        <GestureHandlerRootView style={{flex: 1, width: '100%'}}>
            <BarraSuperiorRespuestas navigation={navigation} categoria={'CATEGORÍA 3 - A2A'} nro_categoria={nro_categoria} correcta={correcta_usuario}/>
            <View style={styles.container}>
                <Text style={styles.texto_pregunta}>{pregunta}</Text>
                {
                    tipo_pregunta === '0' ? (
                        respuesta_correcta === 'a' ? (
                            <TouchableOpacity style={[styles.opcion_respuesta, {backgroundColor: 'rgba(4, 194, 0, 0.2)',  borderColor: '#04C200', borderWidth: 2}]}>
                                <Image source={ICON.RESULTADOS_RADIO_BUTTON_GREEN} style={styles.radio_select}/>
                                <Text style={styles.texto_opcion}>{opcion_a}</Text>
                            </TouchableOpacity>
                        ) : respuesta_correcta !== 'a' && respuesta_usuario === 'a'  ? (
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
                    respuesta_correcta === 'b' ? (
                        <TouchableOpacity style={[styles.opcion_respuesta, {backgroundColor: 'rgba(4, 194, 0, 0.2)',  borderColor: '#04C200', borderWidth: 2}]}>
                            <Image source={ICON.RESULTADOS_RADIO_BUTTON_GREEN} style={styles.radio_select}/>
                            <Text style={styles.texto_opcion}>{opcion_b}</Text>
                        </TouchableOpacity>
                    ) : respuesta_correcta !== 'b' && respuesta_usuario === 'b'  ? (
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
                    respuesta_correcta === 'c' ? (
                        <TouchableOpacity style={[styles.opcion_respuesta, {backgroundColor: 'rgba(4, 194, 0, 0.2)',  borderColor: '#04C200', borderWidth: 2}]}>
                            <Image source={ICON.RESULTADOS_RADIO_BUTTON_GREEN} style={styles.radio_select}/>
                            <Text style={styles.texto_opcion}>{opcion_c}</Text>
                        </TouchableOpacity>
                    ) : respuesta_correcta !== 'c' && respuesta_usuario === 'c'  ? (
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
                    respuesta_correcta === 'd' ? (
                        <TouchableOpacity style={[styles.opcion_respuesta, {backgroundColor: 'rgba(4, 194, 0, 0.2)',  borderColor: '#04C200', borderWidth: 2}]}>
                            <Image source={ICON.RESULTADOS_RADIO_BUTTON_GREEN} style={styles.radio_select}/>
                            <Text style={styles.texto_opcion}>{opcion_d}</Text>
                        </TouchableOpacity>
                    ) : respuesta_correcta !== 'd' && respuesta_usuario === 'd'  ? (
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