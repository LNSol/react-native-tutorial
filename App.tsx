import React from 'react';
import {Text, View, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

type RootParamList = {
  Home: undefined;
  Chat: undefined;
  Apply: undefined;
  Cart: undefined;
  My: undefined;
};
type IconProps = {
  color: string;
  size: number;
};
const Tab = createBottomTabNavigator<RootParamList>();

const HomeScreen = () => (
  <View>
    <Text>Home Screen</Text>
    <TextInput placeholder="여기가 텍스트 인풋 박스" />
  </View>
);
const HomeIcon = ({color, size}: IconProps) => (
  <Icon name="home" color={color} size={size} />
);

const ChatScreen = () => (
  <View>
    <Text>Chat Screen</Text>
  </View>
);
const ChatIcon = ({color, size}: IconProps) => (
  <Icon name="message" color={color} size={size} />
);
const ApplyScreen = () => (
  <View>
    <Text>Apply Screen</Text>
  </View>
);
const ApplyIcon = ({color, size}: IconProps) => (
  <Icon name="add" color={color} size={size} />
);
const CartScreen = () => (
  <View>
    <Text>Cart Screen</Text>
  </View>
);
const CartIcon = ({color, size}: IconProps) => (
  <Icon name="shopping-cart" color={color} size={size} />
);
const MyScreen = () => (
  <View>
    <Text>My Screen</Text>
  </View>
);
const MyIcon = ({color, size}: IconProps) => (
  <Icon name="person" color={color} size={size} />
);

const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarAllowFontScaling: false,
        tabBarHideOnKeyboard: false,
        // tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          title: '채팅',
          tabBarIcon: ChatIcon,
        }}
      />
      <Tab.Screen
        name="Apply"
        component={ApplyScreen}
        options={{
          title: '신청',
          tabBarIcon: ApplyIcon,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: '장바구니',
          tabBarIcon: CartIcon,
        }}
      />
      <Tab.Screen
        name="My"
        component={MyScreen}
        options={{
          title: '내 정보',
          tabBarIcon: MyIcon,
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
export default App;
