import React from 'react';
import {View, Text, Button} from 'react-native';

const DetailsScreen = ({route, navigation}) => {
  const {itemId, itemName} = route.params;

  return (
    <View>
      <Text>Details Screen</Text>
      <Text>ID: {itemId}</Text>
      <Text>Name: {itemName}</Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default DetailsScreen;
