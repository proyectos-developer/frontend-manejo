import {useEffect, useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {ICON} from '../../assets/constants/images'
import Menu from './menu/menu';

export default function SeleccionScreen ({navigation}) {

    const [menu_view, setMenuView] = useState(false)

    return (
        <GestureHandlerRootView style={styles.container}>
            <ImageBackground style={styles.fondo} source={ICON.PANTALLA_SELECCION_FONDO}>
            
                <TouchableOpacity style={[styles.menu]} onPress={() => setMenuView(true)}>
                    <Image source={ICON.PANTALLA_SELECCION_MENU}/>
                </TouchableOpacity>
                
                <TouchableOpacity style={[styles.avatar]}>
                    <Image source={ICON.PANTALLA_SELECCION_AVATAR}/>
                </TouchableOpacity>
                
                <Text style={styles.texto_selecciona}>Selecciona tu</Text>
                <Text style={styles.texto_categoria}>CATEGORÍA</Text>

                {
                  false ? (
                    <Menu navigation={navigation}/>
                  ) : null
                }
            </ImageBackground>
            
            <TouchableOpacity style={[styles.boton_seleccion, {backgroundColor: '#ededed', top: 246}]} onPress={() => navigation.navigate ('CategoriaUnoStack')}>
              <View style={styles.seleccion_texto}>
                <Text style={{fontFamily: 'Nunito-ExtraBold', fontSize: 20, marginBottom: 6, color: '#252525', lineHeight: 22}}>CATEGORÍA 1</Text>
                <Text style={{fontFamily: 'Nunito-Regular', fontSize: 15, color: '#252525', lineHeight: 19}}>Moto Lineal (B2A)</Text>
              </View>
              <Image source={ICON.PANTALLA_SELECCION_ICONO_UNO} style={{width: 68, height: 40, top: 20, right: 8, position: 'absolute'}}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.boton_seleccion, {backgroundColor: '#ff0000', top: 353}]} onPress={() => navigation.navigate ('CategoriaDosStack')}>
              <View style={styles.seleccion_texto}>
                <Text style={{fontFamily: 'Nunito-ExtraBold', fontSize: 20, marginBottom: 6, color: 'white', lineHeight: 22}}>CATEGORÍA 2</Text>
                <Text style={{fontFamily: 'Nunito-Regular', fontSize: 15, color: 'white', lineHeight: 19}}>Mototaxi (B2B)</Text>
              </View>
              <Image source={ICON.PANTALLA_SELECCION_ICONO_DOS} style={{width: 86, height: 52, top: 14, right: 31, position: 'absolute'}}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.boton_seleccion, {backgroundColor: '#ededed', top: 460}]}onPress={() => navigation.navigate ('CategoriaTresStack')}>
              <View style={styles.seleccion_texto}>
                <Text style={{fontFamily: 'Nunito-ExtraBold', fontSize: 20, marginBottom: 6, color: '#252525', lineHeight: 22}}>CATEGORÍA 3</Text>
                <Text style={{fontFamily: 'Nunito-Regular', fontSize: 15, color: '#252525', lineHeight: 19}}>Camioneta (A2A)</Text>
              </View>
              <Image source={ICON.PANTALLA_SELECCION_ICONO_TRES} style={{width: 90, height: 36, top: 23, right: 30, position: 'absolute'}}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.boton_seleccion, {backgroundColor: '#ff0000', top: 563}]} onPress={() => navigation.navigate ('CategoriaCuatroStack')}>
              <View style={styles.seleccion_texto}>
                <Text style={{fontFamily: 'Nunito-ExtraBold', fontSize: 20, marginBottom: 6, color: 'white', lineHeight: 22}}>CATEGORÍA 4</Text>
                <Text style={{fontFamily: 'Nunito-Regular', fontSize: 15, color: 'white', lineHeight: 19}}>Buses (A3A)</Text>
              </View>
              <Image source={ICON.PANTALLA_SELECCION_ICONO_CUATRO} style={{width: 104, height: 46, top: 18, right: 23, position: 'absolute'}}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.boton_seleccion, {backgroundColor: '#ededed', top: 668}]} onPress={() => navigation.navigate ('CategoriaCincoStack')}>
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
    top: 0
  },
  menu: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: 25,
    left: 15
  },
  avatar: {
      width: 80,
      height: 80,
      position: 'absolute',
      top: 25,
      right: 0
  },
  input: {
    position: 'absolute',
    width: 284,
    height: 43, 
    alignContent: 'center',
    borderColor: '#252525',
    borderWidth: 1,
    borderRadius: 40,
    paddingLeft: 26,
    color: '#252525'
  },
  boton: {
    position: 'absolute',
    width: 270,
    height: 58,
    alignContent: 'center'
  },
  texto_categoria: {
    position: 'absolute',
    left: 31,
    top: 116,
    fontFamily: 'Nunito-Black', fontSize: 40, color: 'white', lineHeight: 55
  },
  texto_selecciona: {
    position: 'absolute',
    left: 31,
    top: 92,
    fontFamily: 'Nunito-Medium', fontSize: 25, color: 'white', lineHeight: 34
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