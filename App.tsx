import React, { useEffect } from 'react';
import { Button, Text, useColorScheme, View } from 'react-native';
import { dummyApi } from './utils/ApiService';
// import { onValue, ref } from 'firebase/database';
// import { db } from './Firebase.Config';
// import firestore from '@react-native-firebase/firestore';
// import { getDoc } from 'firebase/firestore';
// import { collection, doc, setDoc } from "firebase/firestore";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
//   const citiesRef = ()=>{
//     var a = collection(db, "cities");
//     console.log(a);
//   }

  // getDoc();
  // const collection = doc(FIREBASE_DATABASE,'collectionname','docname');
  // const dbCollection = collection(FIREBASEAPP.firestore(), collectionName);
  // const a = firestore.collection('as');

  const dummyApiCall = () => {
    dummyApi().then(response => {
      const data = response.data;
      console.log(data);
      // Handle the data here
    })
      .catch(error => {
        // Handle errors here
      });
  }

//   useEffect(() => {
//       const d = firestore().collection('user').onSnapshot(q => {
//         const u = []
//         q.forEach(doc=>{
//           u.push({
//             ...doc.data(),
//             key:doc.id
//           })
//         })
//       })
//     return () => citiesRef();
//   }, []);

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Hello World</Text>
      <Button
        title='Call API'
        onPress={dummyApiCall}
      ></Button>
    </View>
  );
}


export default App;
