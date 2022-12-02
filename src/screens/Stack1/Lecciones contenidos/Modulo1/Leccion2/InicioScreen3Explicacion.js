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
      <View style={styles.containerprogressbarinsidefull}>
      </View>
      <View style={styles.containerprogressbarinsideempy}>
      </View>
      <View style={styles.containerprogressbarinsideempy}>
      </View>
      <View style={styles.containerprogressbarinsideempy}>
      </View>
      </View>
      <ScrollView style={{padding:0,}}>
      <Text style={styles.textotitulo}>
        CARACTERÍSTICAS: 
      </Text>
      <Text style={styles.texto}>
      1. La función print() admite varios argumentos seguidos. En el programa, los argumentos deben separarse por comas. Así estos se muestran en el mismo orden y en la misma línea, separados por espacios</Text>
      <View style={{alignItems:'center'}}>
      <Image 
          source={require('../../../../../../imagenes/print1.png')}
          style={{width: 300, height: 100, borderRadius:10, marginVertical:'5%', marginHorizontal:'1.5%'}}
        />
        </View>
        <Text style={styles.texto}>
          2. Al final de cada print(), Python añade automáticamente un salto de línea
      </Text>
      <View style={{alignItems:'center'}}>
      <Image 
          source={require('../../../../../../imagenes/print2.png')}
          style={{width: 300, height: 150, borderRadius:10, marginVertical:'5%', marginHorizontal:'1.5%',}}
        />
        </View>
        <Text style={styles.texto}>
          3. Para incluir comillas dentro del texto que se quiere mostrar, se puede escribir una contrabarra {"(\)"} antes de la comilla para que Python reconozca la comilla como carácter, no como delimitador de la cadena:
      </Text>
      <View style={{alignItems:'center'}}>
      <Image 
          source={require('../../../../../../imagenes/print3.png')}
          style={{width: 300, height: 100, borderRadius:10, marginVertical:'5%', marginHorizontal:'1.5%',}}
        />
        </View>
        <View style={{alignItems:'center'}}>
      <TouchableOpacity  
          style={styles.button}
          onPress={()=> navigation.navigate("Modulo1Leccion2Ejercicio")}>
          <Text style={styles.text2}>Siguiente</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
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
    paddingHorizontal:'5%',
    marginTop:'5%',
    textAlign:"center",
    fontSize:20, 
    fontWeight:'400', 
    color:'#085454',
  },
  textotitulo: {
    paddingHorizontal:'5%',
    marginTop:'5%',
    textAlign:"center",
    fontSize:25, 
    fontWeight:'700', 
    color:'#085454',
  },
  text2: {
    fontSize: 25,
    color: '#FFFFFF',
    fontWeight: '700'
  },
  button:{
    width:150,
    height:50,
    borderRadius:10,
    backgroundColor:"#FFAD2B",
    alignItems:'center',
    justifyContent: 'center',
    marginTop:"5%",
    marginBottom:'5%',
  },
});

export default L2InicioScreen2Explicacion