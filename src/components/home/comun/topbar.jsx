import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import {ICON} from '../../../assets/constants/images'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'

import { set_id_question, set_number_question } from '../../../redux/actions/dataactions'
import {questionsdata} from '../../../redux/slice/questionsdata'
import { questionsConstants } from '../../../redux/uri/questions-constants'

export default function TopBar ({navigation, categoria, nro_categoria}) {

    const dispatch = useDispatch()
    const {number_question, id_question} = useSelector (({datareducer}) => datareducer)
    
    const go_back_question = () => {
        if (number_question === 1){
            navigation.navigate ('SelectionScreen')
        }else{
            dispatch (set_id_question(parseFloat(id_question) - 1))
            dispatch (set_number_question (number_question - 1))
            dispatch(questionsdata(questionsConstants({}, false, parseFloat(id_question) - 1, 
                    nro_categoria === '1' ? 'b2a_category' : nro_categoria === '2' ? 'b2b_category' :
                    nro_categoria === '3' ? 'a2a_category' : nro_categoria === '4' ? 'a3a_category' :
                    'a3b_category').get_question))
        }
    }

    return (
        <GestureHandlerRootView style={styles.container}>
                
                <View style={styles.container_row}>
                    <TouchableOpacity style={[styles.boton_atras]} onPress={() => go_back_question()}>
                        <Image source={ICON.BARRA_SUPERIOR_BOTON_ATRAS}/>
                    </TouchableOpacity>

                    <View style={styles.container_titulo}>
                        <Text style={styles.texto_simulacro}>Simulacro</Text>
                        <Text style={styles.texto_categoria_uno}>{categoria}</Text>
                        <View style={styles.total_preguntas}>
                            <Text style={styles.texto_total_preguntas}>{`${number_question}/40`}</Text>
                        </View>
                    </View>
                    
                    <TouchableOpacity style={[styles.avatar]} onPress={() => navigation.navigate ('UpdateDataScreen')}>
                        <Image source={ICON.BARRA_SUPERIOR_AVATAR_RED}/>
                    </TouchableOpacity>
                </View>
                
                {
                    number_question < 7 ? (
                        <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: '#252525'}]}>
                                <Text style={styles.nro_actual}>1</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 1 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 1 ? styles.nro_actual : styles.nro}>2</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 2 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 2 ? styles.nro_actual : styles.nro}>3</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 3 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 3 ? styles.nro_actual : styles.nro}>4</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 4 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 4 ? styles.nro_actual : styles.nro}>5</Text>
                            </View>
                            
                            <View style={[styles.circle, {backgroundColor: number_question > 5 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 5 ? styles.nro_actual : styles.nro}>6</Text>
                            </View>
                        </View>
                    ) : number_question < 13 ? (
                        <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: '#252525'}]}>
                                <Text style={styles.nro_actual}>7</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 7 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 7 ? styles.nro_actual : styles.nro}>8</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 8 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 8 ? styles.nro_actual : styles.nro}>9</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 9 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 9 ? styles.nro_actual : styles.nro}>10</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 10 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 10 ? styles.nro_actual : styles.nro}>11</Text>
                            </View>
                            
                            <View style={[styles.circle, {backgroundColor: number_question > 11 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 11 ? styles.nro_actual : styles.nro}>12</Text>
                            </View>
                        </View>
                    ) : number_question < 19 ? (
                        <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: '#252525'}]}>
                                <Text style={styles.nro_actual}>13</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 13 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 13 ? styles.nro_actual : styles.nro}>14</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 14 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 14 ? styles.nro_actual : styles.nro}>15</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 15 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 15 ? styles.nro_actual : styles.nro}>16</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 16 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 16 ? styles.nro_actual : styles.nro}>17</Text>
                            </View>
                            
                            <View style={[styles.circle, {backgroundColor: number_question > 17 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 17 ? styles.nro_actual : styles.nro}>18</Text>
                            </View>
                        </View>
                    ) : number_question < 25 ? (
                        <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: '#252525'}]}>
                                <Text style={styles.nro_actual}>19</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 19 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 19 ? styles.nro_actual : styles.nro}>20</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 20 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 20 ? styles.nro_actual : styles.nro}>21</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 21 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 21 ? styles.nro_actual : styles.nro}>22</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 22 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 22 ? styles.nro_actual : styles.nro}>23</Text>
                            </View>
                            
                            <View style={[styles.circle, {backgroundColor: number_question > 23 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 23 ? styles.nro_actual : styles.nro}>24</Text>
                            </View>
                        </View>
                    ) : number_question < 31 ? (
                        <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: '#252525'}]}>
                                <Text style={styles.nro_actual}>25</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 25 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 25 ? styles.nro_actual : styles.nro}>26</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 26 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 26 ? styles.nro_actual : styles.nro}>27</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 27 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 27 ? styles.nro_actual : styles.nro}>28</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 28 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 28 ? styles.nro_actual : styles.nro}>29</Text>
                            </View>
                            
                            <View style={[styles.circle, {backgroundColor: number_question > 29 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 29 ? styles.nro_actual : styles.nro}>30</Text>
                            </View>
                        </View>
                    ) : number_question < 37 ? (
                        <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: '#252525'}]}>
                                <Text style={styles.nro_actual}>31</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 31 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 31 ? styles.nro_actual : styles.nro}>32</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 32 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 32 ? styles.nro_actual : styles.nro}>33</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 33 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 33 ? styles.nro_actual : styles.nro}>34</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 34 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 34 ? styles.nro_actual : styles.nro}>35</Text>
                            </View>
                            
                            <View style={[styles.circle, {backgroundColor: number_question > 35 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 35 ? styles.nro_actual : styles.nro}>36</Text>
                            </View>
                        </View>
                    )  : number_question < 41 ? (
                        <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: '#252525'}]}>
                                <Text style={styles.nro_actual}>37</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 37 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 37 ? styles.nro_actual : styles.nro}>38</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 38 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 38 ? styles.nro_actual : styles.nro}>39</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: number_question > 39 ? '#252525' : '#d9d9d9'}]}>
                                <Text style={number_question > 39 ? styles.nro_actual : styles.nro}>40</Text>
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
        borderRadius: 20
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