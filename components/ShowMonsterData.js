import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

const Monster = ({monster}) => {
  const monsterImages = monster[0].card_images.map( img => img.image_url )
  const [images, setImages] = useState(monsterImages)
  
  return (
    <View>
      <Text>Nombre: {monster[0].name}</Text>
      <Text>Lvl: {monster[0].level}</Text>
      <FlatList data={images} 
        key={"2"}
        numColumns={2}
        renderItem={({item}) => (
        <Image style={{
          width: 180,
          height: 220,
          resizeMode: "contain",
          margin: 6,
        }} 
          source={item}/>
      )}/>
      <Image source={{ uri: monster[0].card_images[0].image_url}}
            style={ styles.card }></Image>
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
