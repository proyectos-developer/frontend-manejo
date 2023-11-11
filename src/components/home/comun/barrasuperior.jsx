import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import {ICON} from '../../../assets/constants/images'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function BarraSuperior ({navigation, nro_pregunta, categoria}) {
  return (
    <GestureHandlerRootView style={styles.container}>
            
            <View style={styles.container_row}>
                <TouchableOpacity style={[styles.boton_atras]} onPress={() => navigation.goBack()}>
                    <Image source={ICON.BARRA_SUPERIOR_BOTON_ATRAS}/>
                </TouchableOpacity>

                <View style={styles.container_titulo}>
                    <Text style={styles.texto_simulacro}>Simulacro</Text>
                    <Text style={styles.texto_categoria_uno}>{categoria}</Text>
                    <View style={styles.total_preguntas}>
                        <Text style={styles.texto_total_preguntas}>{`${nro_pregunta}/40`}</Text>
                    </View>
                </View>
                
                <TouchableOpacity style={[styles.avatar]}>
                    <Image source={ICON.BARRA_SUPERIOR_AVATAR_RED}/>
                </TouchableOpacity>
            </View>
            
            {
                nro_pregunta < 7 ? (
                    <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} source={ICON.BARRA_SUPERIOR_CIRCLE_BLACK}>
                            <Text style={styles.nro_actual}>1</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 1 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 1 ? styles.nro_actual : styles.nro}>2</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 2 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 2 ? styles.nro_actual : styles.nro}>3</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 3 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 3 ? styles.nro_actual : styles.nro}>4</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 4 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 4 ? styles.nro_actual : styles.nro}>5</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle]} 
                            source={nro_pregunta > 5 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 5 ? styles.nro_actual : styles.nro}>6</Text>
                        </ImageBackground>
                    </View>
                ) : nro_pregunta < 13 ? (
                    <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} source={ICON.BARRA_SUPERIOR_CIRCLE_BLACK}>
                            <Text style={styles.nro_actual}>7</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 7 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 7 ? styles.nro_actual : styles.nro}>8</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 8 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 8 ? styles.nro_actual : styles.nro}>9</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 9 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 9 ? styles.nro_actual : styles.nro}>10</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 10 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 10 ? styles.nro_actual : styles.nro}>11</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle]} 
                            source={nro_pregunta > 11 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 11 ? styles.nro_actual : styles.nro}>12</Text>
                        </ImageBackground>
                    </View>
                ) : nro_pregunta < 19 ? (
                    <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} source={ICON.BARRA_SUPERIOR_CIRCLE_BLACK}>
                            <Text style={styles.nro_actual}>13</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 13 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 13 ? styles.nro_actual : styles.nro}>14</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 14 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 14 ? styles.nro_actual : styles.nro}>15</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 15 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 15 ? styles.nro_actual : styles.nro}>16</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 16 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 16 ? styles.nro_actual : styles.nro}>17</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle]} 
                            source={nro_pregunta > 17 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 17 ? styles.nro_actual : styles.nro}>18</Text>
                        </ImageBackground>
                    </View>
                ) : nro_pregunta < 25 ? (
                    <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} source={ICON.BARRA_SUPERIOR_CIRCLE_BLACK}>
                            <Text style={styles.nro_actual}>19</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 19 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 19 ? styles.nro_actual : styles.nro}>20</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 20 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 20 ? styles.nro_actual : styles.nro}>21</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 21 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 21 ? styles.nro_actual : styles.nro}>22</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 22 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 22 ? styles.nro_actual : styles.nro}>23</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle]} 
                            source={nro_pregunta > 23 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 23 ? styles.nro_actual : styles.nro}>24</Text>
                        </ImageBackground>
                    </View>
                ) : nro_pregunta < 31 ? (
                    <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} source={ICON.BARRA_SUPERIOR_CIRCLE_BLACK}>
                            <Text style={styles.nro_actual}>25</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 25 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 25 ? styles.nro_actual : styles.nro}>26</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 26 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 26 ? styles.nro_actual : styles.nro}>27</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 27 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 27 ? styles.nro_actual : styles.nro}>28</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 28 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 28 ? styles.nro_actual : styles.nro}>29</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle]} 
                            source={nro_pregunta > 29 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 29 ? styles.nro_actual : styles.nro}>30</Text>
                        </ImageBackground>
                    </View>
                ) : nro_pregunta < 37 ? (
                    <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} source={ICON.BARRA_SUPERIOR_CIRCLE_BLACK}>
                            <Text style={styles.nro_actual}>31</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 31 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 31 ? styles.nro_actual : styles.nro}>32</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 32 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 32 ? styles.nro_actual : styles.nro}>33</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 33 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 33 ? styles.nro_actual : styles.nro}>34</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 34 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 34 ? styles.nro_actual : styles.nro}>35</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle]} 
                            source={nro_pregunta > 35 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 35 ? styles.nro_actual : styles.nro}>36</Text>
                        </ImageBackground>
                    </View>
                )  : nro_pregunta < 41 ? (
                    <View style={[styles.container_row, {marginLeft: 15, marginRight: 25, marginTop: 26}]}>
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} source={ICON.BARRA_SUPERIOR_CIRCLE_BLACK}>
                            <Text style={styles.nro_actual}>37</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 37 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 37 ? styles.nro_actual : styles.nro}>38</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 38 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 38 ? styles.nro_actual : styles.nro}>39</Text>
                        </ImageBackground>
                        
                        <ImageBackground style={[styles.circle, {marginRight: 16}]} 
                            source={nro_pregunta > 39 ? ICON.BARRA_SUPERIOR_CIRCLE_BLACK : ICON.BARRA_SUPERIOR_CIRCLE_GREY}>
                            <Text style={nro_pregunta > 39 ? styles.nro_actual : styles.nro}>40</Text>
                        </ImageBackground>
                        
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
        height: 40
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