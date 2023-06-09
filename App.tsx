import React from 'react';
import {
  NavigationContainer,
  Route,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import ChatScreen from './screens/ChatScreen';

type TScreen = 'Home' | 'Apply' | 'Cart' | 'My';

export type StackScreenParamList = {
  Main: undefined;
  Chat: {myId: number};
};

const Stack = createStackNavigator<StackScreenParamList>();

const getHeaderTitle = (route: Partial<Route<string>>) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  const routeMap = {
    Home: '홈',
    Apply: '신청하기',
    Cart: '장바구니',
    My: '내 정보',
  };
  return routeMap[routeName as TScreen];
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={({route}) => ({
            title: getHeaderTitle(route),
          })}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          // options={({route}) => ({
          //   title: `MyId -  ${route.params.myId}`,
          // })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
