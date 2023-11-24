import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }:any) {
  return (
    <View>
      <Text>This is the Home Screen</Text>
      <Button
        title="Go to Add Expenses"
        onPress={() => navigation.navigate('Add New Expense')}
      />
    </View>
  );
}

export default HomeScreen;
