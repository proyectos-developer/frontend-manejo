import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler'

import { ICON } from '../../../assets/constants/images'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { set_menu_open } from '../../../redux/actions/dataactions'

export default function Menu ({navigation}) {

    const dispatch = useDispatch()
    const [authenticated, setAuthenticated] = useState(false)

    useEffect (() => {
        obtener_token()
    }, [])

    const obtener_token = async () => {
        try {
            const token = AsyncStorage.getItem ('token')
            if (token){
                setAuthenticated(true)
            }   
        } catch (error) {
            
        }
    }

    const cerrar_sesion = async() => {
        try {
            await AsyncStorage.removeItem ('token')
            await AsyncStorage.removeItem ('email')
            dispatch (set_menu_open(false))
            navigation.navigate ('LoginScreen')
        } catch (error) {
            
        }
    }

    return (
        <View style={styles.container_menu}>
            <TouchableOpacity style={styles.close_menu} onPress={() => dispatch(set_menu_open(false))}>
                <Image source={ICON.CLOSE_MENU}/>
            </TouchableOpacity>
            <GestureHandlerRootView style={styles.container_lista}>
                <TouchableOpacity style={[styles.container_item, {marginBottom: 14}]} onPress={() => {navigation.navigate('SeleccionScreen'); dispatch(set_menu_open(false))}}>
                    <Text style={styles.text_item}>Categorías</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={[styles.container_item, {marginBottom: 14}]} onPress={() => {navigation.navigate('ExamenMedicoScreen'); dispatch(set_menu_open(false))}}>
                    <Text style={styles.text_item}>Examen médico</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={[styles.container_item, {marginBottom: 14}]} onPress={() => {navigation.navigate('EscuelasManejoScreen'); dispatch(set_menu_open(false))}}>
                    <Text style={styles.text_item}>Escuelas de manejo</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={[styles.container_item]} onPress={() => cerrar_sesion()}>
                    <Text style={styles.text_item}>
                        {
                            authenticated ? (
                                'Cerrar sesión'
                            ) : 'Iniciar sesión'
                        }
                    </Text>
                </TouchableOpacity>
            </GestureHandlerRootView>
        </View> 
    )
}


const styles = StyleSheet.create({
    container_menu: {
        width: 229,
        height: 318,
        paddingTop: 12,
        paddingBottom: 20,
        paddingRight: 22,
        paddingLeft: 13,
        backgroundColor: '#c5c5c5',
        borderRadius: 8,
        position: 'absolute',
        borderWidth: 2,
        borderColor: 'white',
        top: 25,
        left: 14,
        elevation: 8,
        zIndex: 9999
    },
    close_menu: {
        width: 70,
        height: 45
    },
    container_lista: {
        paddingLeft: 8,
        paddingTop: 19
    },
    container_item: {
        width: 186,
        height: 45,
        backgroundColor: '#f1f1f1',
        paddingLeft: 17,
        borderRadius: 8
    },
    text_item: {
        lineHeight: 45,
        fontSize: 16,
        fontFamily: 'Nunito-SemiBold',
        color: '#252525'
    }
})