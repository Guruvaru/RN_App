import React from "react";
import { View, Text, Image, Button } from "react-native";
import { styles, colors } from "../styles/base";

const Card = props => {
  return (
    // <View style={styles.Card}>
			<View style={styles.Card}>
        <Image
          style={styles.image}
					source={{ uri: props.img}}
					onPress={props.press}
        />
        <View style={styles.div}>
          <Text style={styles.author}>{props.author}</Text>
          <Text numberOfLines={2} style={styles.name}>{props.name}</Text>
					<Button title="Open" color='rgba(0, 0, 0, 0)' onPress={props.press} style={{margin: 6 }} />
        </View>
      </View>
//  </View>
  );
};

export default Card;
