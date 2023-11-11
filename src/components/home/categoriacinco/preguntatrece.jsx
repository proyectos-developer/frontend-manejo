import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ICON } from '../../../assets/constants/images'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler'
import BarraSuperior from '../comun/barrasuperior'
import { useState } from 'react'

export default function PreguntaTreceScreen ({navigation}) {

    const [opcion, setOpcion] = useState ('')

    const siguiente_pregunta = () => {
        if (opcion === ''){

        }else{
            navigation.navigate ('PreguntataCatCincoCatorceScreen')
        }
    }

    return (
        <GestureHandlerRootView style={{flex: 1, width: '100%'}}>
            <BarraSuperior navigation={navigation} nro_pregunta={13} categoria={'CATEGORÍA 5 - A3B'}/>
            <View style={styles.container}>
                <Text style={styles.texto_pregunta}>El color del semáforo en rojo tiene el siguiente significado</Text>
                <TouchableOpacity style={styles.opcion_respuesta} onPress={() => setOpcion ('a')}>
                    <Image source={opcion === 'a' ? ICON.RADIO_SELECT : ICON.RADIO_UNSELECT} style={styles.radio_select}/>
                    <Text style={styles.texto_opcion}>Los vehículos que enfrenten esta señal {`\n`}deben detenerse después de la línea de {`\n`}parada y antes del crucero peatonal.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opcion_respuesta} onPress={() => setOpcion ('b')}>
                    <Image source={opcion === 'b' ? ICON.RADIO_SELECT : ICON.RADIO_UNSELECT} style={styles.radio_select}/>
                    <Text style={styles.texto_opcion}>Indica prevención.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opcion_respuesta} onPress={() => setOpcion ('c')}>
                    <Image source={opcion === 'c' ? ICON.RADIO_SELECT : ICON.RADIO_UNSELECT} style={styles.radio_select}/>
                    <Text style={styles.texto_opcion}>Si no hay crucero peatonal, los vehículos {`\n`}deben detenerse antes de llegar a la {`\n`}intersección.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opcion_respuesta} onPress={() => setOpcion ('d')}>
                    <Image source={opcion === 'd' ? ICON.RADIO_SELECT : ICON.RADIO_UNSELECT} style={styles.radio_select}/>
                    <Text style={styles.texto_opcion}>Los vehículos pueden detenerse encima {`\n`}del crucero peatonal.</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.boton_siguiente} onPress={() => siguiente_pregunta()}>
                    <Text style={styles.texto_siguiente}>Siguiente</Text>
                </TouchableOpacity>
            </View>
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
    opcion_respuesta: {
        width: 330,
        height: 81,
        marginBottom: 19,
        backgroundColor: 'white',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        paddingRight: 18,
        paddingLeft: 18
    },
    radio_select: {
        width: 25,
        height: 25,
        marginRight: 16
    },
    texto_opcion: {
        fontFamily: 'Nunito-Regular', fontSize: 14, lineHeight: 18, color: '#252525'
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