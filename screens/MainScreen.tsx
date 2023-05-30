import React, {useCallback} from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';
import {
  CompositeScreenProps,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabScreenProps,
} from '@react-navigation/material-bottom-tabs';
import {StackScreenProps, StackNavigationProp} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StackScreenParamList} from '../App';

type TIconProps = {
  color: string;
};

type TabScreenParamList = {
  Home: undefined;
  Apply: undefined;
  Cart: undefined;
  My: undefined;
};

type HomeScreenProps = CompositeScreenProps<
  MaterialBottomTabScreenProps<TabScreenParamList, 'Home'>,
  StackScreenProps<StackScreenParamList>
>;

const Tab = createMaterialBottomTabNavigator<TabScreenParamList>();

// const OpenChatButton = ({navigation}: Pick<HomeScreenProps, 'navigation'>) => {
const OpenChatButton = () => {
  const navigation = useNavigation<StackNavigationProp<StackScreenParamList>>();
  return (
    // <Button title="App 채팅 이동하기" onPress={() => navigation.push('Chat')} />
    <View>
      <Button
        title="App 채팅 이동하기"
        onPress={() => console.log(navigation.push('Chat', {myId: 1}))}
      />
    </View>
  );
};

const HomeScreen = ({navigation}: HomeScreenProps) => {
  useFocusEffect(
    useCallback(() => {
      console.log('이 화면을 보고 있어요.');
      return () => console.log('다른 화면으로 넘어갔수');
    }, []),
  );
  return (
    <View>
      <Text>Home Screen</Text>
      {/* <Button title="App 채팅 이동하기" onPress={() => navigation.push('Chat')} /> */}
      {/* <OpenChatButton navigation={navigation} /> */}
      <OpenChatButton />
    </View>
  );
};
const ApplyScreen = () => <Text>Apply Screen</Text>;
const CartScreen = () => <Text>Cart Screen</Text>;
const MyScreen = () => <Text>My Screen</Text>;

const HomeIcon = ({color}: TIconProps) => (
  <Icon name="home" color={color} size={24} />
);
const ApplyIcon = ({color}: TIconProps) => (
  <Icon name="add" color={color} size={24} />
);
const CartIcon = ({color}: TIconProps) => (
  <Icon name="shopping-cart" color={color} size={24} />
);
const MyIcon = ({color}: TIconProps) => (
  <Icon name="person" color={color} size={24} />
);

const MainScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    shifting={true}
    labeled={false}
    activeColor="#46c4ea"
    inactiveColor="#ddd"
    barStyle={styles.tabBar}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: HomeIcon,
        tabBarBadge: 'new',
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
        tabBarBadge: 2,
      }}
    />
    <Tab.Screen
      name="My"
      component={MyScreen}
      options={{
        tabBarIcon: MyIcon,
        tabBarBadge: true,
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#000',
  },
});

export default MainScreen;
