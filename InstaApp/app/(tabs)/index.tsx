import { Ionicons } from "@expo/vector-icons";
import { Button } from "@react-navigation/elements";
import { Text, View, ScrollView } from "react-native";
import { StyleSheet } from 'react-native';


import CircleButtonMain from "@/components/CircleButtonMain";
import ImageContainerMain from "@/components/ImageContainerMain";

export default function Home() {

  const userImages = [
    require("../../assets/images/cats/cat1.jpg"),
    require("../../assets/images/cats/cat2.jpg"),
    require("../../assets/images/cats/cat3.jpg"),
    require("../../assets/images/cats/cat4.jpg"),
    require("../../assets/images/cats/cat5.jpg"),
    require("../../assets/images/cats/cat6.jpg"),
    require("../../assets/images/cats/cat7.jpg"),
  ]

  const postImages = [
    require("../../assets/images/posts/post1.jpg"),
    require("../../assets/images/posts/post2.jpg"),
    require("../../assets/images/posts/post3.jpg"),
    require("../../assets/images/posts/post4.jpg"),
    require("../../assets/images/posts/post5.jpg"),
    require("../../assets/images/posts/post6.jpg"),
    require("../../assets/images/posts/post7.jpg"),
  ]

  const userNames = [
    "User123",
    "CatLover",
    "MeowMaster",
    "FelineFanatic",
    "PurrfectPics",
    "WhiskerWatcher",
    "KittyKrazy"
  ]

  const imageTitles = [
    "Adorable Cat",
    "Sleepy Kitty",
    "Playful Feline",
    "Curious Cat",
    "Fluffy Friend",
    "Mischievous Meow",
    "Cuddly Companion"
  ]

  const imageDescriptions = [
    "This cat is so cute and fluffy!",
    "Look at this sleepy kitty taking a nap.",
    "This playful feline is having so much fun!",
    "Curious cat exploring its surroundings.",
    "Fluffy friend enjoying some cuddles.",
    "Mischievous meow causing some trouble.",
    "Cuddly companion always there for you."
  ]

  const imageData = userImages.map((source, index) => ({
    userImage: source,
    postImage: postImages[index],
    userName: userNames[index],
    title: imageTitles[index],
    description: imageDescriptions[index],
  }));

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons name="add" size={30} style={{ color: '#fff' }} />
        <Text style={styles.text}>Dla Ciebie</Text>
        <Ionicons name="heart-outline" size={25} style={{ color: '#fff' }} />
      </View>
      <View style={styles.upperContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10, gap: 5 }}>
          {imageData.map((source, key) => (
            <CircleButtonMain key={key} imageData={source} imageSizePercentage='12%' />
          ))}
        </ScrollView>
      </View>
      <View style={styles.bottomContainer}>
        <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false} >
          {imageData.map((imageData, key) => (
            <ImageContainerMain key={key} imageData={imageData} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    backgroundColor: '#161414',
  },
  headerContainer: {
    height: 100,
    paddingTop: 50,
    backgroundColor: '#2c2727',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  upperContainer: {
    height: 100,
    marginBottom: 10,
    backgroundColor: '#2c2727',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161414',
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