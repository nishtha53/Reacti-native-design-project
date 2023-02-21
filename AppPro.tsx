import React from "react";

import {View,Text,StyleSheet,useColorScheme} from "react-native";

function AppPro():JSX.Element{
    const isDarkMode = useColorScheme() === 'dark';

    return(
        <View style={styles.container}> 
            <Text style={isDarkMode?styles.whitetext : styles.darktext}>Hello!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
    },
    whitetext:{
        color:'#FFFFFF', 
        fontWeight:'bold',
        fontSize:20,
    },
    darktext:{
        color:'#000000',
        fontSize:20,
    }
})

export default AppPro;