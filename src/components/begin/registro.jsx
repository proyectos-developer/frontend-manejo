import {useEffect, useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { GestureHandlerRootView, TextInput, ScrollView } from 'react-native-gesture-handler';

import {ICON} from '../../assets/constants/images'
import { useDispatch, useSelector } from 'react-redux';
import {begindata} from '../../redux/slice/begindata';
import {beginConstants} from '../../redux/uri/begin-constants'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegistroScreen ({navigation}) {

    const dispatch = useDispatch()

    const [nombres_apellidos, setNombresApellidos] = useState ('')
    const [correo, setCorreo] = useState ('')
    const [password, setPassword] = useState ('')
    const [confirmar_password, setConfirmarPassword] = useState ('')

    const {register_user} = useSelector(({begin}) => begin)
    const begin = useSelector(({begin}) => begin)
    
    useEffect (() => {
      if (register_user && register_user.access_token){
        save_token (register_user.access_token)
      }
    }, [register_user])

    const save_token = async (token) => {
      try {
        await AsyncStorage.setItem ('token', token)
        navigation.navigate ('HomeStack')
      } catch (error) {
        
      }
    }

    const registrar_usuario = () => {
      if (nombres_apellidos === '' || correo === '' || password === '' || confirmar_password === '' || (password !== confirmar_password)){

      } else{
        const data_user = {
          name: nombres_apellidos,
          email: correo,
          password: password
        }
        dispatch (begindata(beginConstants(data_user, false, 0, 0).register_user))
      }
    }

    return (
          <GestureHandlerRootView style={styles.container}>
              <ImageBackground style={styles.fondo} source={ICON.FONDO_TOP}>
                <Image source={ICON.LOGO_WHITE_191} style={styles.logo}/>
              </ImageBackground>

              <View style={[styles.container_datos]}>
                <Image source={ICON.AVATAR_GREY_199} style={[styles.avatar]}/>

                    <TextInput
                      keyboardType='default'
                      style={[styles.input]}
                      value={nombres_apellidos}
                      onChangeText={(nombres_apellidos) => setNombresApellidos(nombres_apellidos)}
                      placeholder='Nombres y Apellidos'
                      placeholderTextColor='#252525'
                      onSubmitEditing={() => text_correo.focus()}
                      returnKeyType='next'/>

                    <TextInput
                      keyboardType='email-address'
                      style={[styles.input]}
                      value={correo}
                      onChangeText={(correo) => setCorreo(correo)}
                      placeholder='Correo electrónico'
                      placeholderTextColor='#252525'
                      ref={(input) => { text_correo = input }}
                      onSubmitEditing={() => text_contraseña.focus()}
                      returnKeyType='next'
                      autoCapitalize='none'/>

                    <TextInput
                      keyboardType='default'
                      style={[styles.input]}
                      value={password}
                      onChangeText={(password) => setPassword(password)}
                      placeholder='Contraseña '
                      placeholderTextColor='#252525'
                      ref={(input) => { text_contraseña = input }}
                      onSubmitEditing={() => text_confirmar.focus()}
                      returnKeyType='next'
                      secureTextEntry={true}
                      autoCapitalize='none'/>

                    <TextInput
                      keyboardType='default'
                      style={[styles.input]}
                      value={confirmar_password}
                      onChangeText={(confirmar_password) => setConfirmarPassword(confirmar_password)}
                      placeholder='Confirmar contraseña '
                      placeholderTextColor='#252525'
                      ref={(input) => { text_confirmar = input }}
                      onSubmitEditing={() => registrar_usuario()}
                      returnKeyType='done'
                      secureTextEntry={true}
                      autoCapitalize='none'/>

                    <TouchableOpacity style={[styles.boton]} onPress={() => registrar_usuario()}>
                      <Text style={styles.texto_registro}>Registrame</Text>
                    </TouchableOpacity>
                    
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
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  fondo: {
    height: 371,
    width: '100%',
    left: 0, 
    top: 0
  },
  logo: {
    width: 191,
    height: 191,
    alignSelf: 'center'
  },
  container_datos: {
    position: 'absolute',
    top: 211,
    backgroundColor: '#f1f1f1',
    width: 314,
    height: 554,
    borderRadius: 40,
    left: 23
  },
  avatar: {
    width: 191,
    height: 191,
    alignSelf: 'center'
  },
  input: {
    width: 284,
    height: 43, 
    alignSelf: 'center',
    borderColor: '#252525',
    borderWidth: 1,
    borderRadius: 40,
    paddingLeft: 26,
    color: '#252525',
    marginBottom: 21.5,
    fontFamily: 'Nunito-Regular'
  },
  boton: {
    width: 270,
    height: 58,
    alignSelf: 'center',
    backgroundColor: '#ff0000',
    borderRadius: 40
  },
  texto_registro: {
    textAlign: 'center',
    fontSize: 25,
    lineHeight: 58,
    fontFamily: 'Nunito-Bold',
    color: 'white'
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