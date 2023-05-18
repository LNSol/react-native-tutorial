import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../App';

type DetailScreenProps = StackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen = ({route, navigation}: DetailScreenProps) => {
  const {id} = route.params;
  console.log(route);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>id: {id}</Text>
      <View style={styles.buttons}>
        <Button
          title="이전"
          onPress={() => {
            navigation.pop();
          }}
        />
        <Button
          title="다음"
          onPress={() => {
            // navigation.navigate('Detail', {id: id + 1});
            navigation.push('Detail', {id: id + 1});
          }}
        />
        <Button title="처음으로" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 60,
  },
  buttons: {
    flexDirection: 'row',
  },
});
export default DetailScreen;
