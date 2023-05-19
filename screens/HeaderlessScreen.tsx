import React from 'react';
import {useSafeAreaInsets, SafeAreaView} from 'react-native-safe-area-context';
import {Button, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../App';

type HeaderlessScreen = StackScreenProps<RootStackParamList, 'Headerless'>;

const HeaderlessScreen = ({navigation}: HeaderlessScreen) => {
  const {top} = useSafeAreaInsets();
  console.log('top > ', top);

  return (
    <>
      {/* <View style={[styles.statusBar, {height: top}]} /> */}
      <SafeAreaView>
        <View>
          <Text>헤더가 없다!</Text>
          <Button title="돌아가기" onPress={() => navigation.pop()} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default HeaderlessScreen;
