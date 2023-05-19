import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../App';

type DetailScreenProps = StackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen = ({route, navigation}: DetailScreenProps) => {
  // const {id} = route.params;

  // useEffect(() => {
  //   navigation.setOptions({title: `상세 페이지 - ${route.params.id}`});
  // }, [navigation, route.params.id]);

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Text style={styles.text}>id: {route.params.id}</Text>
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
              // navigation.navigate('Detail', {id: route.params.id + 1});
              navigation.push('Detail', {id: route.params.id + 1});
            }}
          />
          <Button title="처음으로" onPress={() => navigation.popToTop()} />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
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
