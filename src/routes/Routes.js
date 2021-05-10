'use strict';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from '../screens/MainScreen';
import HomeScreen from '../screens/HomeScreen';

const RootStack = createStackNavigator(
   {
      Home: HomeScreen,
      Main: MainScreen,
   },
   {
      headerLayoutPreset: 'left'
   },
   {
      initialRouteName: 'Home',
   },
);

export default createAppContainer(RootStack);