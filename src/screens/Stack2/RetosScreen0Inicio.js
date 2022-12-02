import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ImageBackground, ScrollView  } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const retos = [
  {
	id: 1,
	name: "Reto 1",
  marginBottom:'55%',
  sentido: "left",
  modulotituloP1:"Función",
  modulotituloP2:"Prit",
  ruta:"Reto1",
  color:'#EF6718',
  widthimage: '100%', 
  heightimage: '95%',
  imagenreto:require("../../../imagenes/imagenR1.png"),
  },
  {
	id: 2,
	name: "Reto 2",
  marginBottom:'55%',
  sentido: "right",
  modulotituloP1:"Variables",
  modulotituloP2:"",
  ruta:"Reto1",
  color:'#21828F',
  widthimage: '100%', 
  heightimage: '94%',
  imagenreto:require("../../../imagenes/imagenR2.png"),
  },
  {
	id: 3,
	name: "Reto 3",
  marginBottom:'55%',
  sentido: "left",
  modulotituloP1:"Tipos de",
  modulotituloP2:"Datos",
  ruta:"Reto1",
  color:'#FC2084',
  widthimage: '100%', 
  heightimage: '92%',
  imagenreto:require("../../../imagenes/imagenR3.png"),
  },
  {
  id: 4,
  name: "Reto 4",
  marginBottom:'55%',
  sentido: "right",
  modulotituloP1:"Operadores",
  modulotituloP2:"Aritmeticos",
  ruta:"Reto1",
  color:'#EF6718',
  widthimage: '100%', 
  heightimage: '92%',
  imagenreto:require("../../../imagenes/imagenR4.png"),
  },
  {
  id: 5,
  name: "Reto 5",
  marginBottom:'55%',
  sentido: "left",
  modulotituloP1:"Operadores",
  modulotituloP2:"Relacionales",
  ruta:"Reto1",
  color:'#21828F',
  widthimage: '100%', 
  heightimage: '95%',
  imagenreto:require("../../../imagenes/imagenR5.png"),
  },
  {
  id: 6,
  name: "Reto 6",
  marginBottom:'55%',
  sentido: "right",
  modulotituloP1:"Operadores",
  modulotituloP2:"Lógicos",
  ruta:"Reto1",
  color:'#FC2084',
  widthimage: '100%', 
  heightimage: '91%',
  imagenreto:require("../../../imagenes/imagenR6.png"),
  },
  {
  id: 7,
  name: "Reto 7",
  marginBottom:'55%',
  sentido: "left",
  modulotituloP1:"Listas",
  modulotituloP2:"",
  ruta:"Reto1",
  color:'#EF6718',
  widthimage: '100%', 
  heightimage: '95%',
  imagenreto:require("../../../imagenes/imagenR7.png"),
  },
  {
  id: 8,
  name: "Reto 8",
  marginBottom:'55%',
  sentido: "right",
  modulotituloP1:"Diccionario",
  modulotituloP2:"",
  ruta:"Reto1",
  color:'#21828F',
  widthimage: '100%', 
  heightimage: '94%',
  imagenreto:require("../../../imagenes/imagenR8.png"),
  },
  {
  id: 9,
  name: "Reto 9",
  marginBottom:'55%',
  sentido: "left",
  modulotituloP1:"Tuplas",
  modulotituloP2:"",
  ruta:"Reto1",
  color:'#FC2084',
  widthimage: '100%', 
  heightimage: '92%',
  imagenreto:require("../../../imagenes/imagenR9.png"),
  },
  {
  id: 10,
  name: "Reto 10",
  marginBottom:'-600%',
  sentido: "right",
  modulotituloP1:"Reto",
  modulotituloP2:"Sorpresa",
  ruta:"Reto1",
  color:'#EF6718',
  widthimage: '100%', 
  heightimage: '92%',
  imagenreto:require("../../../imagenes/imagenR10.png"),
  },
];

function Retosorden() {
  const navigation=useNavigation();
  return(
    <View style={styles.containerPapa}>
      {retos.map((reto) => {
        if(reto.sentido=="left"){
          return (
            <View style={[styles.contenedorgeneral,{marginBottom: reto.marginBottom, }]}>
        <View style={[styles.leccontainer,]}>
          <TouchableOpacity 
            //key={modulo.id} 
            style={[styles.box1, {  }]}
            onPress={()=> navigation.navigate(reto.ruta)}>
              <Image
                source={reto.imagenreto}
                style={{width: reto.widthimage, height: reto.heightimage, }}
              />
            <Text style={[styles.texto,{ paddingBottom:'5%',paddingRight:'30%', color:reto.color,}]}>{reto.modulotituloP1}</Text>
            <Text style={[styles.texto,{ paddingTop:'15%',paddingRight:'30%', color:reto.color,}]}>{reto.modulotituloP2}</Text>
          </TouchableOpacity>
          <View style={[styles.box2, { }]}>
            
          </View>
        </View>
      </View>
          );
        }else if(reto.sentido=="right"){
          return (
            <View style={[styles.contenedorgeneral, {marginBottom: reto.marginBottom,}]}>
              <View style={[styles.leccontainer,]}>
                <View style={[styles.box2, {  alignItems:'flex-end',}]}>
                </View>
                <TouchableOpacity 
                  //key={modulo.id} 
                  style={[styles.box1, { }]}
                  onPress={()=> navigation.navigate(reto.ruta)}>
                    <Image
                      source={reto.imagenreto}
                      style={{width: reto.widthimage, height: reto.heightimage,  }}
                    />
                  <Text style={[styles.texto,{ paddingBottom:'5%',paddingLeft:'25%', color:reto.color,}]}>{reto.modulotituloP1}</Text>
                  <Text style={[styles.texto,{ paddingTop:'15%',paddingLeft:'25%', color:reto.color,}]}>{reto.modulotituloP2}</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }
        
      })}
    </View>
  );}

const RetosScreen0Inicio = () => {
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
                    marginTop:'15%'}}>Retos</Text>
    </ImageBackground>
    <ScrollView style={{padding:0,}}>
      <Retosorden/>
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
  position:'absolute',
  textAlign:"center",
  fontSize:21,
  fontWeight:"500",
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
  height:250,
  borderRadius:40,
  alignItems:"center",
  justifyContent: 'center',
  flexDirection: "row",
},  
//Cuadrar boxes
box1: {
  backgroundColor:'transparent',
  borderColor: "transparent",
  width: '75%',
  height: '90%',
  borderRadius:10,
  borderWidth:2, 
  alignItems:'center',
  justifyContent: 'center',
},
box1imagen: {
  borderColor:"#21828F",
  width: '70%',
  height: '70%',
  borderRadius:10,
  borderWidth:2, 
},
box2: {
  marginRight:'10%',
  borderColor:"transparent",
  justifyContent:'flex-end',
  backgroundColor:'transparent',
  borderColor: "transparent",
  //marginTop:'25%',
  width: '15%',
  height: '90%',
  borderRadius:10,
  borderWidth:2, 
},
contenedorgeneral: {
  height:'0.5%',
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

export default RetosScreen0Inicio