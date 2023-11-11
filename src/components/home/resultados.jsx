import {useEffect, useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {ICON} from '../../assets/constants/images'

export default function ResultadosScreen ({navigation}) {

    return (
        <GestureHandlerRootView style={styles.container}>
            <ImageBackground style={styles.fondo} source={ICON.RESPUESTAS_BARRA_SUPERIOR_RED}>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity style={[styles.menu]}>
                      <Image source={ICON.PANTALLA_SELECCION_MENU}/>
                  </TouchableOpacity>
                  
                  <View style={styles.container_titulo}>
                    <Text style={styles.texto_selecciona}>Simulacro</Text>
                    <Text style={styles.texto_categoria}>CATEGORÍA | - B2A</Text>
                  </View>
                  
                  <TouchableOpacity style={[styles.avatar]}>
                      <Image source={ICON.PANTALLA_SELECCION_AVATAR}/>
                  </TouchableOpacity>
                </View>
                  
                <View style={styles.container_texto_resultados}>
                  <Text style={styles.texto_fueron}>Estos fueron tus</Text>
                  <Text style={styles.texto_resultados}>RESULTADOS</Text>
                </View>
            </ImageBackground>
            
            <TouchableOpacity style={[styles.boton_seleccion, {backgroundColor: '#ededed', top: 246}]} onPress={() => navigation.navigate ('CatgoriaUnoStack')}>
              <View style={styles.seleccion_texto}>
                <Text style={{fontFamily: 'Nunito-ExtraBold', fontSize: 20, marginBottom: 6, color: '#252525', lineHeight: 22}}>CATEGORÍA 1</Text>
                <Text style={{fontFamily: 'Nunito-Regular', fontSize: 15, color: '#252525', lineHeight: 19}}>Moto Lineal (B2A)</Text>
              </View>
              <Image source={ICON.PANTALLA_SELECCION_ICONO_UNO} style={{width: 68, height: 40, top: 20, right: 8, position: 'absolute'}}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.boton_seleccion, {backgroundColor: '#ff0000', top: 353}]} onPress={() => navigation.navigate ('CatgoriaDosScreen')}>
              <View style={styles.seleccion_texto}>
                <Text style={{fontFamily: 'Nunito-ExtraBold', fontSize: 20, marginBottom: 6, color: 'white', lineHeight: 22}}>CATEGORÍA 2</Text>
                <Text style={{fontFamily: 'Nunito-Regular', fontSize: 15, color: 'white', lineHeight: 19}}>Mototaxi (B2B)</Text>
              </View>
              <Image source={ICON.PANTALLA_SELECCION_ICONO_DOS} style={{width: 86, height: 52, top: 14, right: 31, position: 'absolute'}}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.boton_seleccion, {backgroundColor: '#ededed', top: 460}]}onPress={() => navigation.navigate ('CatgoriaTresScreen')}>
              <View style={styles.seleccion_texto}>
                <Text style={{fontFamily: 'Nunito-ExtraBold', fontSize: 20, marginBottom: 6, color: '#252525', lineHeight: 22}}>CATEGORÍA 3</Text>
                <Text style={{fontFamily: 'Nunito-Regular', fontSize: 15, color: '#252525', lineHeight: 19}}>Camioneta (A2A)</Text>
              </View>
              <Image source={ICON.PANTALLA_SELECCION_ICONO_TRES} style={{width: 90, height: 36, top: 23, right: 30, position: 'absolute'}}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.boton_seleccion, {backgroundColor: '#ff0000', top: 563}]} onPress={() => navigation.navigate ('CatgoriaCuatroScreen')}>
              <View style={styles.seleccion_texto}>
                <Text style={{fontFamily: 'Nunito-ExtraBold', fontSize: 20, marginBottom: 6, color: 'white', lineHeight: 22}}>CATEGORÍA 4</Text>
                <Text style={{fontFamily: 'Nunito-Regular', fontSize: 15, color: 'white', lineHeight: 19}}>Buses (A3A)</Text>
              </View>
              <Image source={ICON.PANTALLA_SELECCION_ICONO_CUATRO} style={{width: 104, height: 46, top: 18, right: 23, position: 'absolute'}}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.boton_seleccion, {backgroundColor: '#ededed', top: 668}]} onPress={() => navigation.navigate ('CatgoriaCincoScreen')}>
              <View style={styles.seleccion_texto}>
                <Text style={{fontFamily: 'Nunito-ExtraBold', fontSize: 20, marginBottom: 6, color: '#252525', lineHeight: 22}}>CATEGORÍA 5</Text>
                <Text style={{fontFamily: 'Nunito-Regular', fontSize: 15, color: '#252525', lineHeight: 19}}>Camiones (A3B)</Text>
              </View>
              <Image source={ICON.PANTALLA_SELECCION_ICONO_CINCO} style={{width: 108, height: 46, top: 16, right: 20, position: 'absolute'}}/>
            </TouchableOpacity>
            
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fondo: {
    height: 201,
    width: '100%',
    position: 'absolute',
    top: 0,
    paddingTop: 25
  },
  menu: {
    width: 80,
    height: 80,
    marginLeft: 15
  },
  avatar: {
      width: 80,
      height: 80,
      right: 0
  },
  container_texto_resultados: {
    width: '100%'
  },
  texto_fueron: {
      textAlign: 'center',
      fontFamily: 'Nunito-Medium', fontSize: 25, lineHeight: 34, color: 'white'
  },
  texto_resultados: {
    textAlign: 'center',
    fontFamily: 'Nunito-Black', fontSize: 40, lineHeight: 42, color: 'white'
  },
  boton: {
    position: 'absolute',
    width: 270,
    height: 58,
    alignContent: 'center'
  },
  container_titulo:{
    width: 159,
    marginLeft: 6,
    marginRight: 6,
    marginTop: 24
  },
  texto_categoria: {
    fontFamily: 'Nunito-Black', fontSize: 16, color: 'white', lineHeight: 22,
    textAlign: 'center'
  },
  texto_selecciona: {
    fontFamily: 'Nunito-Medium', fontSize: 15, color: 'white', lineHeight: 20,
    textAlign: 'center'
  },
  boton_seleccion: {
    width: 331,
    height: 81,
    left: 15,
    position: 'absolute',
    borderRadius: 20
  }, 
  seleccion_texto: {
    position: 'absolute',
    height: 'auto', 
    top: 18, 
    left: 25
  }
})