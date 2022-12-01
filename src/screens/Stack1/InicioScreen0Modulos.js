import { View, Text,StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const persons = [
  {
	id: 1,
	name: "Modulo 1",
  color: "#1F646D",
  sentido: "right",
  lecciontext:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
  imageleccion:require("../../../imagenes/pythontemplate.png"),
  image: require("../../../imagenes/number1.png")
  },
  {
	id: 2,
	name: "Modulo 2",
  color: "#FFFFFF",
  sentido: "left",
  lecciontext:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
  imageleccion:require("../../../imagenes/pythontemplate.png"),
  image: require("../../../imagenes/number1.png")
  },
  {
	id: 3,
	name: "Modulo 3",
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

const InicioScreen0Modulos = () => {
  const navigation=useNavigation();
  return (
    <View>
      <TouchableOpacity  
                    style={styles.button}
                    onPress={()=> navigation.navigate("Inicio2")}>
                    <Text style={styles.text2}>Empecemos</Text>
                </TouchableOpacity>
      <Text>InicioScreen0Modulos</Text>
      <TouchableOpacity style={[styles.leccontainer,]}>
              
                <View style={[styles.box1, {  }]}>
                <Image
                    source={require("../../../imagenes/pythontemplate.png")}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
                <View style={[styles.box2, {  }]}>
                <Image
                    source={require("../../../imagenes/pythontemplate.png")}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
                
                
              
            </TouchableOpacity>
</View>
  )
}

const styles = StyleSheet.create({
  containerPapa: {
      //paddingTop:15,
      height:'100%',
      width:'100%',
      backgroundColor:'#1F646D',
      alignItems:'center',
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
    backgroundColor:"#14C463",
    width:370,
    height:150,
    marginTop:35,
    borderRadius:40,
    alignItems:"center",
    justifyContent: 'center',
    flexDirection: "row",
  },  
  //Cuadrar boxes
  box1: {
    backgroundColor:'#A70B0B',
    width: '45%',
    height: '90%',
    //marginLeft:'2.5%',
    borderRadius:10,
    //borderColor:"#ffffff",
    borderWidth:2, 
  },
  box2: {
    backgroundColor:'#A70B0B',
    width: '45%',
    height: '90%',
    borderRadius:10,
    marginLeft:'2.5%',
    //borderColor:"#ffffff",
    borderWidth:2, 
  },
  box3: {
    width: 150,
    height: 80,
    marginLeft:5, 
    padding:3,
    alignItems:"center",
    justifyContent: 'center',
  },
  row: {
    backgroundColor:'#3220CC',
    //marginTop:0,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems:"center",
    justifyContent: 'center',
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
})

export default InicioScreen0Modulos