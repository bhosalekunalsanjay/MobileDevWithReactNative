import React from 'react';
import { View, Text, Button } from 'react-native';

function AddExpense({ navigation }:any) {
  return (
    <View>
      <Text>This is the New Screen</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default AddExpense;
