import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const L2InicioScreen2Explicacion = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.containerprogressbar}>
      </View>
      <Text style={styles.texto}>
        Una de las acciones básicas e imprescindibles que tiene que realizar un programa es la de mostrar información por pantalla ya sea texto, números, resultados, entre otros más. Para mostrar texto en Python utiliza la función print{"()"}, cuya sintaxis es:
        {'\n'}{'\n'}
        {">>>"}print{"("}'texto'{")"}
        {'\n'}{'\n'}
        En donde texto es igual a lo que se quiera mostrar. Por tanto, si queremos escribir "Hola mundo" debemos hacerlo de la siguiente manera:
        </Text>
        <View style={styles.contenedorimagen}>
        <Image 
          source={require('../../../../../../imagenes/printcode.png')}
          style={{width: '47%', height: '80%', borderRadius:10, marginVertical:'5%', marginHorizontal:'1.5%'}}
        />
        <Image 
          source={require('../../../../../../imagenes/printterminal.png')}
          style={{width: '47%', height: '50%', borderRadius:10, marginVertical:'5%',}}
        />
        </View>
        
      <TouchableOpacity  
          style={styles.button}
          onPress={()=> navigation.navigate("Modulo1Leccion2Explicacion3")}>
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
    marginTop:'5%',
    paddingHorizontal:'8%',
    textAlign:'center',
    fontSize:17, 
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
  contenedorimagen:{
    marginTop:'5%',
    flexDirection: "row",
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    height:'15%'
  },
});

export default L2InicioScreen2Explicacion