import React, { useEffect } from 'react';
import { Button, Text, useColorScheme, View } from 'react-native';
import { dummyApi } from './utils/ApiService';
import { collection, getDocs } from 'firebase/firestore';
import { FIREBASE_DB, FIREBASE_DB_NAME } from './Firebase.Config';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const fetchPost = async () => {
    await getDocs(collection(FIREBASE_DB, "/testdb/"))
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const tableName = doc.id;
          const tableData = doc.data();
        });
      })
  }

  useEffect(() => {
    fetchPost();
  }, [])

  const dummyApiCall = () => {
    console.log('data');
    dummyApi().then(response => {
      const data = response.data;
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
