import { View, Text,StyleSheet, Dimensions, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


const modulos = [
  {
	id: 1,
	name: "Modulo 1",
  colorbordebox1:"#CBD1D1",
  colorbordebox2:"transparent",
  marginBottom:175,
  sentido: "left",
  marginLeft:"-70%",
  modulotitulo:"Primeros Pasos",
  ruta:"Modulo1",
  imagenmodulo:require("../../../imagenes/imagenM1.png"),
  imagenflecha:require("../../../imagenes/flecha.png"),
  imagennumero: require("../../../imagenes/numeroM1.png"),
  },
  {
	id: 2,
	name: "Modulo 2",
  colorbordebox1:"#CBD1D1",
  colorbordebox2:"transparent",
  marginBottom:175,
  sentido: "right",
  marginLeft:"70%",
  modulotitulo:"Datos",
  ruta:"Modulo2",
  imagenmodulo:require("../../../imagenes/imagenM2.png"),
  imagenflecha:require("../../../imagenes/flecha2.png"),
  imagennumero: require("../../../imagenes/numeroM2.png"),
  },
  {
	id: 3,
	name: "Modulo 3",
  sentido: "left",
  colorbordebox1:"#CBD1D1",
  colorbordebox2:"transparent",
  marginBottom:175,
  marginLeft:"-70%",
  modulotitulo:"Operadores básicos",
  ruta:"Modulo3",
  imagenmodulo:require("../../../imagenes/imagenM3.png"),
  imagenflecha:require("../../../imagenes/flecha.png"),
  imagennumero: require("../../../imagenes/numeroM3.png"),
  },
  {
    id: 4,
    name: "Modulo 4",
    colorbordebox1:"#CBD1D1",
    colorbordebox2:"transparent",
    marginBottom:0,
    sentido: "right",
    marginLeft:"70%",
    modulotitulo:"Estructuras de datos",
    ruta:"Modulo4",
    imagenmodulo:require("../../../imagenes/imagenM4.png"),
    imagenflecha:require("../../../imagenes/fondonada.png"),
    imagennumero: require("../../../imagenes/numeroM4.png"),
    },
];

function Modulosorden() {
  const navigation=useNavigation();
  return(
    <View style={styles.containerPapa}>
      {modulos.map((modulo) => {
        if(modulo.sentido=="left"){
          return (
            <View style={[styles.contenedorgeneral,{marginBottom: modulo.marginBottom,}]}>
              <View style={[styles.leccontainer,]}>
                <TouchableOpacity 
                  key={modulo.id} 
                  style={[styles.box1, { borderColor: modulo.colorbordebox1, }]}
                  onPress={()=> navigation.navigate(modulo.ruta)}>
                  <View style={[styles.box1imagen, {  }]}>
                    <Image
                      source={modulo.imagenmodulo}
                      style={{width: '100%', height: '100%', borderRadius:10,}}
                    />
                  </View>
                  <Text style={styles.texto}>{modulo.modulotitulo}</Text>
                </TouchableOpacity>
                <View style={[styles.box2, { justifyContent:'flex-end', borderColor: modulo.colorbordebox2, marginRight:'10%',}]}>
                  <Image
                    source={modulo.imagenflecha}
                    style={{width: '70%', height: '95%', }}
                  />
                </View>
              </View>
              <TouchableOpacity 
              style={[styles.boxnumerotouch, { marginLeft: modulo.marginLeft, }]}
              onPress={()=> navigation.navigate(modulo.ruta)}>
                <Image
                  source={modulo.imagennumero}
                  style={{width: '100%', height: '100%',}}
                />
              </TouchableOpacity>
            </View>
          );
        }else if(modulo.sentido=="right"){
          return (
            <View style={[styles.contenedorgeneral, {marginBottom: modulo.marginBottom,}]}>
              <View style={[styles.leccontainer,]}>
                <View style={[styles.box2, { justifyContent:'flex-end', alignItems:'flex-end', borderColor: modulo.colorbordebox2, marginLeft:'10%'}]}>
                  <Image
                    source={modulo.imagenflecha}
                    style={{width: '70%', height: '95%'}}
                  />
                </View>
                <TouchableOpacity 
                  key={modulo.id} 
                  style={[styles.box1, { borderColor: modulo.colorbordebox1}]}
                  onPress={()=> navigation.navigate(modulo.ruta)}>
                  <View style={[styles.box1imagen, {  }]}>
                    <Image
                      source={modulo.imagenmodulo}
                      style={{width: '100%', height: '100%', borderRadius:10,}}
                    />
                  </View>
                  <Text style={styles.texto}>{modulo.modulotitulo}</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity  
                style={[styles.boxnumerotouch, { marginLeft: modulo.marginLeft, }]}
                onPress={()=> navigation.navigate(modulo.ruta)}>
                <Image
                  source={modulo.imagennumero}
                  style={{width: '100%', height: '100%',}}
                />
              </TouchableOpacity>
            </View>
          );
        }
        
      })}
    </View>
  );}

const InicioScreen0Modulos = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.containerPapa}>
      <ImageBackground
        source={require('../../../imagenes/header.png')}
        style={{width: '100%', height: '45%', marginBottom:'-50%'}}
      >
        <Text style={{fontWeight: 'bold',
                      color:'#ffffff',
                      fontSize:28,
                      marginLeft:'10%',
                      marginTop:'15%'}}>Sesiones</Text>
      </ImageBackground>
      <ScrollView style={{padding:0}}>
      <Modulosorden/>
      </ScrollView>
      
</View>
  )
}
/*

*/
const styles = StyleSheet.create({
  containerPapa: {
    
    //paddingTop:'8%',
      //paddingTop:15,
      height:'100%',
      width:'100%',
      backgroundColor:'#ffffff',
      alignItems:'center',
    },
  texto:{
    textAlign:"center",
    fontSize:15,
    color:'#21828F',
    fontWeight:"700",
  },
  button: {
      marginTop:'10%',
      borderRadius: 20,
      borderWidth: 6,
      borderColor: "#315259",
      width: '70%',
      height: '40%',
      backgroundColor:'#FFFFFF',
      alignItems:'center',
      textAlignVertical:'center',
      justifyContent: 'center',
  },
  leccontainer: {
    width:350,
    height:150,
    marginTop:35,
    borderRadius:40,
    alignItems:"center",
    justifyContent: 'center',
    flexDirection: "row",
  },  
  //Cuadrar boxes
  box1: {
    backgroundColor:'#CBD1D1',
    width: '45%',
    height: '90%',
    marginHorizontal:'1.5%',
    borderRadius:10,
    borderWidth:2, 
    alignItems:'center',
    justifyContent: 'center',
  },
  box1imagen: {
    marginTop:'10%',
    borderColor:"#21828F",
    width: '70%',
    height: '70%',
    borderRadius:10,
    borderWidth:2, 
  },
  box2: {
    marginTop:'25%',
    width: '40%',
    height: '80%',
    borderRadius:10,
    marginHorizontal:'1.5%',
    borderWidth:2, 
  },
  contenedorgeneral: {
    height:'1%',
    width:'110%',
    alignItems:'center',
    
  },
  boxnumerotouch: {
    width: '23%',
    height: '1100%',
    marginTop:'-48%', 
    borderColor:'transparent',
    marginBottom:'20%',
    marginHorizontal:'1.5%',
    borderRadius:100,
    borderWidth:2, 
    alignItems:'center',
    justifyContent: 'center',
  },
  containerprogressbar: {
    backgroundColor: '#1F646D',
    width:310,
    height:26,
    marginTop:"40%",
    borderRadius:10,
  },
  progress: {
    margin: 10,
    backgroundColor:"white",
    borderColor:"#fff",
  },
})

export default InicioScreen0Modulos