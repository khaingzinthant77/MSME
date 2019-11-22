import React from "react";
import { View,Text,StyleSheet} from "react-native";

export default class DiscountShop extends React.Component{
    render(){
        return(
            <View>
                <Text>Hello</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff"
    }
})