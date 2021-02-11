import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import ShowMonsterData from './ShowMonsterData'

const Yugi = () => {
  const [wasInvoked, setWasInvoked] = useState(false)
  const [monster, setMonster] = useState({})

  return (
    <View style={styles.container}>
      {/* <Text>Obtener datos de Dark Magician</Text> */}
      <Button onPress={() => {
        setWasInvoked(true);
        getDM().then((res) => {
          setMonster(res)
        })
      }} title="Invocar Dark magician"/>
      <Image source={{uri: 'https://storage.googleapis.com/ygoprodeck.com/pics/46986414.jpg'}} />

      {/* <Text>{ wasInvoked ? 'Invoca3' : 'Invocar'}</Text> */}
      <>{Object.keys(monster).length ? <ShowMonsterData monster={monster} /> : 'no data'}</>
      
    </View>
  );
}

function getDM() {
  const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark Magician'
  return fetch(url)
    .then(res => res.json())
    .then((result) => {
      console.log(result.data)
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