import { StyleSheet, Text, View,ImageBackground,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';

const persons = [
  {
	id: 1,
	name: "Earnest Green",
  color: "#1F646D",
  sentido: "right",
  lecciontext:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
  imageleccion:require("../../../imagenes/pythontemplate.png"),
  image: require("../../../imagenes/number1.png")
  },
  {
	id: 2,
	name: "Winston Orn",
  color: "#FFFFFF",
  sentido: "left",
  lecciontext:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
  imageleccion:require("../../../imagenes/pythontemplate.png"),
  image: require("../../../imagenes/number1.png")
  },
  {
	id: 3,
	name: "Carlton Collins",
  sentido: "right",
  color: "#1F646D",
  lecciontext:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
  imageleccion:require("../../../imagenes/pythontemplate.png"),
  image: require("../../../imagenes/number1.png")
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
                <View style={[styles.box1, {  }]}>
                <Image
                    source={person.image}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
                <View style={[styles.box2, {  }]}>
                  <Text style={{textAlign:"center",fontSize:16}}>{person.lecciontext}</Text>
                </View>
                <View style={[styles.box3, {  }]}>
                  <Image 
                    source={person.imageleccion}
                    style={{width: '100%', height: '100%'}}
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
                <View style={[styles.box1, {}]}>
                <Image 
                    source={person.imageleccion}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
                <View style={[styles.box2, {}]}>
                  <Text style={{textAlign:"center",fontSize:15}}>{person.lecciontext}</Text>
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
    borderColor:"#ffffff",
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