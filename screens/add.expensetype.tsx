import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { collection, doc, setDoc } from 'firebase/firestore';
import { FIREBASE_DB, FIREBASE_DB_EXPENSE_TYPES } from '../Firebase.Config';
import { expenseTypesData } from '../utils/Masters';
import 'react-native-gesture-handler'; // Import this at the top of your entry point
import { HomeScreenMeta } from '../utils/constants';
import RNPickerSelect from 'react-native-picker-select';
import DropDownPicker from 'react-native-dropdown-picker';

function AddExpenseType({ navigation }: any) {
  const [textInputValue, setTextInputValue] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }
  ]);

  const handleClear = () => {
    setTextInputValue('');
    setSelectedOption({ label: 'Apple', value: 'apple' });
  };

  const handleSubmit = () => {
    handleClear();
  };

  const createExpenseType = () => {
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

  return (
    // <View>
    //   <Button
    //     title="Go To Home Screen"
    //     onPress={() => navigation.navigate(HomeScreenMeta.navId)}
    //   />
    // </View>

    <View style={styles.container}>
      <Text>Text Input:</Text>
      <TextInput
        style={styles.input}
        value={textInputValue}
        onChangeText={(text) => setTextInputValue(text)}
        placeholder="Enter text"
      />

      <Text>Dropdown:</Text>
      <DropDownPicker
        open={open}
        value={selectedOption}
        items={items}
        setOpen={setOpen}
        setValue={setSelectedOption}
        setItems={setItems}
      />
      <View style={styles.buttonContainer}>
        <Button title="Clear" onPress={handleClear} />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
}

export default AddExpenseType;
