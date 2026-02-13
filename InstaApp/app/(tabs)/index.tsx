import { Ionicons } from "@expo/vector-icons";
import { Button } from "@react-navigation/elements";
import { Text, View, ScrollView } from "react-native";
import { StyleSheet } from 'react-native';


import CircleButtonMain from "@/components/CircleButtonMain";

export default function Home() {

  const imageSources = [
    require("../../assets/images/cats/cat1.jpg"),
    require("../../assets/images/cats/cat2.jpg"),
    require("../../assets/images/cats/cat3.jpg"),
    require("../../assets/images/cats/cat4.jpg"),
    require("../../assets/images/cats/cat5.jpg"),
    require("../../assets/images/cats/cat6.jpg"),
    require("../../assets/images/cats/cat7.jpg"),
  ]

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons name="add" size={30} style={styles.upperButton} />
        <Text style={styles.text}>Dla Ciebie</Text>
        <Ionicons name="heart-outline" size={25} style={styles.upperButton} />
      </View>
      <View style={styles.upperContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {imageSources.map((source) => (
            <CircleButtonMain imageSource={source} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.text}>Welcome to the InstaApp!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 20,
    flexDirection: 'column',
    backgroundColor: '#161414',
  },
  headerContainer: {
    height: 100,
    paddingTop: 50,
    backgroundColor: '#161414',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  upperContainer: {
    height: 100,
    marginBottom: 10,
    backgroundColor: '#b9bee9',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bd206e',
  },
  upperButton: {
    color: '#fff',
  },
  roundButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0e25f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 21,
  },
});