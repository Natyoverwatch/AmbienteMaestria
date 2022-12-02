import { View, Text,SafeAreaView, StyleSheet,ImageBackground,Image,TouchableOpacity} from 'react-native'
import React,{useState,useEffect} from 'react';

import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from '../../../firebase-config';
import { getDatabase, ref, onValue} from "firebase/database";



function userdata(){
  const app=initializeApp(firebaseConfig);
  const auth=getAuth(app);
  const [todos, setTodos] = useState({});
  const db=getDatabase(app);

  useEffect(() => {
    return onValue(ref(db, '/users/'+global.iduser), querySnapShot => {
      let data = querySnapShot.val() || {};
      let todoItems = {...data};
      setTodos(todoItems);
    });
  }, []);
  
  return todos
 
}

const PerfilScreen0 = ({navigation}) => {
  let userinfo='';
  if(global.iduser!='') userinfo=userdata();
    //console.log(userinfo);
  return (
    <View style={styles.containerPapa}>
      <Image
                style={styles.logo}
                source={require('../../../imagenes/perfilpicture.png')}/>
      <View style={styles.infouser}>
      <Text style={[styles.info, {fontWeight:"bold",}]}>{userinfo.username}</Text>
      <Text style={[styles.info, {fontWeight:"bold",}]}>{userinfo.curse}</Text>
      <Text style={[styles.info, {fontWeight:"bold",}]}>{userinfo.email}</Text>

      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Intro2")}>
            <Text style={{fontSize:18,fontWeight:'500',color:'white',fontWeight: "bold"}}>Salir</Text>
          </TouchableOpacity>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  containerPapa: {
      height:'100%',
      width:'100%',
      alignItems:'center',
      marginTop:'10%',
      //backgroundColor:"red"
    },
    logo: {
      marginTop:"10%",
      width: 218,
      height: 250,
  },
  infouser:{
    marginTop:"8%",
    alignItems:"center",
  },  
  info:{
    marginTop:"8%",
    fontSize:23,
  },
  button:{
    width:150,
    height:40,
    borderRadius:10,
    backgroundColor:"#FFAD2B",
    alignItems:'center',
    justifyContent: 'center',
    marginTop:50,
    borderColor:'#fff',
    borderWidth:2,
  },
  })


export default PerfilScreen0