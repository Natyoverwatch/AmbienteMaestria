import { StyleSheet, Text, View,ImageBackground,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';

const persons = [
  {
	id: 1,
	name: "Earnest Green",
  color: "#1F646D",
  sentido: "right",
  colorfont:"#ffffff",
  lecciontext:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
  imageleccion:require("../../../../imagenes/imagenL4.1.png"),
  image: require("../../../../imagenes/numL1.png")
  },
  {
	id: 2,
	name: "Winston Orn",
  color: "#FFFFFF",
  sentido: "left",
  colorfont:"#000000",
  lecciontext:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
  imageleccion:require("../../../../imagenes/imagenL4.2.png"),
  image: require("../../../../imagenes/numL2.png")
  },
  {
	id: 3,
	name: "Carlton Collins",
  sentido: "right",
  color: "#1F646D",
  colorfont:"#ffffff",
  lecciontext:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
  imageleccion:require("../../../../imagenes/imagenL4.3.png"),
  image: require("../../../../imagenes/numL3.png")
  },
  
];

function Orderlecciones() {

  return(
    <View>
      {persons.map((person) => {
        if(person.sentido=="left"){
          return (
            <TouchableOpacity 
              key={person.id} 
              style={[styles.leccontainer,{backgroundColor: person.color,}]}
              onPress={()=> console.log("Touched!!")}
            >
              <View style={styles.row}>
                <View style={[styles.box3, {  }]}>
                <Image
                    source={person.image}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
                <View style={[styles.box2, {  }]}>
                  <Text style={{textAlign:"center",fontSize:16, color: person.colorfont}}>{person.lecciontext}</Text>
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
              onPress={()=> console.log("Touched!!")}
            > 
              <View style={styles.row}>
                <View style={[styles.box1, {borderColor:"#C5CACA",}]}>
                <Image 
                    source={person.imageleccion}
                    style={{width: '100%', height: '100%', borderRadius:8,}}
                  />
                </View>
                <View style={[styles.box2, {}]}>
                  <Text style={{textAlign:"center",fontSize:15, color: person.colorfont}}>{person.lecciontext}</Text>
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

const InicioScreen1Leccciones4 = () => {
  return (  
    <View style={styles.container}>
        <View style={styles.containerprogressbar}>
        <Progress.Bar progress={.4} style={styles.progress} width={280}  color="#10E6DE" />
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

export default InicioScreen1Leccciones4