import react, {useEffect,useState} from "react";
import {View, Text, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import axios from "axios";

const List = () => {

    const [companies, setCompanies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const loadDataFromApi = async() => {
        setIsLoading(true)
        await axios.get('https://fakerapi.it/api/v1/companies?_quantity=20')
        .then(result => {
            setCompanies(result.data.data);
            setIsLoading(false)
        })
        .catch(error => {
            Alert.alert("Error",error.message)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        loadDataFromApi();
    },[])

    return(
        <View style={mystyle.container}>

            {
                isLoading 
                    ? (<ActivityIndicator color='#ffffff' size='large' />) 
                    : (
                        <>
                        {
                            companies.map(company => <Text>{company.name}</Text>)
                        }
                        </>
                    )
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