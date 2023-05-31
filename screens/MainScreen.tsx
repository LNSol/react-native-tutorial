import React, {useCallback} from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';
import {
  CompositeNavigationProp,
  CompositeScreenProps,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabScreenProps,
  MaterialBottomTabNavigationProp,
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
  My: {name: string};
};

type HomeScreenProps = CompositeScreenProps<
  MaterialBottomTabScreenProps<TabScreenParamList, 'Home'>,
  StackScreenProps<StackScreenParamList>
>;

const Tab = createMaterialBottomTabNavigator<TabScreenParamList>();

type CompositedNavigationProp = CompositeNavigationProp<
  MaterialBottomTabNavigationProp<TabScreenParamList, 'Home'>,
  StackNavigationProp<StackScreenParamList>
>;

// const OpenChatButton = ({onPress}: {onPress: () => void}) => {
// const OpenChatButton = ({navigation}: Pick<HomeScreenProps, 'navigation'>) => {
// const OpenChatButton = ({
//   navigation,
//   route,
// }: Pick<HomeScreenProps, 'navigation' | 'route'>) => {
const OpenChatButton = () => {
  // const navigation = useNavigation();
  // const navigation = useNavigation<StackNavigationProp<StackScreenParamList>>();
  const navigation = useNavigation<CompositedNavigationProp>();
  // console.log('HomeScreen의 route 객체임 > ', route);
  return (
    // <Button title="App 채팅 이동하기" onPress={() => navigation.push('Chat')} />
    <View>
      <Button
        title="App 채팅 이동하기"
        // onPress={onPress}
        onPress={() => navigation.push('Chat', {myId: 1})}
      />
      <Button
        title="My 이동하기"
        onPress={() => navigation.navigate('My', {name: 'Lim'})}
      />
    </View>
  );
};

const HomeScreen = ({navigation, route}: HomeScreenProps) => {
  console.log('navigation > ', navigation, 'route > ', route);
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
      {/* <OpenChatButton navigation={navigation} route={route} /> */}
    </View>
  );
};
const ApplyScreen = () => <Text>Apply Screen</Text>;
const CartScreen = () => <Text>Cart Screen</Text>;
const MyScreen = ({
  route,
}: MaterialBottomTabScreenProps<TabScreenParamList, 'My'>) => (
  <Text>My Screen - My name: {route.params.name}</Text>
);

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

const MainScreen = () => {
  return (
    <>
      <Text>Main Screen에서 My의 파라미터 사용하기</Text>
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
    </>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#000',
  },
});

export default MainScreen;
