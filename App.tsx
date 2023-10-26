import React from 'react';
import { Button, Text, useColorScheme, View } from 'react-native';
import { dummyApi } from './utils/ApiService';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

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
        title='Call API'
        onPress={dummyApiCall}
      ></Button>
    </View>
  );
}


export default App;
