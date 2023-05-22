import React from 'react';
import {View, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerScreenProps,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

type RootDrawerParamList = {
  Home: undefined;
  Setting: undefined;
};
type HomeScreenProps = DrawerScreenProps<RootDrawerParamList, 'Home'>;
type SettingScreenProps = DrawerScreenProps<RootDrawerParamList, 'Setting'>;

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Drawer 열기" onPress={() => navigation.openDrawer()} />
      <Button
        title="Setting 열기"
        onPress={() => navigation.navigate('Setting')}
      />
    </View>
  );
};

const SettingScreen = ({navigation}: SettingScreenProps) => {
  return (
    <View>
      <Text>Setting Screen</Text>
      <Button title="돌아가기" onPress={() => navigation.goBack()} />
    </View>
  );
};

const CustomDrawer = ({navigation}: DrawerContentComponentProps) => {
  return (
    <SafeAreaView>
      <Text>Custom Drawer</Text>
      <Button title="Drawer 닫기" onPress={() => navigation.closeDrawer()} />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        backBehavior="history"
        // drawerContent={CustomDrawer}
        screenOptions={{
          drawerPosition: 'left',
          drawerActiveBackgroundColor: '#46c4ea',
          drawerActiveTintColor: '#fff',
        }}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '홈'}}
        />
        <Drawer.Screen
          name="Setting"
          component={SettingScreen}
          options={{title: '설정'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
