import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Yugi = () => {
  const [wasInvoked, setWasInvoked] = useState(false)
  return (
    <View style={styles.container}>
      <Text>No me la conteiner yugi</Text>
      <Button onPress={() => {
        setWasInvoked(true);
        getDM;
      }} title="Invocar"/>
      <Text>{ wasInvoked ? 'invocado' : 'dale perro'}</Text>
    </View>
  );
}

function getDM() {
  console.log('invocan2')
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Yugi;