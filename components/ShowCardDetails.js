import React from 'react';
import { StyleSheet, Text, Image, FlatList, ScrollView } from 'react-native';

const ShowCardDetails = ({cardData}) => {
  let monsterData = null;

  if (!!cardData.level) {
    monsterData = () => {
      return (
        <View>
          <Text>Lvl: {cardData.level}</Text>
          <Text>Archetype: {cardData.type}</Text>
        </View>
      )
    }
  }
  return (
    <ScrollView style={{padding: 25, flex: 1}}>
      <Text>Card name: {cardData.name}</Text>
      { monsterData }
      <Text style={{resizeMode: "contain"}}>Description: { cardData.desc }</Text>
      <Image 
        source={{ uri: cardData.card_images[0].image_url}}
        style={ styles.card } />
      <FlatList data={cardData.card_images.map( img => img )}
        key={"2"}
        numColumns={2}
        renderItem={({item}) => (
          <Image 
          style={{
            width: 100,
            height: 150,
            resizeMode: "contain",
            margin: 6,
          }}
          source={item.image_url}/>
          )}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 220,
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    resizeMode: "contain",
  }
})

export default ShowCardDetails;
