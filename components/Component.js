import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import ShowMonsterData from './ShowMonsterData'

const Yugi = () => {
  const [monster, setMonster] = useState({})

  return (
    <View style={styles.container}>
      <Button onPress={() => {
        getDM().then((res) => {
          setMonster(res)
        })
      }} title="Invocar Dark magician"/>
      <>{Object.keys(monster).length ? <ShowMonsterData monster={monster} /> : 'no data'}</>   
    </View>
  );
}

function getDM() {
  const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark Magician'
  return fetch(url)
    .then(res => res.json())
    .then((result) => {
      return result.data
    })
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