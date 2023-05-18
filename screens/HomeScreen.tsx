import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../App';

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <View>
      <Button
        title="Detail 1 열기"
        onPress={() => {
          // navigation.navigate('Detail');
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
    </View>
  );
};
export default HomeScreen;
