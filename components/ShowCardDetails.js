import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

const ShowCardDetails = ({cardData}) => {
  let lvl = null;

  if (!!cardData.level) {
    lvl = <Text>Lvl: {cardData.level}</Text>
  }
  return (
    <View>
      <Text>Card name: {cardData.name}</Text>
      { lvl }
      <Text style={{resizeMode: "contain"}}>Description: {cardData.desc}</Text>
      <FlatList data={cardData.card_images.map( img => img )}
        key={"2"}
        numColumns={2}
        renderItem={({item}) => (
        <Image 
          style={{
            width: 180,
            height: 220,
            resizeMode: "contain",
            margin: 6,
          }}
          source={item.image_url}/>
      )}/>
      <Image 
        source={{ uri: cardData.card_images[0].image_url}}
        style={ styles.card } />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 150,
    width: 100
  }
})

export default ShowCardDetails;
