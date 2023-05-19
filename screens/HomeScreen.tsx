import React from 'react';
import {Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import {SafeAreaView} from 'react-native-safe-area-context';

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <SafeAreaView>
      <Button
        title="Detail 1 열기"
        onPress={() => {
          // navigation.navigate('Detail', {id: 1});
          navigation.push('Detail', {id: 1});
        }}
      />
      <Button
        title="Detail 2 열기"
        onPress={() => {
          // navigation.navigate('Detail');
          navigation.push('Detail', {id: 2});
        }}
      />
      <Button
        title="Detail 3 열기"
        onPress={() => {
          // navigation.navigate('Detail');
          navigation.push('Detail', {id: 3});
        }}
      />
      <Button
        title="Headerless 화면 열기"
        onPress={() => navigation.push('Headerless')}
      />
    </SafeAreaView>
  );
};
export default HomeScreen;
