import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const L2InicioScreen2Explicacion = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.containerprogressbar}>
      <View style={styles.containerprogressbarinsidefull}>
      </View>
      <View style={styles.containerprogressbarinsidefull}>
      </View>
      <View style={styles.containerprogressbarinsideempy}>
      </View>
      <View style={styles.containerprogressbarinsideempy}>
      </View>
      <View style={styles.containerprogressbarinsideempy}>
      </View>
      <View style={styles.containerprogressbarinsideempy}>
      </View>
      </View>
      <Text style={styles.texto}>
        Una de las acciones básicas e imprescindibles que tiene que realizar un programa es la de mostrar información por pantalla ya sea texto, números, resultados, entre otros más. Para mostrar texto en Python utiliza la función print{"("}'texto'{")"}
        </Text>
        <Image 
          source={require('../../../../../../imagenes/printcode.png')}
          style={{width: '50%', height: '10%', borderRadius:10, marginTop:'5%', }}
        />
        <Text style={styles.texto}>
        En donde texto es igual a lo que se quiera mostrar. Por tanto, si queremos escribir "Hola mundo" debemos hacerlo como se evidencia en la anterior imagen, a continuacion el resultado en la terminal:
        </Text>
        
        <Image 
          source={require('../../../../../../imagenes/printterminal.png')}
          style={{width: '60%', height: '10%', borderRadius:10, marginVertical:'5%',}}
        />
        
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
    flexDirection: "row",
    backgroundColor: '#8CB0B9',
    width:'87%',
    height:'7%',
    marginTop:"40%",
    paddingHorizontal:'10%',
    borderRadius:40,
    alignItems:'center',
    justifyContent:'space-between',
  },
  containerprogressbarinsideempy: {
    backgroundColor: '#ffffff',
    width:'10%',
    height:'50%',
    //marginTop:"40%",
    borderRadius:100,
    borderColor:'#888B8C',
  },
  containerprogressbarinsidefull: {
    backgroundColor: '#1F646D',
    width:'10%',
    height:'50%',
    //marginTop:"40%",
    borderRadius:100,
  },
  texto: {
    marginTop:'5%',
    paddingHorizontal:'5%',
    textAlign:'center',
    fontSize:18, 
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
    //marginTop:"5%",
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