import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName =
            route.name === 'HomeTab'
              ? 'home'
              : route.name === 'Search'
              ? 'search'
              : 'settings';

          return <Icon name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: 'blue',
      })}
    >
      <Tab.Screen name="HomeTab" component={StackNavigator} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
