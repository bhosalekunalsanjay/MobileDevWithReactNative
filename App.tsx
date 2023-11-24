import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { dummyApi } from './utils/ApiService';
import 'react-native-gesture-handler'; // Import this at the top of your entry point
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddExpense from './screens/add.expensetype';
import HomeScreen from './screens/home';
import { AddNewExpTypScreenMeta, HomeScreenMeta } from './utils/constants';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const fetchTestDb = async () => {
    // await getDocs(collection(FIREBASE_DB, FIREBASE_DB_TESTDB))
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       const tableName = doc.id;
    //       const tableData = doc.data();
    //     });
    //   })
  }

  useEffect(() => {
    // fetchTestDb();
  }, []);

  const dummyExternalApiCall = () => {
    console.log('data');
    dummyApi().then(response => {
      const data = response.data;
    })
    .catch(error => { });
  }

  return (
    // <View>
    //   <Text style={{ fontSize: 30 }}>Hello World</Text>
    //   <Button
    //     title='Call API'
    //     onPress={createExpense}
    //   ></Button>
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        {/* Define your screens here */}
        <Stack.Screen options={{title:AddNewExpTypScreenMeta.titleText}} name={AddNewExpTypScreenMeta.navId} component={AddExpense} />
        <Stack.Screen options={{title:HomeScreenMeta.titleText}} name={HomeScreenMeta.navId} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
