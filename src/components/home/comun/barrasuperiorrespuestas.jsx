import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import {ICON} from '../../../assets/constants/images'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'

import { set_id_pregunta, set_nro_pregunta } from '../../../redux/actions/dataactions'
import {preguntasdata} from '../../../redux/slice/preguntasdata'
import { preguntasConstants } from '../../../redux/uri/preguntas-constants'
import { useState } from 'react'
import { useEffect } from 'react'

export default function BarraSuperiorRespuesta ({navigation, categoria, nro_categoria, correcta}) {

    const dispatch = useDispatch()
    const {id_pregunta, nro_pregunta} = useSelector (({datareducer}) => datareducer)

    const [pregunta_uno, setPreguntaUno] = useState ('#D9D9D9')
    const [pregunta_dos, setPreguntaDos] = useState ('#D9D9D9')
    const [pregunta_tres, setPreguntaTres] = useState ('#D9D9D9')
    const [pregunta_cuatro, setPreguntaCuatro] = useState ('#D9D9D9')
    const [pregunta_cinco, setPreguntaCinco] = useState ('#D9D9D9')
    const [pregunta_seis, setPreguntaSeis] = useState ('#D9D9D9')
    const [pregunta_siete, setPreguntaSiete] = useState ('#D9D9D9')
    const [pregunta_ocho, setPreguntaOcho] = useState ('#D9D9D9')
    const [pregunta_nueve, setPreguntaNueve] = useState ('#D9D9D9')
    const [pregunta_diez, setPreguntaDiez] = useState ('#D9D9D9')
    const [pregunta_once, setPreguntaOnce] = useState ('#D9D9D9')
    const [pregunta_doce, setPreguntaDoce] = useState ('#D9D9D9')
    const [pregunta_trece, setPreguntaTrece] = useState ('#D9D9D9')
    const [pregunta_catorce, setPreguntaCatorce] = useState ('#D9D9D9')
    const [pregunta_quince, setPreguntaQuince] = useState ('#D9D9D9')
    const [pregunta_diezyseis, setPreguntaDiezyseis] = useState ('#D9D9D9')
    const [pregunta_diezysiete, setPreguntaDiezysiete] = useState ('#D9D9D9')
    const [pregunta_diezyocho, setPreguntaDiezyocho] = useState ('#D9D9D9')
    const [pregunta_diezynueve, setPreguntaDiezynueve] = useState ('#D9D9D9')
    const [pregunta_veinte, setPreguntaVeinte] = useState ('#D9D9D9')
    const [pregunta_veinteyuno, setPreguntaVeinteyuno] = useState ('#D9D9D9')
    const [pregunta_veinteydos, setPreguntaVeinteydos] = useState ('#D9D9D9')
    const [pregunta_veinteytres, setPreguntaVeinteytres] = useState ('#D9D9D9')
    const [pregunta_veinteycuatro, setPreguntaVeinteycuatro] = useState ('#D9D9D9')
    const [pregunta_veinteycinco, setPreguntaVeinteycinco] = useState ('#D9D9D9')
    const [pregunta_veinteyseis, setPreguntaVeinteyseis] = useState ('#D9D9D9')
    const [pregunta_veinteysiete, setPreguntaVeinteysiete] = useState ('#D9D9D9')
    const [pregunta_veinteyocho, setPreguntaVeinteyocho] = useState ('#D9D9D9')
    const [pregunta_veinteynueve, setPreguntaVeinteynueve] = useState ('#D9D9D9')
    const [pregunta_treinta, setPreguntaTreinta] = useState ('#D9D9D9')
    const [pregunta_treintayuno, setPreguntaTreintayuno] = useState ('#D9D9D9')
    const [pregunta_treintaydos, setPreguntaTreintaydos] = useState ('#D9D9D9')
    const [pregunta_treintaytres, setPreguntaTreintaytres] = useState ('#D9D9D9')
    const [pregunta_treintaycuatro, setPreguntaTreintaycuatro] = useState ('#D9D9D9')
    const [pregunta_treintaycinco, setPreguntaTreintaycinco] = useState ('#D9D9D9')
    const [pregunta_treintayseis, setPreguntaTreintayseis] = useState ('#D9D9D9')
    const [pregunta_treintaysiete, setPreguntaTreintaysiete] = useState ('#D9D9D9')
    const [pregunta_treintayocho, setPreguntaTreintayocho] = useState ('#D9D9D9')
    const [pregunta_treintaynueve, setPreguntaTreintaynueve] = useState ('#D9D9D9')
    const [pregunta_cuarenta, setPreguntaCuarenta] = useState ('#D9D9D9')

    const {get_pregunta} = useSelector(({preguntas}) => preguntas)

    useEffect (() => {
    }, [])

    useEffect (() => {
        switch (nro_pregunta){
            case 1: {if (correcta) setPreguntaUno('#04C200'); else if (!correcta) setPreguntaUno('#FF0000'); return;}
            case 2: {if (correcta) setPreguntaDos('#04C200'); else if (!correcta) setPreguntaDos('#FF0000'); return;}
            case 3: {if (correcta) setPreguntaTres('#04C200'); else if (!correcta) setPreguntaTres('#FF0000'); return;}
            case 4: {if (correcta) setPreguntaCuatro('#04C200'); else if (!correcta) setPreguntaCuatro('#FF0000'); return;}
            case 5: {if (correcta) setPreguntaCinco('#04C200'); else if (!correcta) setPreguntaCinco('#FF0000'); return;}
            case 6:{ if (correcta) setPreguntaSeis('#04C200'); else if (!correcta) setPreguntaSeis('#FF0000'); return;}
            case 7: {if (correcta) setPreguntaSiete('#04C200'); else if (!correcta) setPreguntaSiete('#FF0000'); return;}
            case 8: {if (correcta) setPreguntaOcho('#04C200'); else if (!correcta) setPreguntaOcho('#FF0000'); return;}
            case 9: {if (correcta) setPreguntaNueve('#04C200'); else if (!correcta) setPreguntaNueve('#FF0000'); return;}
            case 10: {if (correcta) setPreguntaDiez('#04C200'); else if (!correcta) setPreguntaDiez('#FF0000'); return;}
            case 11: {if (correcta) setPreguntaOnce('#04C200'); else if (!correcta) setPreguntaOnce('#FF0000'); return;}
            case 12: {if (correcta) setPreguntaDoce('#04C200'); else if (!correcta) setPreguntaDoce('#FF0000'); return;}
            case 13: {if (correcta) setPreguntaTrece('#04C200'); else if (!correcta) setPreguntaTrece('#FF0000'); return;}
            case 14: {if (correcta) setPreguntaCatorce('#04C200'); else if (!correcta) setPreguntaCatorce('#FF0000'); return;}
            case 15: {if (correcta) setPreguntaQuince('#04C200'); else if (!correcta) setPreguntaQuince('#FF0000'); return;}
            case 16:{ if (correcta) setPreguntaDiezyseis('#04C200'); else if (!correcta) setPreguntaDiezyseis('#FF0000'); return;}
            case 17: {if (correcta) setPreguntaDiezysiete('#04C200'); else if (!correcta) setPreguntaDiezysiete('#FF0000'); return;}
            case 18: {if (correcta) setPreguntaDiezyocho('#04C200'); else if (!correcta) setPreguntaDiezyocho('#FF0000'); return;}
            case 19: {if (correcta) setPreguntaDiezynueve('#04C200'); else if (!correcta) setPreguntaDiezynueve('#FF0000'); return;}
            case 20: {if (correcta) setPreguntaVeinte('#04C200'); else if (!correcta) setPreguntaVeinte('#FF0000'); return;}
            case 21: {if (correcta) setPreguntaVeinteyuno('#04C200'); else if (!correcta) setPreguntaVeinteyuno('#FF0000'); return;}
            case 22: {if (correcta) setPreguntaVeinteydos('#04C200'); else if (!correcta) setPreguntaVeinteydos('#FF0000'); return;}
            case 23: {if (correcta) setPreguntaVeinteytres('#04C200'); else if (!correcta) setPreguntaVeinteytres('#FF0000'); return;}
            case 24: {if (correcta) setPreguntaVeinteycuatro('#04C200'); else if (!correcta) setPreguntaVeinteycuatro('#FF0000'); return;}
            case 25: {if (correcta) setPreguntaVeinteycinco('#04C200'); else if (!correcta) setPreguntaVeinteycinco('#FF0000'); return;}
            case 26:{ if (correcta) setPreguntaVeinteyseis('#04C200'); else if (!correcta) setPreguntaVeinteyseis('#FF0000'); return;}
            case 27: {if (correcta) setPreguntaVeinteysiete('#04C200'); else if (!correcta) setPreguntaVeinteysiete('#FF0000'); return;}
            case 28: {if (correcta) setPreguntaVeinteyocho('#04C200'); else if (!correcta) setPreguntaVeinteyocho('#FF0000'); return;}
            case 29: {if (correcta) setPreguntaVeinteynueve('#04C200'); else if (!correcta) setPreguntaVeinteynueve('#FF0000'); return;}
            case 30: {if (correcta) setPreguntaTreinta('#04C200'); else if (!correcta) setPreguntaTreinta('#FF0000'); return;}
            case 31: {if (correcta) setPreguntaTreintayuno('#04C200'); else if (!correcta) setPreguntaTreintayuno('#FF0000'); return;}
            case 32: {if (correcta) setPreguntaTreintaydos('#04C200'); else if (!correcta) setPreguntaTreintaydos('#FF0000'); return;}
            case 33: {if (correcta) setPreguntaTreintaytres('#04C200'); else if (!correcta) setPreguntaTreintaytres('#FF0000'); return;}
            case 34: {if (correcta) setPreguntaTreintaycuatro('#04C200'); else if (!correcta) setPreguntaTreintaycuatro('#FF0000'); return;}
            case 35: {if (correcta) setPreguntaTreintaycinco('#04C200'); else if (!correcta) setPreguntaTreintaycinco('#FF0000'); return;}
            case 36:{ if (correcta) setPreguntaTreintayseis('#04C200'); else if (!correcta) setPreguntaTreintayseis('#FF0000'); return;}
            case 37: {if (correcta) setPreguntaTreintaysiete('#04C200'); else if (!correcta) setPreguntaTreintaysiete('#FF0000'); return;}
            case 38: {if (correcta) setPreguntaTreintayocho('#04C200'); else if (!correcta) setPreguntaTreintayocho('#FF0000'); return;}
            case 39: {if (correcta) setPreguntaTreintaynueve('#04C200'); else if (!correcta) setPreguntaTreintaynueve('#FF0000'); return;}
            case 40: {if (correcta) setPreguntaCuarenta('#04C200'); else if (!correcta) setPreguntaCuarenta('#FF0000'); return;}
            default: return;
        }
    }, [nro_pregunta, get_pregunta])
    
    const volver_pregunta_anterior = () => {
        if (nro_pregunta === 1){
            navigation.navigate ('ResultadosScreen')
        }else{
            dispatch (set_id_pregunta(parseFloat(id_pregunta) - 1))
            dispatch (set_nro_pregunta (nro_pregunta - 1))
            dispatch(preguntasdata(preguntasConstants({}, false, parseFloat(id_pregunta) - 1, 
                    nro_categoria === '1' ? 'preguntas_categoria_uno' : nro_categoria === '2' ? 'pregntas_categoria_dos' :
                    nro_categoria === '3' ? 'preguntas_categoria_tres' : nro_categoria === '4' ? 'preguntas_categoria_cuatro' :
                    'preguntas_categoria_cinco').get_pregunta))
        }
    }

    return (
        <GestureHandlerRootView style={styles.container}>
                
                <View style={styles.container_row}>
                    <TouchableOpacity style={[styles.boton_atras]} onPress={() => volver_pregunta_anterior()}>
                        <Image source={ICON.BARRA_SUPERIOR_BOTON_ATRAS}/>
                    </TouchableOpacity>

                    <View style={styles.container_titulo}>
                        <Text style={styles.texto_simulacro}>Simulacro</Text>
                        <Text style={styles.texto_categoria_uno}>{categoria}</Text>
                        <View style={styles.total_preguntas}>
                            <Text style={styles.texto_total_preguntas}>{`${nro_pregunta}/40`}</Text>
                        </View>
                    </View>
                    
                    <TouchableOpacity style={[styles.avatar]} onPress={() => navigation.navigate ('ActualizarDatosScreen')}>
                        <Image source={ICON.BARRA_SUPERIOR_AVATAR_RED}/>
                    </TouchableOpacity>
                </View>
                
                {
                    nro_pregunta < 7 ? (
                        <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_uno}]}>
                                <Text style={styles.nro_actual}>1</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_dos}]}>
                                <Text style={nro_pregunta > 1 ? styles.nro_actual : styles.nro}>2</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_tres}]}>
                                <Text style={nro_pregunta > 2 ? styles.nro_actual : styles.nro}>3</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_cuatro}]}>
                                <Text style={nro_pregunta > 3 ? styles.nro_actual : styles.nro}>4</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_cinco}]}>
                                <Text style={nro_pregunta > 4 ? styles.nro_actual : styles.nro}>5</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_seis}]}>
                                <Text style={nro_pregunta > 5 ? styles.nro_actual : styles.nro}>6</Text>
                            </View>
                        </View>
                    ) : nro_pregunta < 13 ? (
                        <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_siete}]}>
                                <Text style={styles.nro_actual}>7</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_ocho}]}>
                                <Text style={nro_pregunta > 7 ? styles.nro_actual : styles.nro}>8</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_nueve}]}>
                                <Text style={nro_pregunta > 8 ? styles.nro_actual : styles.nro}>9</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_diez}]}>
                                <Text style={nro_pregunta > 9 ? styles.nro_actual : styles.nro}>10</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_once}]}>
                                <Text style={nro_pregunta > 10 ? styles.nro_actual : styles.nro}>11</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_doce}]}>
                                <Text style={nro_pregunta > 11 ? styles.nro_actual : styles.nro}>12</Text>
                            </View>
                        </View>
                    ) : nro_pregunta < 19 ? (
                        <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_trece}]}>
                                <Text style={styles.nro_actual}>13</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_catorce}]}>
                                <Text style={nro_pregunta > 13 ? styles.nro_actual : styles.nro}>14</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_quince}]}>
                                <Text style={nro_pregunta > 14 ? styles.nro_actual : styles.nro}>15</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_diezyseis}]}>
                                <Text style={nro_pregunta > 15 ? styles.nro_actual : styles.nro}>16</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_diezysiete}]}>
                                <Text style={nro_pregunta > 16 ? styles.nro_actual : styles.nro}>17</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_diezyocho}]}>
                                <Text style={nro_pregunta > 17 ? styles.nro_actual : styles.nro}>18</Text>
                            </View>
                        </View>
                    ) : nro_pregunta < 25 ? (
                        <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_diezynueve}]}>
                                <Text style={styles.nro_actual}>19</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_veinte}]}>
                                <Text style={nro_pregunta > 19 ? styles.nro_actual : styles.nro}>20</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_veinteyuno}]}>
                                <Text style={nro_pregunta > 20 ? styles.nro_actual : styles.nro}>21</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_veinteydos}]}>
                                <Text style={nro_pregunta > 21 ? styles.nro_actual : styles.nro}>22</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_veinteytres}]}>
                                <Text style={nro_pregunta > 22 ? styles.nro_actual : styles.nro}>23</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_veinteycuatro}]}>
                                <Text style={nro_pregunta > 23 ? styles.nro_actual : styles.nro}>24</Text>
                            </View>
                        </View>
                    ) : nro_pregunta < 31 ? (
                        <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_veinteycinco}]}>
                                <Text style={styles.nro_actual}>25</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_veinteyseis}]}>
                                <Text style={nro_pregunta > 25 ? styles.nro_actual : styles.nro}>26</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_veinteysiete}]}>
                                <Text style={nro_pregunta > 26 ? styles.nro_actual : styles.nro}>27</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_veinteyocho}]}>
                                <Text style={nro_pregunta > 27 ? styles.nro_actual : styles.nro}>28</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_veinteynueve}]}>
                                <Text style={nro_pregunta > 28 ? styles.nro_actual : styles.nro}>29</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_treinta}]}>
                                <Text style={nro_pregunta > 29 ? styles.nro_actual : styles.nro}>30</Text>
                            </View>
                        </View>
                    ) : nro_pregunta < 37 ? (
                        <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_treintayuno}]}>
                                <Text style={styles.nro_actual}>31</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_treintaydos}]}>
                                <Text style={nro_pregunta > 31 ? styles.nro_actual : styles.nro}>32</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_treintaytres}]}>
                                <Text style={nro_pregunta > 32 ? styles.nro_actual : styles.nro}>33</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_treintaycuatro}]}>
                                <Text style={nro_pregunta > 33 ? styles.nro_actual : styles.nro}>34</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_treintaycinco}]}>
                                <Text style={nro_pregunta > 34 ? styles.nro_actual : styles.nro}>35</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_treintayseis}]}>
                                <Text style={nro_pregunta > 35 ? styles.nro_actual : styles.nro}>36</Text>
                            </View>
                        </View>
                    )  : nro_pregunta < 41 ? (
                        <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_treintaysiete}]}>
                                <Text style={styles.nro_actual}>37</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_treintayocho}]}>
                                <Text style={nro_pregunta > 37 ? styles.nro_actual : styles.nro}>38</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_treintaynueve}]}>
                                <Text style={nro_pregunta > 38 ? styles.nro_actual : styles.nro}>39</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_cuarenta}]}>
                                <Text style={nro_pregunta > 39 ? styles.nro_actual : styles.nro}>40</Text>
                            </View>
                            
                        </View>
                    ) : null
                }

        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    container_row: {
        width: '100%',
        flexDirection: 'row',
    },
    boton_atras:{
        width: 80,
        height: 80,
        marginTop: 30,
        marginLeft: 0
    },
    avatar: {
        width: 80,
        height: 80,
        marginRight: 0,
        marginTop: 30
    },
    container_titulo: {
        width: 160,
        height: 76,
        marginTop: 50,
        alignItems: 'center',
        marginLeft: 21,
        marginRight: 20
    },
    texto_simulacro: {
        fontFamily: 'Nunito-Medium', color: '#252525', fontSize: 15, lineHeight: 20
    },
    texto_categoria_uno: {
        fontFamily: 'Nunito-Black', color: '#252525', fontSize: 16, lineHeight: 22
    },
    total_preguntas: {
        width: 73.14,
        height: 32,
        marginTop: 2,
        backgroundColor: '#d9d9d9',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto_total_preguntas: {
        fontFamily: 'Nunito-ExtraBold', fontSize: 20, color: '#252525', lineHeight: 25, 
        justifyContent: 'center', alignItems: 'center'
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 40
    },
    nro_actual: {
        fontFamily: 'Nunito-ExtraBold', fontSize: 20, lineHeight: 40, color: 'white', marginBottom: 0,
        textAlign: 'center'
    },
    nro: {
        fontFamily: 'Nunito-ExtraBold', fontSize: 20, lineHeight: 40, color: '#252525', marginBottom: 0,
        textAlign: 'center'
    }
})