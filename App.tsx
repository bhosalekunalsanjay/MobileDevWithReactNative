import React, { useEffect } from 'react';
import { Button, Text, useColorScheme, View } from 'react-native';
import { dummyApi } from './utils/ApiService';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { FIREBASE_DB, FIREBASE_DB_EXPENSE_TYPES } from './Firebase.Config';
import { expenseTypesData } from './utils/Masters';
import 'react-native-gesture-handler'; // Import this at the top of your entry point
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddExpense from './screens/add.expense';
import HomeScreen from './screens/home';

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

  const createExpense = () => {
    const expenseTypesCollectionRef = collection(FIREBASE_DB, FIREBASE_DB_EXPENSE_TYPES);

    expenseTypesData.forEach(async (expenseType) => {
      const docRef = doc(expenseTypesCollectionRef, String(expenseType.id));

      try {
        // Add the document to Firestore
        await setDoc(docRef, expenseType);
        console.log(`Added expense type: ${expenseType.name}`);
      } catch (error) {
        console.error('Error adding expense type:', error);
      }
    });
  }

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
        <Stack.Screen name="Add New Expense" component={AddExpense} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
