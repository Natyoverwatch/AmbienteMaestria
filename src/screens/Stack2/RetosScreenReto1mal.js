import { View, Text, StyleSheet,Image,ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const RetosScreenReto1mal = ({navigation}) => {
  return (
    <View style={styles.containerPapa}>
      <ImageBackground
      source={require('../../../imagenes/header.png')}
      style={{width: '100%', height: '45%', marginBottom:'-50%'}}
    ></ImageBackground>
    <View style={styles.container}>
    
    <Text style={{fontWeight:"bold",fontSize:28,marginVertical:"5%", color:'#0EA088'}}>
      Suerte para la próxima
    </Text>
    <Image
        source={require('../../../imagenes/incorrecto.gif')}  
        style={{width: "80%", height: "50%", position:'absolute', marginTop:'30%'}}
    />
    </View>
    <TouchableOpacity  
          style={styles.button}
          onPress={()=> navigation.navigate("Reto1")}>
          <Text style={styles.text2}>Volver a Intentarlo</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  containerPapa: {
  
    //paddingTop:'8%',
      //paddingTop:15,
      height:'100%',
      width:'100%',
      backgroundColor:'#ffffff',
      alignItems:'center',
    },
  container: {
    flex: 1,
    alignItems:"center",
    paddingTop:'0%',
    backgroundColor:'#FFFFFF',
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
    width:'80%',
    height:'7%',
    borderRadius:10,
    backgroundColor:"#FFAD2B",
    alignItems:'center',
    justifyContent: 'center',
    marginBottom:"25%",
  },
});

export default RetosScreenReto1mal