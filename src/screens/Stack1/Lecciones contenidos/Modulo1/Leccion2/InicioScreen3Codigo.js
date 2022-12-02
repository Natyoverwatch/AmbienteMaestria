import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

const InicioScreen3Codigo = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerprogressbar}>
      <View style={styles.containerprogressbarinsidefull}>
      </View>
      <View style={styles.containerprogressbarinsidefull}>
      </View>
      <View style={styles.containerprogressbarinsidefull}>
      </View>
      <View style={styles.containerprogressbarinsidefull}>
      </View>
      <View style={styles.containerprogressbarinsidefull}>
      </View>
      <View style={styles.containerprogressbarinsideempy}>
      </View>
      </View>
      <View style={styles.contenedorimagen}>
      <TouchableOpacity  
          style={styles.buttonessuprior1}
          onPress={()=> navigation.navigate("Modulo1Leccion2Ejercicio")}>
          <Text style={styles.textbotones1}>Ejercicio</Text>
      </TouchableOpacity>
      <TouchableOpacity  
          style={styles.buttonessuprior2}
          onPress={()=> navigation.navigate("Modulo1Leccion2Codigo")}>
          <Text style={styles.textbotones2}>Código</Text>
      </TouchableOpacity>
      </View>
      <View style={{flex: 1,marginTop:"0%",width:"95%",borderRadius:10,}}>
      <WebView
      source={{uri: 'https://colab.research.google.com/gist/StormShadow010/3335b494b118f7d1cf48aa31c349372f/untitled1.ipynb'}} />
    </View>
      <TouchableOpacity  
          style={styles.button}
          onPress={()=> navigation.navigate("Modulo1Leccion2Siguiente")}>
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
    paddingHorizontal:'8%',
    marginTop:'20%',
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
  textbotones1: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '700'
  },
  textbotones2: {
    fontSize: 20,
    color: '#292C31',
    fontWeight: '700'
  },
  text2: {
    fontSize: 25,
    color: '#FFFFFF',
    fontWeight: '700'
  },
  buttonessuprior1:{
    width:150,
    height:50,
    borderRadius:10,
    backgroundColor:"#292C31",
    alignItems:'center',
    justifyContent: 'center',
    //marginTop:"5%",
    //marginBottom:'5%',
    margin:'5%',
  },
  buttonessuprior2:{
    width:150,
    height:50,
    borderRadius:10,
    backgroundColor:"#FFFFFF",
    alignItems:'center',
    justifyContent: 'center',
    //marginTop:"5%",
    //marginBottom:'5%',
    margin:'5%',
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
  contenedorimagen:{
    //marginTop:'5%',
    flexDirection: "row",
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    height:'15%',
  },
});

export default InicioScreen3Codigo