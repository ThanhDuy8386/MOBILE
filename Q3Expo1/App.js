import React, {useState} from 'react';
import {Text, Button, View} from 'react-native';

export default () => {
  const [pressCount, setPressCount] = useState(0);

  return (
    <View style={{alignItems: "center", marginTop: 200}}>
      <Text>You've pressesd the button: {pressCount} time(s) Thanh Duy</Text>
      <Button title="Press me" onPress={() => setPressCount(pressCount + 1)}/>
    </View>
  );
};