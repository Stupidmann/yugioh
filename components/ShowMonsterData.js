import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Monster = ({monster}) => {
  debugger
  return (
    <View>
      <Text>Nombre: {monster[0].name}</Text>
      <Text>Lvl: {monster[0].level}</Text>
      {monster[0].card_images.forEach(img => {
        <Image 
        style={{width: 50, height: 50}}
        source={{uri: img.image_url }}
        /> 
        console.log(img.image_url)
      })}
      <Image 
          style={styles.card}
          source={{uri: monster[0].card_images[0].image_url }}
      /> 
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 150,
    width: 100
  }
})

export default Monster;
