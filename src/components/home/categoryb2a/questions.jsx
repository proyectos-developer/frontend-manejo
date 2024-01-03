import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ICON } from '../../../assets/constants/images'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler'
import TopBar from '../comun/topbar'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import {questionsdata} from '../../../redux/slice/questionsdata'
import { questionsConstants } from '../../../redux/uri/questions-constants'
import { useEffect } from 'react'
import { set_id_question, set_number_question, set_answer_1, set_answer_2, set_answer_3, set_answer_4, set_answer_5, set_answer_6, 
         set_answer_7, set_answer_8, set_answer_9, set_answer_10, set_answer_11, set_answer_12, set_answer_13, set_answer_14, set_answer_15, 
         set_answer_16, set_answer_17, set_answer_18, set_answer_19, set_answer_20, set_answer_21, set_answer_22, set_answer_23, set_answer_24, set_answer_25, 
         set_answer_26, set_answer_27, set_answer_28, set_answer_29, set_answer_31, set_answer_32, 
         set_answer_33, set_answer_34, set_answer_35, set_answer_36, set_answer_37, 
         set_answer_38, set_answer_39, set_answer_30, set_answer_40 } from '../../../redux/actions/dataactions'

export default function B2aCategoryQuestions ({navigation}) {

    const dispatch = useDispatch ()
    const isFocused = useIsFocused()

    const [option,   setOption]   = useState ('')
    const [question_type, setQuestionType] = useState ('')
    const [pregunta, setQuestion] = useState ('')
    const [option_a, setOptionA]  = useState ('')
    const [option_b, setOptionB]  = useState ('')
    const [option_c, setOptionC]  = useState ('')
    const [option_d, setOptionD]  = useState ('')
    const [right_answer, setRightAnswer]  = useState ('')

    const {get_question} = useSelector(({questions}) => questions)
    const begin = useSelector(({begin}) => begin)
    const {id_question, number_question} = useSelector(({datareducer}) => datareducer)

    /** Searching for the corresponding question
     * 
    */
    useEffect (() => {
        if (isFocused){
            dispatch(questionsdata(questionsConstants({}, false, id_question, 'b2a_category').get_question))
        }
    }, [isFocused])

    /**You get 
     * question type (with (1) or without (0) image), 
     * question, 
     * options and 
     * answer of the question
    */
    useEffect (() => {
        if (get_question && get_question.question){
            setQuestion(get_question.question.question)
            setQuestionType(get_question.question.question_type)
            setOptionA(get_question.question.option_a)
            setOptionB(get_question.question.option_b)
            setOptionC(get_question.question.option_c)
            setOptionD(get_question.question.option_d)
            setRightAnswer (get_question.question.answer)
        }
    }, [get_question])

    /**Function where the user's response is saved 
     * and the next question is moved on. */
    const next_question = () => {
        if (option === ''){

        }else{
            const num_question = number_question
            const update_data = {
                'user': option,
                'right_answer': option !== right_answer ? false : true,
                'question': right_answer
            }      
            setOption('')

            dispatch (num_question === 1 ? set_answer_1(update_data) : 
                      num_question === 2 ? set_answer_2 (update_data) : 
                      num_question === 3 ? set_answer_3(update_data) :
                      num_question === 4 ? set_answer_4 (update_data) : 
                      num_question === 5 ? set_answer_5(update_data) : 
                      num_question === 6 ? set_answer_6(update_data) :
                      num_question === 7 ? set_answer_7 (update_data) : 
                      num_question === 8 ? set_answer_8(update_data) : 
                      num_question === 9 ? set_answer_9(update_data) : 
                      num_question === 10 ? set_answer_10 (update_data) :
                      num_question === 11 ? set_answer_11(update_data) : 
                      num_question === 12 ? set_answer_12 (update_data) : 
                      num_question === 13 ? set_answer_13(update_data) :
                      num_question === 14 ? set_answer_14 (update_data) : 
                      num_question === 15 ? set_answer_15(update_data) : 
                      num_question === 16 ? set_answer_16(update_data) :
                      num_question === 17 ? set_answer_17 (update_data) : 
                      num_question === 18 ? set_answer_18(update_data) : 
                      num_question === 19 ? set_answer_19(update_data) :
                      num_question === 20 ? set_answer_20 (update_data) :
                      num_question === 21 ? set_answer_21(update_data) : 
                      num_question === 22 ? set_answer_22 (update_data) : 
                      num_question === 23 ? set_answer_23(update_data) :
                      num_question === 24 ? set_answer_24 (update_data) : 
                      num_question === 25 ? set_answer_25(update_data) : 
                      num_question === 26 ? set_answer_26(update_data) :
                      num_question === 27 ? set_answer_27 (update_data) : 
                      num_question === 28 ? set_answer_28(update_data) : 
                      num_question === 29 ? set_answer_29(update_data) : 
                      num_question === 30 ? set_answer_30 (update_data) :
                      num_question === 31 ? set_answer_31(update_data) : 
                      num_question === 32 ? set_answer_32 (update_data) : 
                      num_question === 33 ? set_answer_33(update_data) :
                      num_question === 34 ? set_answer_34 (update_data) : 
                      num_question === 35 ? set_answer_35(update_data) : 
                      num_question === 36 ? set_answer_36(update_data) :
                      num_question === 37 ? set_answer_37 (update_data) : 
                      num_question === 38 ? set_answer_38(update_data) : 
                      num_question === 39 ? set_answer_39(update_data) : 
                                            set_answer_40 (update_data))
            dispatch(set_id_question(parseFloat(id_question) + 1))
            dispatch(set_number_question(num_question + 1))
            dispatch(questionsdata(questionsConstants({}, false, parseFloat(id_question) + 1, 'b2a_category').get_question))
        }
    }

    /**Function that finish the questionnaire 
     * and go to the summary of answers*/
    const end_questions = () => {
        if (option !== ''){
            const update_data = {
                'user': option,
                'right_answer': option !== right_answer ? false : true,
                'question': right_answer
            }    
            setOption ('')
            dispatch(set_answer_40 (update_data))
            dispatch(questionsdata(questionsConstants({}, true, 0, 0).get_question))
            navigation.navigate('AnswerScreen')
        }
    }

    return (
        <GestureHandlerRootView style={{flex: 1, width: '100%'}}>
            
            <TopBar navigation={navigation} categoria={'CATEGORÍA 1 - B2A'} nro_categoria={'1'}/>
            
            <View style={styles.container}>
                <Text style={styles.texto_pregunta}>{pregunta}</Text>
                {
                    question_type === '0' ? (
                        <TouchableOpacity style={styles.option_respuesta} onPress={() => setOption ('a')}>
                            <Image source={option === 'a' ? ICON.RADIO_SELECT : ICON.RADIO_UNSELECT} style={styles.radio_select}/>
                            <Text style={styles.texto_opcion}>{option_a}</Text>
                        </TouchableOpacity>
                    ) : question_type === '1' ? (
                        <View style={styles.option_imagen}>
                            <Image source={ICON.PREGUNTA_IMAGEN} />
                        </View>
                    ) :null
                }
                <TouchableOpacity style={styles.option_respuesta} onPress={() => setOption ('b')}>
                    <Image source={option === 'b' ? ICON.RADIO_SELECT : ICON.RADIO_UNSELECT} style={styles.radio_select}/>
                    <Text style={styles.texto_opcion}>{option_b}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option_respuesta} onPress={() => setOption ('c')}>
                    <Image source={option === 'c' ? ICON.RADIO_SELECT : ICON.RADIO_UNSELECT} style={styles.radio_select}/>
                    <Text style={styles.texto_opcion}>{option_c}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option_respuesta} onPress={() => setOption ('d')}>
                    <Image source={option === 'd' ? ICON.RADIO_SELECT : ICON.RADIO_UNSELECT} style={styles.radio_select}/>
                    <Text style={styles.texto_opcion}>{option_d}</Text>
                </TouchableOpacity>

                {
                    number_question === 40 ? (
                        <TouchableOpacity style={[styles.boton_siguiente, {backgroundColor: '#ff0000', marginBottom: 11}]} onPress={() => end_questions()}>
                            <Text style={styles.texto_finalizar}>Finalizar</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={styles.boton_siguiente} onPress={() => next_question()}>
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
    option_respuesta: {
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
    option_imagen: {
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