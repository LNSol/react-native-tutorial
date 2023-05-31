// import React, {useEffect} from 'react';
// import {Text} from 'react-native';
// import {useRoute, RouteProp} from '@react-navigation/native';
// import {StackScreenParamList} from '../App';
// import {StackScreenProps} from '@react-navigation/stack';

// type ChatScreenProps = StackScreenProps<StackScreenParamList, 'Chat'>;

// const MyId = () => {
//   const route = useRoute<RouteProp<StackScreenParamList, 'Chat'>>();
//   return <Text>{route.params.myId}</Text>;
// };

// const ChatScreen = ({route, navigation}: ChatScreenProps) => {
//   console.log(route.params.myId);

//   useEffect(() => {
//     navigation.setOptions({title: `채팅 - myId: ${route.params.myId}`});
//   }, [navigation, route.params.myId]);
//   // return <Text>Chat Screen - myId: {route.params.myId}</Text>;
//   return <MyId />;
// };
// export default ChatScreen;

import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {StackScreenParamList} from '../App';

type ChatScreenProps = StackScreenProps<StackScreenParamList, 'Chat'>;

const MyIdText = () => {
  const route = useRoute<RouteProp<StackScreenParamList, 'Chat'>>();
  return <Text>MyId: {route.params.myId}</Text>;
};

const ChatScreen = ({route, navigation}: ChatScreenProps) => {
  useEffect(() => {
    navigation.setOptions({
      title: `MyId - ${route.params.myId}`,
    });
  }, [navigation, route.params.myId]);

  return (
    <View>
      <Text>Chat Screen</Text>
      <MyIdText />
    </View>
  );
};
export default ChatScreen;
