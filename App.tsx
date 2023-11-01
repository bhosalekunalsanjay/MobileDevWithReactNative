import React, { useEffect } from 'react';
import { Button, Text, useColorScheme, View } from 'react-native';
import { dummyApi } from './utils/ApiService';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { FIREBASE_DB, FIREBASE_DB_EXPENSE_TYPES } from './Firebase.Config';
import { expenseTypesData } from './utils/Masters';

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
    // Create a reference to the "expense types" collection
    const expenseTypesCollectionRef = collection(FIREBASE_DB, FIREBASE_DB_EXPENSE_TYPES); // Replace 'FIREBASE_DB' with your Firestore instance

    // Loop through the data and add each expense type as a document
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
        onPress={createExpense}
      ></Button>
    </View>
  );
}

export default App;
