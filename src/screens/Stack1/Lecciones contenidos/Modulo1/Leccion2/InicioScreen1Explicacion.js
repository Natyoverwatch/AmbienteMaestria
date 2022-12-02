import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {WebView} from 'react-native-webview';

const L2InicioScreen1Explicacion = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.containerprogressbar}>
      </View>
        <Image 
          source={require('../../../../../../imagenes/Leccion1.1.jpg')}
          style={{width: '80%', height: '30%', borderRadius:8, marginVertical:'5%'}}
        />
      <Text style={styles.texto}>En cualquier introducción a un nuevo lenguaje de programación, no puede faltar el famoso Hola Mundo. Se trata del primer programa por el que se empieza, que consiste en programar una aplicación que muestra por pantalla ese texto. para esto se usa Print{"()"}</Text>
      <TouchableOpacity  
          style={styles.button}
          onPress={()=> navigation.navigate("Modulo1Leccion2Explicacion2")}>
          <Text style={styles.text2}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    paddingTop:'8%',
    backgroundColor:'#E2E2E2',
  },
  image: {
    flex: 1,
  },
  containerprogressbar: {
    backgroundColor: '#8CB0B9',
    width:'90%',
    height:'7%',
    marginTop:"40%",
    borderRadius:40,
  },
  texto: {
    paddingHorizontal:'5%',
    textAlign:"center",
    fontSize:20, 
    fontWeight:'400', 
    color:'#085454',
  },
  text2: {
    fontSize: 25,
    color: '#FFFFFF',
    fontWeight: '700'
  },
  button:{
    width:'50%',
    height:'7%',
    borderRadius:10,
    backgroundColor:"#FFAD2B",
    alignItems:'center',
    justifyContent: 'center',
    marginTop:"5%",
  },
});

export default L2InicioScreen1Explicacion