import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CompositeScreenProps} from '@react-navigation/native';
import {StackScreenParamList} from '../App';

type TabScreenParamList = {
  Home: undefined;
  Apply: undefined;
  Cart: undefined;
  My: undefined;
};

type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabScreenParamList, 'Home'>,
  StackScreenProps<StackScreenParamList>
>;

const Tab = createBottomTabNavigator<TabScreenParamList>();

const HomeScreen = ({navigation}: HomeScreenProps) => (
  <View>
    <Text>Home Screen</Text>
    <Button title="App 채팅으로 이동" onPress={() => navigation.push('Chat')} />
  </View>
);
const ApplyScreen = () => <Text>Apply Screen</Text>;
const CartScreen = () => <Text>Cart Screen</Text>;
const MyScreen = () => <Text>My Screen</Text>;

type IconProps = {
  color: string;
  size: number;
};
const HomeIcon = ({color, size}: IconProps) => (
  <Icon name="home" color={color} size={size} />
);
const ApplyIcon = ({color, size}: IconProps) => (
  <Icon name="add" color={color} size={size} />
);
const CartIcon = ({color, size}: IconProps) => (
  <Icon name="shopping-cart" color={color} size={size} />
);
const MyIcon = ({color, size}: IconProps) => (
  <Icon name="person" color={color} size={size} />
);

const MainScreen = () => (
  <Tab.Navigator>
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
