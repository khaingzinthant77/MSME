import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from "react-native";
import * as Font from "expo-font";
export default class DiscountShop extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={styles.base}>
            <View style={styles.baseTop}>
              <Text style={styles.imageText}>MSME</Text>
              <Image
                source={require("../assets/msmelogo.png")}
                style={styles.msmeImage}
              ></Image>
            </View>
            <View style={styles.triangle} />
          </View>
        </View>
        <View style={styles.flexContainer}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.hexagon}>
              <View style={styles.hexagonInner2}>
                <Image
                  source={require("../assets/team.png")}
                  style={styles.image}
                ></Image>
              </View>
              <View style={styles.hexagonBefore} />
              <View style={styles.hexagonAfter} />
            </View>
            <Text style={styles.text}>Member</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.hexagon}>
              <View style={styles.hexagonInner3}>
                <Image
                  source={require("../assets/collaboration.png")}
                  style={styles.image}
                ></Image>
              </View>
              <View style={styles.hexagonBefore} />
              <View style={styles.hexagonAfter} />
            </View>
            <Text style={styles.text}>Committee</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.flexContainer}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.hexagon}>
              <View style={styles.hexagonInner2}>
                <Image
                  source={require("../assets/manager.png")}
                  style={styles.image}
                ></Image>
              </View>
              <View style={styles.hexagonBefore} />
              <View style={styles.hexagonAfter} />
            </View>
            <Text style={styles.text}>Manager</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.hexagon}>
              <View style={styles.hexagonInner1}>
                <Image
                  source={require("../assets/shop.png")}
                  style={styles.image}
                ></Image>
              </View>
              <View style={styles.hexagonBefore} />
              <View style={styles.hexagonAfter} />
            </View>
            <Text style={styles.text}>Discount Shop</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  base: {
    transform: [{ rotate: "180deg" }],
    height: 150
  },

  triangle: {
    // width: 100,
    height: 100,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 180,
    borderRightWidth: 180,
    borderBottomWidth: 70,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#3c3",
    position: "absolute",
    top: -100
  },
  baseTop: {
    backgroundColor: "#3c3",
    // height: 100,
    // width: "100%"
    flex: 1
  },
  hexagon: {
    width: "60%",
    // height: "20%",
    // marginVertical: 70
    marginTop:10
  },
  hexagonInner1: {
    width: "165%",
    height: "60%",
    backgroundColor: "#3c3"
  },
  hexagonInner2: {
    width: "165%",
    height: "60%",
    backgroundColor: "#3c3",
  },
  hexagonInner3: {
    width: "165%",
    height: "60%",
    backgroundColor: "#3c3"
  },
  hexagonAfter: {
    position: "relative",
    left: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 60,
    borderLeftColor: "transparent",
    borderRightWidth: 60,
    borderRightColor: "transparent",
    borderTopWidth: 30,
    borderTopColor: "#3c3"
  },
  hexagonBefore: {
    position: "absolute",
    left: 0,
    top: -30,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 60,
    borderLeftColor: "transparent",
    borderRightWidth: 60,
    borderRightColor: "transparent",
    borderTopWidth: 30,
    borderTopColor: "#3c3",
    transform: [
      {
        rotate: "180deg"
      }
    ]
  },
  flexContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    flex: 1,
    justifyContent: "space-between",
    // backgroundColor:"gray",
    marginTop: 10,
    alignItems: "center"
  },
  text: {
    alignSelf: "center",
    fontSize: 16,
    fontFamily: "Dosis-Bold",
  },
  image: {
    width: "40%",
    height: "70%",
    marginLeft: "30%",
    marginTop: "15%",
    resizeMode: "contain"
  },
  msmeImage: {
    width: "50%",
    height: "50%",
    alignSelf: "center",
    transform: [{ rotate: "180deg" }],
    resizeMode: "contain"
  },
  imageText: {
    transform: [{ rotate: "180deg" }],
    alignSelf: "center",
    fontSize: 25,
    fontFamily: "Dosis-Bold"
  }
});
