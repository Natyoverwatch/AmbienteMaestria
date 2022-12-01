import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react';

import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from '../../../firebase-config';
import { getDatabase, ref, onValue} from "firebase/database";



const PerfilScreen0 = () => {
  //console.log(global.iduser)

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
  
  {Object.keys(todos).map((keyName, i) => (
      //console.log("Key:"+{i}+" Name:"+{todos[keyName]})
      console.log(todos[keyName])
      //todos[keyName].email==correo ? console.log("Correo iguales") : console.log("No usuario")
      
    ))}


  return (
    <View>
      <Text>PerfilScreen0</Text>
    </View>
  )
}

export default PerfilScreen0