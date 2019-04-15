import { StyleSheet, Dimensions } from "react-native";

export const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width
};
let Width = 190;
if (dimensions.fullWidth < 380) Width = (dimensions.fullWidth * 90) / 100;
else if (dimensions.fullWidth > 420) WIdth = 205;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
  Card: {
    width: Width,
    height: 300,
    flexDirection: "row",
    margin: 5
  },
  image: {
    width: Width,
    height: 300,
    position: "absolute"
  },
  div: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignSelf: "flex-end",
    maxHeight: 150
  },
  author: {
    color: "white",
    fontSize: 20,
    margin: 6
  },
  name: {
    color: "white",
    margin: 6
  }
});
