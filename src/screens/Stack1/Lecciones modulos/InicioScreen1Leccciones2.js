import { StyleSheet, Text, View,ImageBackground,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const persons = [
  {
	id: 1,
  color: "#1F646D",
  sentido: "right",
  colorfont:"#ffffff",
  ruta:"Modulo1Leccion1Explicacion",
  lecciontext:"Lección No 1. "+"Variables",
  imageleccion:require("../../../../imagenes/imagenL2.1.jpg"),
  image: require("../../../../imagenes/numL1.png")
  },
  {
	id: 2,
  color: "#FFFFFF",
  sentido: "left",
  colorfont:"#000000",
  ruta:"Modulo1Leccion1Explicacion",
  lecciontext:"Lección No 2. "+"Datos",
  imageleccion:require("../../../../imagenes/imagenL2.2.jpg"),
  image: require("../../../../imagenes/numL2.png")
  },
  {
	id: 3,
  sentido: "right",
  color: "#1F646D",
  colorfont:"#ffffff",
  ruta:"Modulo1Leccion1Explicacion",
  lecciontext:"Lección No 3. "+"Tipos de Datos",
  imageleccion:require("../../../../imagenes/imagenL2.3.jpg"),
  image: require("../../../../imagenes/numL3.png")
  },
  
];

function Orderlecciones() {
  const navigation=useNavigation();
  return(
    <View>
      {persons.map((person) => {
        if(person.sentido=="left"){
          return (
            <TouchableOpacity 
              key={person.id} 
              style={[styles.leccontainer,{backgroundColor: person.color,}]}
              onPress={()=> navigation.navigate(person.ruta)}
            >
              <View style={styles.row}>
                <View style={[styles.box3, {  }]}>
                <Image
                    source={person.image}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
                <View style={[styles.box2, {  }]}>
                  <Text style={{textAlign:"center",fontSize:17, fontWeight:'bold', color: person.colorfont}}>{person.lecciontext}</Text>
                </View>
                <View style={[styles.box1, { borderColor:"#1F646D", }]}>
                  <Image 
                    source={person.imageleccion}
                    style={{width: '100%', height: '100%', borderRadius:8,}}
                  />
                </View>
              </View>
              
            </TouchableOpacity>
  
          );
        }else if(person.sentido=="right"){
          return (
            <TouchableOpacity 
              key={person.id} 
              style={[styles.leccontainer,{backgroundColor: person.color,}]}
              onPress={()=> navigation.navigate(person.ruta)}
            > 
              <View style={styles.row}>
                <View style={[styles.box1, {borderColor:"#C5CACA",}]}>
                <Image 
                    source={person.imageleccion}
                    style={{width: '100%', height: '100%', borderRadius:8,}}
                  />
                </View>
                <View style={[styles.box2, {}]}>
                  <Text style={{textAlign:"center",fontSize:17, fontWeight:'bold', color: person.colorfont}}>{person.lecciontext}</Text>
                </View>
                <View style={[styles.box3, {}]}>
                <Image
                    source={person.image}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
              </View>
              
            </TouchableOpacity>
  
          );
        }
        
      })}
    </View>
  );}

const InicioScreen1Leccciones2 = () => {
  return (  
    <View style={styles.container}>
        <View style={styles.containerprogressbar}>
        <Progress.Bar progress={.0} style={styles.progress} width={280}  color="#10E6DE" />
        </View>
        <Orderlecciones />
    </View>
    
      );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    paddingTop:'8%',
  },
  leccontainer: {
    //backgroundColor:"yellow",
    width:370,
    height:150,
    marginTop:35,
    borderRadius:40,
    alignItems:"center",
    padding:5,
    justifyContent: 'center',
  },  
  //Cuadrar boxes
  box1: {
    width: 80,
    height: 80,
    borderRadius:10,
    borderWidth:2, 
  },
  box2: {
    width: 150,
    height: 80,
    marginLeft:5, 
    padding:3,
    alignItems:"center",
    justifyContent: 'center',
  },
  box3: {
    width: 80,
    height: 80,
    marginLeft:5,
 
  },
  row: {
    marginTop:0,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    flex: 1,
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
});

export default InicioScreen1Leccciones2