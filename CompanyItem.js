import react from "react";
import {View, Text, StyleSheet} from 'react-native'
import geodist from 'geodist'

const CompanyItem = ({company}) => {





    return(
        <View style={styles.row}>
            <Text style={styles.header}>COMPANY</Text>
            <Text style={styles.company_name}>{company.name}</Text>
            <Text>{company.email}</Text>
            <Text style={styles.country}>{company.country}</Text>

            <View style={styles.contact_container}>
                <Text style={styles.header}>CONTACT</Text>
                <Text style={styles.country}>{company.contact.firstname} {company.contact.lastname}</Text>
                <Text>{company.contact.email}</Text>
                <Text>{company.contact.phone}</Text>
            </View>

            <Text style={styles.header}>ADDRESSES ({company.addresses.length})</Text>

            {
                company.addresses.map(address => (
                    <View style={styles.add} key={address.street}>
                        <View>
                            <Text>{address.city}</Text>
                            <Text>{address.street}</Text>
                            <Text style={styles.country}>{address.country}</Text>
                        </View>
                        <View>
                            <Text style={styles.country}>
                                {
                                   (geodist({lat: 31.25089230553396, lon: 34.790930842722624}, {lat: address.latitude, lon: address.longitude}) * 1.6).toFixed(0)
                                } km
                            </Text>
                        </View>
                    </View>
                ))
            }

        </View>
    )
}

const styles = StyleSheet.create({
    add:{
        marginVertical:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    contact_container:{
        width:'100%',
        padding:10,
        marginVertical:12,
        borderRadius:12,
        backgroundColor:'#DFF7F1'
    },
    header: {
        fontSize:10,
        marginVertical:5,
        fontWeight:'800'
    },
    country: {
        fontSize:17,
        fontWeight:'500'
    },
    company_name: {
        fontSize:18,
        fontWeight:'700'
    },
    row: {
        width:'100%',
        backgroundColor:'#ffffff',
        borderRadius:12,
        padding:20,
        marginBottom:12,

    }
})

export default CompanyItem