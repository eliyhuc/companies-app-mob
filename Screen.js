import react from "react";
import {View, Text, StyleSheet} from 'react-native';

const Screen = () => {
    return(
        <View style={mystyle.container}>
            <Text style={mystyle.title}>HELLO FROM REACT NATIVE</Text>
        </View>
    )
}

const mystyle = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#00cc99',
        alignItems:'center',
        justifyContent:'center'
    },
    title: {
        fontSize:24,
        fontWeight:'800',
        color:'#ffffff'
    }
})

export default Screen;