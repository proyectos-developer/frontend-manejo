import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {ICON} from '../../assets/constants/images'

export default function LoginScreen ({navigation}) {

    return (
        <GestureHandlerRootView style={styles.container}>
            <ImageBackground style={styles.fondo} source={ICON.PANTALLA_INICIO_FONDO}>
              <Image source={ICON.LOGO_WHITE_235} style={styles.logo}/>
            
              <TouchableOpacity style={[styles.boton_grey, {top: 550}]} onPress={() => navigation.navigate('RegistroScreen')}>
                  <Text style={[styles.text_boton, {color: '#212121'}]}>Regístrate</Text>
              </TouchableOpacity>
            
              <TouchableOpacity style={[styles.boton_red, {top: 631}]} onPress={() => navigation.navigate('InicioSesionScreen')}>
                  <Text style={[styles.text_boton, {color: '#ffffff'}]}>Iniciar sesión</Text>
              </TouchableOpacity>
            
              <View style={styles.view_restablecer}>
                <Text style={[styles.texto_restablecer, {color: '#ffffff', fontFamily: 'Nunito-Regular', marginRight: 5}]}>¿Has olvidado tu contraeña?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('RestablecerPassScreen')}>
                    <Text style={[styles.texto_restablecer, {color: '#ff0000', fontFamily: 'Nunito-Bold'}]}>Click aquí</Text>
                </TouchableOpacity>
              </View>

            </ImageBackground>
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
    width: 235,
    height: 217,
    alignSelf: 'center'
  },
  boton_grey: {
    position: 'absolute',
    backgroundColor: '#bdbdbd',
    width: 270,
    height: 58,
    alignSelf: 'center',
    borderRadius: 40
  },
  boton_red: {
    position: 'absolute',
    backgroundColor: '#ff0000',
    width: 270,
    height: 58,
    alignSelf: 'center',
    borderRadius: 40
  },
  text_boton: {
    fontSize: 25,
    lineHeight: 58,
    fontFamily: 'Nunito-Bold',
    textAlign: 'center'
  },
  view_restablecer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 700,
    alignSelf: 'center'
  },
  texto_restablecer: {
    fontSize: 14,
    lineHeight: 19
  },
})