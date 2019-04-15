import React, { Component } from "react";
import { Image, ScrollView } from "react-native";
import { dimensions } from "../styles/base";

export default class SingleImage extends Component {
  render() {
    const img = this.props.navigation.getParam("img", "NO-IMG");
    const width = this.props.navigation.getParam("width", dimensions.fullWidth);
    const height = this.props.navigation.getParam(
      "height",
      dimensions.fullHeight
    );
    return (
      <ScrollView horizontal={true}>
        <ScrollView>
          <Image
            style={{ width: width, height: height }}
            source={{
              uri: img
            }}
          />
        </ScrollView>
      </ScrollView>
    );
  }
}
