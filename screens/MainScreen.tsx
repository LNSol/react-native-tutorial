import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons';

type IconProps = {
  color: string;
};

const HomeScreen = () => (
  <View>
    <Text>Home Screen</Text>
  </View>
);
const ApplyScreen = () => <Text>Apply Screen</Text>;
const CartScreen = () => <Text>Cart Screen</Text>;
const MyScreen = () => <Text>My Screen</Text>;

const HomeIcon = ({color}: IconProps) => (
  <Icon name="home" color={color} size={24} />
);
const ApplyIcon = ({color}: IconProps) => (
  <Icon name="add" color={color} size={24} />
);
const CartIcon = ({color}: IconProps) => (
  <Icon name="shopping-cart" color={color} size={24} />
);
const MyIcon = ({color}: IconProps) => (
  <Icon name="person" color={color} size={24} />
);

const MainScreen = () => <Text>Hi</Text>;
export default MainScreen;
