import react, {useEffect,useState} from "react";
import {View, Text, StyleSheet, Alert} from 'react-native';
import axios from "axios";

const List = () => {

    const [companies, setCompanies] = useState([]);

    const loadDataFromApi = async() => {
        await axios.get('https://fakerapi.it/api/v1/companies?_quantity=20')
        .then(result => {
            setCompanies(result.data.data);
            //console.log(result.data.data);
        })
        .catch(error => {
            Alert.alert("Error",error.message)
        })
    }

    useEffect(() => {
        loadDataFromApi();
    },[])

    return(
        <View style={mystyle.container}>
            {
                companies.map(company => <Text>{company.name}</Text>)
            }
        </View>
    )
}

const mystyle = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#99cc00',
        alignItems:'center',
        justifyContent:'center'
    },
    title: {
        fontSize:24,
        fontWeight:'800',
        color:'#ffffff'
    }
})

export default List;