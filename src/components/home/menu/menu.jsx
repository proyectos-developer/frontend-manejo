import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler'

import { ICON } from '../../../assets/constants/images'

export default function Menu ({navigation}) {
  return (
    <View style={styles.container_menu}>
        <TouchableOpacity style={styles.close_menu}>
            <Image source={ICON.CLOSE_MENU}/>
        </TouchableOpacity>
        <GestureHandlerRootView style={styles.container_lista}>
            <TouchableOpacity style={[styles.container_item, {marginBottom: 14}]} onPress={() => navigation.navigate('SeleccionScreen')}>
                <Text style={styles.text_item}>Categorías</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.container_item, {marginBottom: 14}]}>
                <Text style={styles.text_item}>Examen médico</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.container_item, {marginBottom: 14}]}>
                <Text style={styles.text_item}>Escuelas de manejo</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.container_item]}>
                <Text style={styles.text_item}>Iniciar sesión</Text>
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