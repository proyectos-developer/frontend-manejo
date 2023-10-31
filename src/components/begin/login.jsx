import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {ICON} from '../../assets/constants/images'

export default function LoginScreen ({navigation}) {

    return (
        <GestureHandlerRootView style={styles.container}>
            <ImageBackground style={styles.fondo} source={ICON.PANTALLA_INICIO_FONDO}/>
            <Image source={ICON.LOGO_WHITE} style={styles.logo}/>
            
            <TouchableOpacity style={[styles.boton, {top: 550}]} onPress={() => navigation.navigate('RegistroScreen')}>
                <Image source={ICON.PANTALLA_INICIO_BOTON_REGISTRO} style={{width: '100%', flex: 1}}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.boton, {top: 631}]} onPress={() => navigation.navigate('InicioSesionScreen')}>
                <Image source={ICON.PANTALLA_INICIO_BOTON_INICIO} style={{width: '100%', flex: 1}}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.texto]} onPress={() => navigation.navigate('RestablecerPassScreen')}>
                <Image source={ICON.PANTALLA_INICIO_TEXTO} style={{width: '100%', flex: 1}}/>
            </TouchableOpacity>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fondo: {
    flex: 1,
    width: '100%'
  },
  logo: {
    width: 159,
    height: 52,
    position: 'absolute',
    top: 92,
    alignContent: 'center'
  },
  boton: {
    position: 'absolute',
    width: 270,
    height: 58,
    alignContent: 'center'
  },
  boton_uno: {
    top: 550
  },
  boton_dos: {
    top: 631
  },
  texto: {
    position: 'absolute',
    width: 254,
    height: 14,
    alignContent: 'center',
    top: 700
  }
})