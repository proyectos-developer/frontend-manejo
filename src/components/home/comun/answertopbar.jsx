import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import {ICON} from '../../../assets/constants/images'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'

import { set_id_question, set_number_question } from '../../../redux/actions/dataactions'
import {questionsdata} from '../../../redux/slice/questionsdata'
import { questionsConstants } from '../../../redux/uri/questions-constants'
import { useState } from 'react'
import { useEffect } from 'react'

export default function AnswerTopBar ({navigation, categoria, number_category, right_answer}) {

    const dispatch = useDispatch()
    const {id_question, number_question} = useSelector (({datareducer}) => datareducer)

    const [question_1, setQuestion1] = useState ('#D9D9D9')
    const [question_2, setQuestion2] = useState ('#D9D9D9')
    const [question_3, setQuestion3] = useState ('#D9D9D9')
    const [question_4, setQuestion4] = useState ('#D9D9D9')
    const [question_5, setQuestion5] = useState ('#D9D9D9')
    const [question_6, setQuestion6] = useState ('#D9D9D9')
    const [question_7, setQuestion7] = useState ('#D9D9D9')
    const [question_8, setQuestion8] = useState ('#D9D9D9')
    const [question_9, setQuestion9] = useState ('#D9D9D9')
    const [question_10, setQuestion10] = useState ('#D9D9D9')
    const [question_11, setQuestion11] = useState ('#D9D9D9')
    const [question_12, setQuestion12] = useState ('#D9D9D9')
    const [question_13, setQuestion13] = useState ('#D9D9D9')
    const [question_14, setQuestion14] = useState ('#D9D9D9')
    const [question_15, setQuestion15] = useState ('#D9D9D9')
    const [question_16, setQuestion16] = useState ('#D9D9D9')
    const [question_17, setQuestion17] = useState ('#D9D9D9')
    const [question_18, setQuestion18] = useState ('#D9D9D9')
    const [question_19, setQuestion19] = useState ('#D9D9D9')
    const [question_20, setQuestion20] = useState ('#D9D9D9')
    const [question_21, setQuestion21] = useState ('#D9D9D9')
    const [question_22, setQuestion22] = useState ('#D9D9D9')
    const [question_23, setQuestion23] = useState ('#D9D9D9')
    const [question_24, setQuestion24] = useState ('#D9D9D9')
    const [question_25, setQuestion25] = useState ('#D9D9D9')
    const [question_26, setQuestion26] = useState ('#D9D9D9')
    const [question_27, setQuestion27] = useState ('#D9D9D9')
    const [question_28, setQuestion28] = useState ('#D9D9D9')
    const [question_29, setQuestion29] = useState ('#D9D9D9')
    const [question_30, setQuestion30] = useState ('#D9D9D9')
    const [question_31, setQuestion31] = useState ('#D9D9D9')
    const [question_32, setQuestion32] = useState ('#D9D9D9')
    const [question_33, setQuestion33] = useState ('#D9D9D9')
    const [question_34, setQuestion34] = useState ('#D9D9D9')
    const [question_35, setQuestion35] = useState ('#D9D9D9')
    const [question_36, setQuestion36] = useState ('#D9D9D9')
    const [question_37, setQuestion37] = useState ('#D9D9D9')
    const [question_38, setQuestion38] = useState ('#D9D9D9')
    const [question_39, setQuestion39] = useState ('#D9D9D9')
    const [question_40, setQuestion40] = useState ('#D9D9D9')

    const {get_question} = useSelector(({questions}) => questions)

    useEffect (() => {
    }, [])

    useEffect (() => {
        switch (number_question){
            case 1: {if (right_answer) setQuestion1('#04C200'); else if (!right_answer) setQuestion1('#FF0000'); return;}
            case 2: {if (right_answer) setQuestion2('#04C200'); else if (!right_answer) setQuestion2('#FF0000'); return;}
            case 3: {if (right_answer) setQuestion3('#04C200'); else if (!right_answer) setQuestion3('#FF0000'); return;}
            case 4: {if (right_answer) setQuestion4('#04C200'); else if (!right_answer) setQuestion4('#FF0000'); return;}
            case 5: {if (right_answer) setQuestion5('#04C200'); else if (!right_answer) setQuestion5('#FF0000'); return;}
            case 6:{ if (right_answer) setQuestion6('#04C200'); else if (!right_answer) setQuestion6('#FF0000'); return;}
            case 7: {if (right_answer) setQuestion7('#04C200'); else if (!right_answer) setQuestion7('#FF0000'); return;}
            case 8: {if (right_answer) setQuestion8('#04C200'); else if (!right_answer) setQuestion8('#FF0000'); return;}
            case 9: {if (right_answer) setQuestion9('#04C200'); else if (!right_answer) setQuestion9('#FF0000'); return;}
            case 10: {if (right_answer) setQuestion10('#04C200'); else if (!right_answer) setQuestion10('#FF0000'); return;}
            case 11: {if (right_answer) setQuestion11('#04C200'); else if (!right_answer) setQuestion11('#FF0000'); return;}
            case 12: {if (right_answer) setQuestion12('#04C200'); else if (!right_answer) setQuestion12('#FF0000'); return;}
            case 13: {if (right_answer) setQuestion13('#04C200'); else if (!right_answer) setQuestion13('#FF0000'); return;}
            case 14: {if (right_answer) setQuestion14('#04C200'); else if (!right_answer) setQuestion14('#FF0000'); return;}
            case 15: {if (right_answer) setQuestion15('#04C200'); else if (!right_answer) setQuestion15('#FF0000'); return;}
            case 16:{ if (right_answer) setQuestion16('#04C200'); else if (!right_answer) setQuestion16('#FF0000'); return;}
            case 17: {if (right_answer) setQuestion17('#04C200'); else if (!right_answer) setQuestion17('#FF0000'); return;}
            case 18: {if (right_answer) setQuestion18('#04C200'); else if (!right_answer) setQuestion18('#FF0000'); return;}
            case 19: {if (right_answer) setQuestion19('#04C200'); else if (!right_answer) setQuestion19('#FF0000'); return;}
            case 20: {if (right_answer) setQuestion20('#04C200'); else if (!right_answer) setQuestion20('#FF0000'); return;}
            case 21: {if (right_answer) setQuestion21('#04C200'); else if (!right_answer) setQuestion21('#FF0000'); return;}
            case 22: {if (right_answer) setQuestion22('#04C200'); else if (!right_answer) setQuestion22('#FF0000'); return;}
            case 23: {if (right_answer) setQuestion23('#04C200'); else if (!right_answer) setQuestion23('#FF0000'); return;}
            case 24: {if (right_answer) setQuestion24('#04C200'); else if (!right_answer) setQuestion24('#FF0000'); return;}
            case 25: {if (right_answer) setQuestion25('#04C200'); else if (!right_answer) setQuestion25('#FF0000'); return;}
            case 26:{ if (right_answer) setQuestion26('#04C200'); else if (!right_answer) setQuestion26('#FF0000'); return;}
            case 27: {if (right_answer) setQuestion27('#04C200'); else if (!right_answer) setQuestion27('#FF0000'); return;}
            case 28: {if (right_answer) setQuestion28('#04C200'); else if (!right_answer) setQuestion28('#FF0000'); return;}
            case 29: {if (right_answer) setQuestion29('#04C200'); else if (!right_answer) setQuestion29('#FF0000'); return;}
            case 30: {if (right_answer) setQuestion30('#04C200'); else if (!right_answer) setQuestion30('#FF0000'); return;}
            case 31: {if (right_answer) setQuestion31('#04C200'); else if (!right_answer) setQuestion31('#FF0000'); return;}
            case 32: {if (right_answer) setQuestion32('#04C200'); else if (!right_answer) setQuestion32('#FF0000'); return;}
            case 33: {if (right_answer) setQuestion33('#04C200'); else if (!right_answer) setQuestion33('#FF0000'); return;}
            case 34: {if (right_answer) setQuestion34('#04C200'); else if (!right_answer) setQuestion34('#FF0000'); return;}
            case 35: {if (right_answer) setQuestion35('#04C200'); else if (!right_answer) setQuestion35('#FF0000'); return;}
            case 36:{ if (right_answer) setQuestion36('#04C200'); else if (!right_answer) setQuestion36('#FF0000'); return;}
            case 37: {if (right_answer) setQuestion37('#04C200'); else if (!right_answer) setQuestion37('#FF0000'); return;}
            case 38: {if (right_answer) setQuestion38('#04C200'); else if (!right_answer) setQuestion38('#FF0000'); return;}
            case 39: {if (right_answer) setQuestion39('#04C200'); else if (!right_answer) setQuestion39('#FF0000'); return;}
            case 40: {if (right_answer) setQuestion40('#04C200'); else if (!right_answer) setQuestion40('#FF0000'); return;}
            default: return;
        }
    }, [number_question, get_question])
    
    const question_back = () => {
        if (number_question === 1){
            navigation.navigate ('AnswerScreen')
        }else{
            dispatch (set_id_question(parseFloat(id_question) - 1))
            dispatch (set_number_question (number_question - 1))
            dispatch(questionsdata(questionsConstants({}, false, parseFloat(id_question) - 1, 
                    number_category === '1' ? 'b2a_category' : number_category === '2' ? 'b2b_category' :
                    number_category === '3' ? 'a3a_category' : number_category === '4' ? 'a2a_category' :
                    'a3b_category').get_question))
        }
    }

    return (
        <GestureHandlerRootView style={styles.container}>
                
                <View style={styles.container_row}>
                    <TouchableOpacity style={[styles.boton_atras]} onPress={() => question_back()}>
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
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_1}]}>
                                <Text style={styles.nro_actual}>1</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_2}]}>
                                <Text style={number_question > 1 ? styles.nro_actual : styles.nro}>2</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_3}]}>
                                <Text style={number_question > 2 ? styles.nro_actual : styles.nro}>3</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_4}]}>
                                <Text style={number_question > 3 ? styles.nro_actual : styles.nro}>4</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_5}]}>
                                <Text style={number_question > 4 ? styles.nro_actual : styles.nro}>5</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_6}]}>
                                <Text style={number_question > 5 ? styles.nro_actual : styles.nro}>6</Text>
                            </View>
                        </View>
                    ) : number_question < 13 ? (
                        <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_7}]}>
                                <Text style={styles.nro_actual}>7</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_8}]}>
                                <Text style={number_question > 7 ? styles.nro_actual : styles.nro}>8</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_9}]}>
                                <Text style={number_question > 8 ? styles.nro_actual : styles.nro}>9</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_10}]}>
                                <Text style={number_question > 9 ? styles.nro_actual : styles.nro}>10</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_11}]}>
                                <Text style={number_question > 10 ? styles.nro_actual : styles.nro}>11</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_12}]}>
                                <Text style={number_question > 11 ? styles.nro_actual : styles.nro}>12</Text>
                            </View>
                        </View>
                    ) : number_question < 19 ? (
                        <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_13}]}>
                                <Text style={styles.nro_actual}>13</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_14}]}>
                                <Text style={number_question > 13 ? styles.nro_actual : styles.nro}>14</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_15}]}>
                                <Text style={number_question > 14 ? styles.nro_actual : styles.nro}>15</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_16}]}>
                                <Text style={number_question > 15 ? styles.nro_actual : styles.nro}>16</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_17}]}>
                                <Text style={number_question > 16 ? styles.nro_actual : styles.nro}>17</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_18}]}>
                                <Text style={number_question > 17 ? styles.nro_actual : styles.nro}>18</Text>
                            </View>
                        </View>
                    ) : number_question < 25 ? (
                        <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_19}]}>
                                <Text style={styles.nro_actual}>19</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_20}]}>
                                <Text style={number_question > 19 ? styles.nro_actual : styles.nro}>20</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_21}]}>
                                <Text style={number_question > 20 ? styles.nro_actual : styles.nro}>21</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_22}]}>
                                <Text style={number_question > 21 ? styles.nro_actual : styles.nro}>22</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_23}]}>
                                <Text style={number_question > 22 ? styles.nro_actual : styles.nro}>23</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_24}]}>
                                <Text style={number_question > 23 ? styles.nro_actual : styles.nro}>24</Text>
                            </View>
                        </View>
                    ) : number_question < 31 ? (
                        <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_25}]}>
                                <Text style={styles.nro_actual}>25</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_26}]}>
                                <Text style={number_question > 25 ? styles.nro_actual : styles.nro}>26</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_27}]}>
                                <Text style={number_question > 26 ? styles.nro_actual : styles.nro}>27</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_28}]}>
                                <Text style={number_question > 27 ? styles.nro_actual : styles.nro}>28</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_29}]}>
                                <Text style={number_question > 28 ? styles.nro_actual : styles.nro}>29</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_30}]}>
                                <Text style={number_question > 29 ? styles.nro_actual : styles.nro}>30</Text>
                            </View>
                        </View>
                    ) : number_question < 37 ? (
                        <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_31}]}>
                                <Text style={styles.nro_actual}>31</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_32}]}>
                                <Text style={number_question > 31 ? styles.nro_actual : styles.nro}>32</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_33}]}>
                                <Text style={number_question > 32 ? styles.nro_actual : styles.nro}>33</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_34}]}>
                                <Text style={number_question > 33 ? styles.nro_actual : styles.nro}>34</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_35}]}>
                                <Text style={number_question > 34 ? styles.nro_actual : styles.nro}>35</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_36}]}>
                                <Text style={number_question > 35 ? styles.nro_actual : styles.nro}>36</Text>
                            </View>
                        </View>
                    )  : number_question < 41 ? (
                        <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_37}]}>
                                <Text style={styles.nro_actual}>37</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_38}]}>
                                <Text style={number_question > 37 ? styles.nro_actual : styles.nro}>38</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_39}]}>
                                <Text style={number_question > 38 ? styles.nro_actual : styles.nro}>39</Text>
                            </View>
                            
                            <View style={[styles.circle, {marginRight: 16, backgroundColor: question_40}]}>
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