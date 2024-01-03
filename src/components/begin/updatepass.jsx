import {useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';

import {ICON} from '../../assets/constants/images'

export default function ActualizarPassScreen ({navigation}) {

  const [user, setUser] = useState ('')
  const [password, setPassword] = useState ('')
  const [validate_password, setValidatePassword] = useState ('')

    const update_password = () => {
      navigation.navigate ('LoginScreen')
    }

    return (
        <GestureHandlerRootView style={styles.container}>
            <ImageBackground style={styles.fondo} source={ICON.PANTALLA_ACTUALIZAR_CONTRASEÑA_FONDO}/>
            <Image source={ICON.LOGO_WHITE} style={styles.logo}/>

            <View style={styles.container_datos}/>
            
            <Image source={ICON.PANTALLA_REGISTRO_AVATAR_GREY_107} style={[styles.avatar]}/>

              <TextInput
                style={[styles.input, {top: 436}]}
                value={user}
                onChange={(user) => setUser(user)}
                placeholder='Usuario'
                placeholderTextColor='#252525'
                ref={(input) => { text_user = input }}
                onSubmitEditing={() => text_password.focus()}
                returnKeyType='next'
                autoCapitalize='none'/>

              <TextInput
                style={[styles.input, {top: 501}]}
                value={password}
                onChange={(password) => setPassword(password)}
                placeholder='Contraseña '
                placeholderTextColor='#252525'
                ref={(input) => { text_password = input }}
                onSubmitEditing={() => text_validate.focus()}
                returnKeyType='next'
                autoCapitalize='none'/>

              <TextInput
                style={[styles.input, {top: 566}]}
                value={validate_password}
                onChange={(validate_password) => setValidatePassword(validate_password)}
                placeholder='Confirmar contraseña '
                placeholderTextColor='#252525'
                ref={(input) => { text_validate = input }}
                onSubmitEditing={() => update_password()}
                returnKeyType='done'
                autoCapitalize='none'/>
            
            <TouchableOpacity style={[styles.boton, {top: 658}]} onPress={() => update_password()}>
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
    height: 371,
    width: '100%',
    position: 'absolute',
    top: 0
  },
  logo: {
    width: 159,
    height: 52,
    position: 'absolute',
    top: 92,
    alignContent: 'center'
  },
  container_datos: {
    position: 'absolute',
    top: 211,
    backgroundColor: '#f1f1f1',
    width: 314,
    height: 554,
    borderRadius: 40
  },
  avatar: {
    width: 107,
    height: 107,
    position: 'absolute',
    top: 270,
    alignContent: 'center'
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
  texto_olvidaste: {
    position: 'absolute',
    width: 231,
    height: 14,
    alignContent: 'center',
    top: 647
  },
  texto_crea: {
    position: 'absolute',
    width: 234,
    height: 13,
    alignContent: 'center',
    top: 745
  },
})