import React, { useEffect } from 'react';
import { Button, Text, useColorScheme, View } from 'react-native';
import { dummyApi } from './utils/ApiService';
import { collection, DocumentData, getDocs } from 'firebase/firestore';
import { FIREBASE_DB, FIREBASE_DB_NAME } from './Firebase.Config';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const fetchPost = async () => {
    console.log('a');
    await getDocs(collection(FIREBASE_DB, FIREBASE_DB_NAME))
      .then((querySnapshot) => {
        const items: DocumentData[] = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        console.log('querySnapshot', items);
      })
  }

  useEffect(() => {
    fetchPost();
  }, [])

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

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Hello World</Text>
      <Button
        title='Call API2'
        onPress={dummyApiCall}
      ></Button>
    </View>
  );
}

export default App;
