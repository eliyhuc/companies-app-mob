import react, { useEffect, useState } from "react";
import { View, 
    Text, 
    StyleSheet, 
    ScrollView,
    Alert, 
    ActivityIndicator } from "react-native";
import axios from "axios";
import CompanyItem from "./CompanyItem";

const List = () => {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadDataFromApi = async () => {
    setIsLoading(true);
    await axios
      .get("https://fakerapi.it/api/v1/companies?_quantity=20")
      .then((result) => {
        setCompanies(result.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    loadDataFromApi();
  }, []);

  return (
    <ScrollView>
    <View style={mystyle.container}>
      {isLoading ? (
        <ActivityIndicator color="#ffffff" size="large" />
      ) : (
        <>
          {companies.map((company) => (
            <CompanyItem key={company.id} company={company} />
          ))}
        </>
      )}
    </View>
    </ScrollView>
  );
};

const mystyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00cc99",
    padding:30
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#ffffff",
  },
});

export default List;
