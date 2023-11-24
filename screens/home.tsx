import React from 'react';
import { View, Text, Button } from 'react-native';
import { AddNewExpTypScreenMeta } from '../utils/constants';

function HomeScreen({ navigation }:any) {
  return (
    <View>
      <Button
        title="Go to Add Expense Type"
        onPress={() => navigation.navigate(AddNewExpTypScreenMeta.navId)}
      />
    </View>
  );
}

export default HomeScreen;
