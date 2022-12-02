import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const RetosScreen1Reto1 = ({navigation}) => {

  return (
    
    <View style={styles.container}>
      <Text style={styles.textotitulo}>
        ¿Lo lograrás?
      </Text>
      <Text style={styles.texto}>
      Observa con cuidado el siguiente código y selecciona la respuesta correcta de lo que saldrá en pantalla
      </Text>
      <View style={{alignItems:'center'}}>
      <Image 
          source={require('../../../imagenes/Retoprint.png')}
          style={{width: 310, height: 80, borderRadius:10, marginVertical:'5%', marginHorizontal:'1.5%'}}
        />
      <TouchableOpacity  
          style={[styles.button,{ height:'18%',}]}
          onPress={()=> navigation.navigate('Reto1mal')}>
          <Text style={styles.text2}>Cualquier tecnología suficientemente avanzada es equivalente a la magia.</Text>
      </TouchableOpacity>
      <TouchableOpacity  
          style={[styles.button,{ height:'10%',}]}
          onPress={()=> navigation.navigate("Reto1mal")}>
          <Text style={styles.text2}>SyntaxError: invalid syntax.</Text>
      </TouchableOpacity>
      <TouchableOpacity  
          style={[styles.button,{ height:'10%',}]}
          onPress={()=> navigation.navigate('Reto1bien')}>
          <Text style={styles.text2}>No se muestra nada en pantalla.</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    paddingTop:'40%',
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
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '400'
  },
  button:{
    width:'90%',
    borderRadius:10,
    backgroundColor:"#82DAF0",
    alignItems:'center',
    justifyContent: 'center',
    marginVertical:"5%",
    paddingHorizontal:'5%',
  },
});

export default RetosScreen1Reto1