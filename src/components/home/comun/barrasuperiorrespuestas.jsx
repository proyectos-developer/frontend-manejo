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
    const {nro_pregunta, id_pregunta} = useSelector (({datareducer}) => datareducer)

    const [pregunta_uno, setPreguntaUno] = useState ('2')
    const [pregunta_dos, setPreguntaDos] = useState ('2')
    const [pregunta_tres, setPreguntaTres] = useState ('2')
    const [pregunta_cuatro, setPreguntaCuatro] = useState ('2')
    const [pregunta_cinco, setPreguntaCinco] = useState ('2')
    const [pregunta_seis, setPreguntaSeis] = useState ('2')

    useEffect (() => {
        if (nro_pregunta === 1) setPreguntaUno (correcta ? '1' : '0')
    }, [])

    useEffect (() => {
        if (nro_pregunta === 2) setPreguntaDos (correcta ? '1' : '0')
        if (nro_pregunta === 3) setPreguntaTres (correcta ? '1' : '0')
        if (nro_pregunta === 4) setPreguntaCuatro (correcta ? '1' : '0')
        if (nro_pregunta === 5) setPreguntaCinco (correcta ? '1' : '0')
        if (nro_pregunta === 6) setPreguntaSeis (correcta ? '1' : '0')
    }, [nro_pregunta])
    
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
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_uno === '1' ? '#04C200' : pregunta_uno === '0' ? '#FF0000' : '#D9D9D9'}]}>
                                <Text style={styles.nro_actual}>1</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_dos === '1' ? '#04C200' : pregunta_dos === '0' ? '#FF0000' : '#D9D9D9'}]}>
                                <Text style={nro_pregunta > 1 ? styles.nro_actual : styles.nro}>2</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_tres === '1' ? '#04C200' : pregunta_tres === '0' ? '#FF0000' : '#D9D9D9'}]}>
                                <Text style={nro_pregunta > 2 ? styles.nro_actual : styles.nro}>3</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_cuatro === '1' ? '#04C200' : pregunta_cuatro === '0' ? '#FF0000' : '#D9D9D9'}]}>
                                <Text style={nro_pregunta > 3 ? styles.nro_actual : styles.nro}>4</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_cinco === '1' ? '#04C200' : pregunta_cinco === '0' ? '#FF0000' : '#D9D9D9'}]}>
                                <Text style={nro_pregunta > 4 ? styles.nro_actual : styles.nro}>5</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: pregunta_seis === '1' ? '#04C200' : pregunta_seis === '0' ? '#FF0000' : '#D9D9D9'}]}>
                                <Text style={nro_pregunta > 5 ? styles.nro_actual : styles.nro}>6</Text>
                            </View>
                        </View>
                    ) : nro_pregunta < 13 ? (
                        <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: '#04C200'}]}>
                                <Text style={styles.nro_actual}>7</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={nro_pregunta > 7 ? styles.nro_actual : styles.nro}>8</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={nro_pregunta > 8 ? styles.nro_actual : styles.nro}>9</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={nro_pregunta > 9 ? styles.nro_actual : styles.nro}>10</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={nro_pregunta > 10 ? styles.nro_actual : styles.nro}>11</Text>
                            </View>
                            
                            <View style={[styles.circle]}>
                                <Text style={nro_pregunta > 11 ? styles.nro_actual : styles.nro}>12</Text>
                            </View>
                        </View>
                    ) : nro_pregunta < 19 ? (
                        <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={styles.nro_actual}>13</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={nro_pregunta > 13 ? styles.nro_actual : styles.nro}>14</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={nro_pregunta > 14 ? styles.nro_actual : styles.nro}>15</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={nro_pregunta > 15 ? styles.nro_actual : styles.nro}>16</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={nro_pregunta > 16 ? styles.nro_actual : styles.nro}>17</Text>
                            </View>
                            
                            <View style={[styles.circle]}>
                                <Text style={nro_pregunta > 17 ? styles.nro_actual : styles.nro}>18</Text>
                            </View>
                        </View>
                    ) : nro_pregunta < 25 ? (
                        <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={styles.nro_actual}>19</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={nro_pregunta > 19 ? styles.nro_actual : styles.nro}>20</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={nro_pregunta > 20 ? styles.nro_actual : styles.nro}>21</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={nro_pregunta > 21 ? styles.nro_actual : styles.nro}>22</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={nro_pregunta > 22 ? styles.nro_actual : styles.nro}>23</Text>
                            </View>
                            
                            <View style={[styles.circle]}>
                                <Text style={nro_pregunta > 23 ? styles.nro_actual : styles.nro}>24</Text>
                            </View>
                        </View>
                    ) : nro_pregunta < 31 ? (
                        <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={styles.nro_actual}>25</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={nro_pregunta > 25 ? styles.nro_actual : styles.nro}>26</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={nro_pregunta > 26 ? styles.nro_actual : styles.nro}>27</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={nro_pregunta > 27 ? styles.nro_actual : styles.nro}>28</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={nro_pregunta > 28 ? styles.nro_actual : styles.nro}>29</Text>
                            </View>
                            
                            <View style={[styles.circle]}>
                                <Text style={nro_pregunta > 29 ? styles.nro_actual : styles.nro}>30</Text>
                            </View>
                        </View>
                    ) : nro_pregunta < 37 ? (
                        <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={styles.nro_actual}>31</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={nro_pregunta > 31 ? styles.nro_actual : styles.nro}>32</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={nro_pregunta > 32 ? styles.nro_actual : styles.nro}>33</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={nro_pregunta > 33 ? styles.nro_actual : styles.nro}>34</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={nro_pregunta > 34 ? styles.nro_actual : styles.nro}>35</Text>
                            </View>
                            
                            <View style={[styles.circle]}>
                                <Text style={nro_pregunta > 35 ? styles.nro_actual : styles.nro}>36</Text>
                            </View>
                        </View>
                    )  : nro_pregunta < 41 ? (
                        <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={styles.nro_actual}>37</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={nro_pregunta > 37 ? styles.nro_actual : styles.nro}>38</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16}]}>
                                <Text style={nro_pregunta > 38 ? styles.nro_actual : styles.nro}>39</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16}]}>
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