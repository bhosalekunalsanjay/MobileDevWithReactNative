import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';
import { collection, doc, getDocs, query, setDoc } from 'firebase/firestore';
import { FIREBASE_DB, FIREBASE_DB_EXPENSE_TYPES } from '../Firebase.Config';
import { expenseTypesData } from '../utils/Masters';
import 'react-native-gesture-handler'; // Import this at the top of your entry point
import { HomeScreenMeta } from '../utils/constants';
import DropDownPicker from 'react-native-dropdown-picker';
import { DisplayAlert, GUID } from '../utils/common';
import { expenseType } from '../utils/model';
import { Table, Row, Rows } from 'react-native-table-component';

function AddExpenseType({ navigation }: any) {
  const [expenseName, setExpenseName] = useState('');
  // const [open, setOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState<any>(null);
  // const [items, setItems] = useState([
  //   { label: 'Apple', value: 'apple' },
  //   { label: 'Banana', value: 'banana' }
  // ]);
  const jsonData = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    // Add more data as needed
  ];
  // Extract headers from the first data entry
  const headers = Object.keys(jsonData[0]);

  // Extract rows from JSON data
  const rows = jsonData.map((data) => Object.values(data));

  const handleClear = () => {
    setExpenseName('');
    // setSelectedOption({ label: 'Apple', value: 'apple' });
  };

  const handleSubmit = () => {
    createExpenseType();
  };

  const createExpenseType = async () => {
    const expenseTypesCollectionRef = collection(FIREBASE_DB, FIREBASE_DB_EXPENSE_TYPES);
    const expenseType: expenseType = {
      id: GUID(),
      value: expenseName
    };

    const docRef = doc(expenseTypesCollectionRef, String(expenseType.id));
    try {
      // Add the document to Firestore
      await setDoc(docRef, expenseType);
      DisplayAlert("Success", "Expense Type was created Successfully");
    } catch (error) {
      console.error('Error adding expense type:', error);
      DisplayAlert("Success", "Expense Type was created Successfully");
    }
  }

  // Function to get expense types
  const getExpenseTypes = async () => {
    console.log("aaa");
    
    const expenseTypesCollectionRef = collection(FIREBASE_DB, FIREBASE_DB_EXPENSE_TYPES);
    console.log("aaa2222");

    const q = query(expenseTypesCollectionRef);

    try {
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const tableName = doc.id;
        const tableData = doc.data();
        console.log(tableName);
        console.log(tableData);
      });

      DisplayAlert("Success", "Expense Types were retrieved Successfully");
    } catch (error) {
      console.error('Error retrieving expense types:', error);
      DisplayAlert("Error", "Failed to retrieve Expense Types");
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },
  });

  const tableStyles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
  });

  useEffect(() => {
    getExpenseTypes();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text>Expense Name:</Text>
        <TextInput
          style={styles.input}
          value={expenseName}
          onChangeText={(text) => setExpenseName(text)}
          placeholder="Enter text"
        />

        {/* <Text>Dropdown:</Text> */}
        {/* <DropDownPicker
        open={open}
        value={selectedOption}
        items={items}
        setOpen={setOpen}
        setValue={setSelectedOption}
        setItems={setItems}
      /> */}
        <View style={styles.buttonContainer}>
          <Button title="Clear" onPress={handleClear} />
          <Button title="Submit" onPress={handleSubmit} />
        </View>

        <View>
          <Button
            title="Go To Home Screen"
            onPress={() => navigation.navigate(HomeScreenMeta.navId)}
          />
        </View>
      </View>
      <View style={tableStyles.container}>
        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Row data={headers} style={tableStyles.head} textStyle={tableStyles.text} />
          <Rows data={rows} textStyle={tableStyles.text} />
        </Table>
      </View>
    </>
  );
}

export default AddExpenseType;
