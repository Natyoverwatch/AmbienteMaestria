import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {WebView} from 'react-native-webview';

const InicioScreen1Explicacion = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerprogressbar}>
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
      <View style={styles.containerprogressbarinsideempy}>
      </View>
      </View>
      <View style={{marginVertical:"10%", width:"90%", height:"25%",}}>
      <WebView
      source={{html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/lM177S1d7rI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}} />
    </View>
      <Text style={styles.texto}>Existen una serie de reglas «filosóficas» que indican una manera de hacer y de pensar dentro del mundo pitónico creadas por Tim Peters, llamadas el Zen de Python y que se pueden aplicar incluso más allá de la programación</Text>
      <TouchableOpacity  
          style={styles.button}
          onPress={()=> navigation.navigate("Modulo1Leccion1Explicacion2")}>
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

export default InicioScreen1Explicacion