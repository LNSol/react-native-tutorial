import React from 'react';
import {CompositeScreenProps} from '@react-navigation/native';
import {
  MaterialTopTabScreenProps,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import {StackScreenProps} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Button, Text, View} from 'react-native';
import {StackScreenParamList} from '../App';

type TopTabScreenParamList = {
  Home: undefined;
  Apply: undefined;
  Cart: undefined;
  My: undefined;
};
type HomeScreenProps = CompositeScreenProps<
  MaterialTopTabScreenProps<TopTabScreenParamList, 'Home'>,
  StackScreenProps<StackScreenParamList>
>;
type IconProps = {color: string};

const Tab = createMaterialTopTabNavigator<TopTabScreenParamList>();

const HomeScreen = ({navigation}: HomeScreenProps) => (
  <View>
    <Text>Home Screen</Text>
    <Button title="App 채팅 이동하기" onPress={() => navigation.push('Chat')} />
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

const MainScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarShowLabel: false,
      tabBarIndicatorStyle: {
        backgroundColor: '#46c4ea',
      },
      tabBarActiveTintColor: '#46c4ea',
    }}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: HomeIcon,
      }}
    />
    <Tab.Screen
      name="Apply"
      component={ApplyScreen}
      options={{
        tabBarIcon: ApplyIcon,
      }}
    />
    <Tab.Screen
      name="Cart"
      component={CartScreen}
      options={{
        tabBarIcon: CartIcon,
      }}
    />
    <Tab.Screen
      name="My"
      component={MyScreen}
      options={{
        tabBarIcon: MyIcon,
      }}
    />
  </Tab.Navigator>
);
export default MainScreen;
