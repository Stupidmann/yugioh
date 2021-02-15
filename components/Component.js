import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import ShowCardDetails from './ShowCardDetails'

const Yugi = () => {
  const [cardData, setCardData] = useState({})
  const [anyCard, setAnyCard] = useState({})

  return (
    <View style={styles.container}>
      <Button onPress={() => {
        getDM().then((res) => {
          setCardData(res)
        })
      }} title="Invocar Dark magician"/>
      <>{Object.keys(cardData).length ? <ShowCardDetails cardData={cardData} /> : 'no data'}</>

      <Button onPress={() => {
        getRandomCard().then((res) => {
          setAnyCard(res)
        })
      }} title="Mostrar cualquier carta"/>
      <>{Object.keys(anyCard).length ? <ShowCardDetails cardData={anyCard} /> : 'no data'}</>
    </View>
  );
}

function getDM() {
  const urlDM = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark%20Magician'
  const urlTD = "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Tornado%20Dragon"

  return fetch(urlDM)
    .then(res => res.json())
    .then((result) => {
      return result.data[0]
    })
}

function getRandomCard() {
  const url = 'https://db.ygoprodeck.com/api/v7/randomcard.php'

  return fetch(url)
    .then(res => res.json())
    .then((result) => {
      return result
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