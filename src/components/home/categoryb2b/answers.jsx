import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ICON } from '../../../assets/constants/images'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler'
import AnswerTopBar from '../comun/answertopbar'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import {questionsdata} from '../../../redux/slice/questionsdata'
import { questionsConstants } from '../../../redux/uri/questions-constants'
import { useEffect } from 'react'
import { set_id_question, set_number_question } from '../../../redux/actions/dataactions'

export default function B2bCategoryAnswers ({navigation}) {

    const dispatch = useDispatch ()
    const isFocused = useIsFocused()

    const [question_type, setQuestionType] = useState ('')
    const [question, setQuestion] = useState ('')
    const [option_a, setOptionA]  = useState ('')
    const [option_b, setOptionB]  = useState ('')
    const [option_c, setOptionC]  = useState ('')
    const [option_d, setOptionD]  = useState ('')

    const begin = useSelector(({begin}) => begin)
    const {get_question} = useSelector(({questions}) => questions)
    const {id_question, number_question, number_category, answer_list} = useSelector (({datareducer}) => datareducer)

    /** Searching for the corresponding question and right answer
     * 
    */
    useEffect (() => {
        if (isFocused){
            dispatch(questionsdata(questionsConstants({}, false, id_question, 'b2b_category').get_question))
        }
    }, [isFocused])

    /**You get 
     * question type (with (1) or without (0) image), 
     * question, 
     * options and 
     * answer of the question
    */
    useEffect (() => {
        if ((get_question && get_question.question)){
            setQuestion(get_question.question.question)
            setQuestionType(get_question.question.question_type)
            setOptionA(get_question.question.option_a)
            setOptionB(get_question.question.option_b)
            setOptionC(get_question.question.option_c)
            setOptionD(get_question.question.option_d)
        }
    }, [get_question])

    /**Function where goes to the next question is moved on. */
    const next_question = () => {
        dispatch(set_number_question(number_question + 1))
        dispatch(set_id_question(parseFloat(id_question) + 1))
        dispatch(questionsdata(questionsConstants({}, true, parseFloat(id_question) + 1, 0).get_question))
        dispatch(questionsdata(questionsConstants({}, false, parseFloat(id_question) + 1, 'b2b_category').get_question))
    }

    /**Function that allows you to repeat the exam  */
    const repeat_examen = () => {
        dispatch(questionsdata(questionsConstants({}, true, 0, 0).get_question))
        navigation.navigate('SelectionScreen')
    }

    return (
        <GestureHandlerRootView style={{flex: 1, width: '100%'}}>
            
            <AnswerTopBar navigation={navigation} categoria={'CATEGORÍA 1 - B2A'} number_category={'1'}
                    right_answer={answer_list[number_question - 1].right_answer}/>
            
            <View style={styles.container}>
                <Text style={styles.texto_pregunta}>{question}</Text>
                {
                    (get_question && get_question.question) && question_type === '0' ? (
                        get_question.question.answer === 'a' ? (
                            <TouchableOpacity style={[styles.option_respuesta, {backgroundColor: 'rgba(4, 194, 0, 0.2)',  borderColor: '#04C200', borderWidth: 2}]}>
                                <Image source={ICON.RESULTADOS_RADIO_BUTTON_GREEN} style={styles.radio_select}/>
                                <Text style={styles.texto_opcion}>{option_a}</Text>
                            </TouchableOpacity>
                        ) : get_question.question.answer !== 'a' && answer_list[number_question - 1].usuario === 'a'  ? (
                            <TouchableOpacity style={[styles.option_respuesta, {backgroundColor: 'rgba(255, 0, 0, 0.2)',  borderColor: '#ff0000', borderWidth: 2}]}>
                                <Image source={ICON.RESULTADOS_RADIO_BUTTON_RED} style={styles.radio_select}/>
                                <Text style={styles.texto_opcion}>{option_a}</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity style={[styles.option_respuesta, {backgroundColor: 'white',  borderColor: 'white', borderWidth: 2}]}>
                                <Image source={ICON.RADIO_UNSELECT} style={styles.radio_select}/>
                                <Text style={styles.texto_opcion}>{option_a}</Text>
                            </TouchableOpacity>
                        )
                    ) : question_type === '1' ? (
                        <View style={styles.option_imagen}>
                            <Image source={ICON.PREGUNTA_IMAGEN} />
                        </View>
                    ) :null
                }
                {
                    (get_question && get_question.question) && get_question.question.answer === 'b' ? (
                        <TouchableOpacity style={[styles.option_respuesta, {backgroundColor: 'rgba(4, 194, 0, 0.2)',  borderColor: '#04C200', borderWidth: 2}]}>
                            <Image source={ICON.RESULTADOS_RADIO_BUTTON_GREEN} style={styles.radio_select}/>
                            <Text style={styles.texto_opcion}>{option_b}</Text>
                        </TouchableOpacity>
                    ) : (get_question && get_question.question) && get_question.question.answer !== 'b' && answer_list[number_question - 1].usuario === 'b'  ? (
                        <TouchableOpacity style={[styles.option_respuesta, {backgroundColor: 'rgba(255, 0, 0, 0.2)',  borderColor: '#ff0000', borderWidth: 2}]}>
                            <Image source={ICON.RESULTADOS_RADIO_BUTTON_RED} style={styles.radio_select}/>
                            <Text style={styles.texto_opcion}>{option_b}</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={[styles.option_respuesta, {backgroundColor: 'white',  borderColor: 'white', borderWidth: 2}]}>
                            <Image source={ICON.RADIO_UNSELECT} style={styles.radio_select}/>
                            <Text style={styles.texto_opcion}>{option_b}</Text>
                        </TouchableOpacity>
                    )
                }
                {
                    (get_question && get_question.question) && get_question.question.answer === 'c' ? (
                        <TouchableOpacity style={[styles.option_respuesta, {backgroundColor: 'rgba(4, 194, 0, 0.2)',  borderColor: '#04C200', borderWidth: 2}]}>
                            <Image source={ICON.RESULTADOS_RADIO_BUTTON_GREEN} style={styles.radio_select}/>
                            <Text style={styles.texto_opcion}>{option_c}</Text>
                        </TouchableOpacity>
                    ) : (get_question && get_question.question) && get_question.question.answer !== 'c' && answer_list[number_question - 1].usuario === 'c'  ? (
                        <TouchableOpacity style={[styles.option_respuesta, {backgroundColor: 'rgba(255, 0, 0, 0.2)',  borderColor: '#ff0000', borderWidth: 2}]}>
                            <Image source={ICON.RESULTADOS_RADIO_BUTTON_RED} style={styles.radio_select}/>
                            <Text style={styles.texto_opcion}>{option_c}</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={[styles.option_respuesta, {backgroundColor: 'white',  borderColor: 'white', borderWidth: 2}]}>
                            <Image source={ICON.RADIO_UNSELECT} style={styles.radio_select}/>
                            <Text style={styles.texto_opcion}>{option_c}</Text>
                        </TouchableOpacity>
                    )
                }
                {
                    (get_question && get_question.question) && get_question.question.answer === 'd' ? (
                        <TouchableOpacity style={[styles.option_respuesta, {backgroundColor: 'rgba(4, 194, 0, 0.2)',  borderColor: '#04C200', borderWidth: 2}]}>
                            <Image source={ICON.RESULTADOS_RADIO_BUTTON_GREEN} style={styles.radio_select}/>
                            <Text style={styles.texto_opcion}>{option_d}</Text>
                        </TouchableOpacity>
                    ) : (get_question && get_question.question) && get_question.question.answer !== 'd' && answer_list[number_question - 1].usuario === 'd'  ? (
                        <TouchableOpacity style={[styles.option_respuesta, {backgroundColor: 'rgba(255, 0, 0, 0.2)',  borderColor: '#ff0000', borderWidth: 2}]}>
                            <Image source={ICON.RESULTADOS_RADIO_BUTTON_RED} style={styles.radio_select}/>
                            <Text style={styles.texto_opcion}>{option_d}</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={[styles.option_respuesta, {backgroundColor: 'white',  borderColor: 'white', borderWidth: 2}]}>
                            <Image source={ICON.RADIO_UNSELECT} style={styles.radio_select}/>
                            <Text style={styles.texto_opcion}>{option_d}</Text>
                        </TouchableOpacity>
                    )
                }
                {
                    number_question === 40 ? (
                        <TouchableOpacity style={styles.boton_siguiente} onPress={() => repeat_examen()}>
                            <Text style={styles.texto_siguiente}>REPETIR EXAMEN</Text>
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