import { View, Text, FlatList, Pressable } from 'react-native'
import { StyleSheet } from 'react-native';
import { useFonts, PlaywriteCU_400Regular } from '@expo-google-fonts/playwrite-cu';
import { Ionicons } from "@expo/vector-icons";
import { Image } from 'react-native';
import { useState } from 'react';
import { Modal } from 'react-native';


import CircleButtonMain from "@/components/CircleButtonMain";


export default function ProfileScreen() {
  const userStats = {
    posts: 120,
    followers: 5000,
    following: 300,
  }

  const userImage = require("../../assets/images/cats/cat1.jpg");
  const userName = "CatLover";
  const userDescription = "Just a cat lover sharing my adorable feline friends with the world! Hehehe";

  const postImages = [
    {
      postImage: require("../../assets/images/posts/post1.jpg"),
      id: 1,
    },
    {
      postImage: require("../../assets/images/posts/post2.jpg"),
      id: 2,
    },
    {
      postImage: require("../../assets/images/posts/post3.jpg"),
      id: 3,
    },
    {
      postImage: require("../../assets/images/posts/post4.jpg"),
      id: 4,
    },
    {
      postImage: require("../../assets/images/posts/post5.jpg"),
      id: 5,
    },
    {
      postImage: require("../../assets/images/posts/post6.jpg"),
      id: 6,
    },
    {
      postImage: require("../../assets/images/posts/post7.jpg"),
      id: 7,
    },
    {
      postImage: require("../../assets/images/cats/cat2.jpg"),
      id: 8,
    },
    {
      postImage: require("../../assets/images/cats/cat3.jpg"),
      id: 9,
    },
    {
      postImage: require("../../assets/images/cats/cat4.jpg"),
      id: 10,
    },
    {
      postImage: require("../../assets/images/cats/cat5.jpg"),
      id: 11,
    },
    {
      postImage: require("../../assets/images/cats/cat6.jpg"),
      id: 12,
    },
    {
      postImage: require("../../assets/images/cats/cat7.jpg"),
      id: 13,
    }
  ]

  const fontsLoaded = useFonts({
    PlaywriteCU: PlaywriteCU_400Regular,
  });

  const [selectedPost, setSelectedPost] = useState<any>(null);

  const onPressPost = (postImage: any) => {
    setSelectedPost(postImage);
  }

  const onModalClose = () => {
    setSelectedPost(null);
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={selectedPost !== null}
        onRequestClose={onModalClose}>
          <Pressable style={styles.modalBackground} onPress={onModalClose}>
            <Image source={selectedPost} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
          </Pressable>
      </Modal>
      <View style={styles.headerContainer}>
        <Ionicons name="add" size={30} style={{ color: '#fff' }} />
        <Text style={styles.headerText}>{userName}</Text>
        <Ionicons name="heart-outline" size={25} style={{ color: '#fff' }} />
      </View>
      <View style={styles.bioContainer}>
        <CircleButtonMain imageData={{ userImage }} imageSizePercentage='27%' />
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statUpperText}>{userStats.posts}</Text>
            <Text style={styles.statBottomText}>posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statUpperText}>{userStats.following}</Text>
            <Text style={styles.statBottomText}>following</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statUpperText}>{userStats.followers}</Text>
            <Text style={styles.statBottomText}>followers</Text>
          </View>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{userDescription}</Text>
      </View>
      <View style={styles.galleryContainer}>
        <FlatList
          data={postImages}
          renderItem={({ item }) => (
            <Pressable style={styles.pressableImage} onPress={() => onPressPost(item.postImage)}>
              <Image source={item.postImage} style={styles.postImage} />
            </Pressable>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          columnWrapperStyle={{ justifyContent: 'flex-start', gap: 2, marginBottom: 2, }}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1, // occupy the full free space
    backgroundColor: '#161414',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
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
  bioContainer: {
    width: '100%',
    height: 130,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c2727',
  },
  statsContainer: {
    marginLeft: 20,
    flexDirection: 'row',
    height: '100%',
    width: '60%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  stat: {
    height: 80,
    width: 60,
    alignContent: 'center',
    justifyContent: 'center',
  },
  descriptionContainer: {
    width: '100%',
    height: 40,
    paddingLeft: 14,
    backgroundColor: '#2c2727',
    alignSelf: 'center',
    marginBottom: 10
  },
  galleryContainer: {
    width: '90%',
    flex: 1, // occupy the remaining space
    alignSelf: 'center',
  },
  descriptionText: {
    color: '#fff',
    fontSize: 12,
    padding: 3,
    flexWrap: 'wrap',
  },
  statUpperText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  statBottomText: {
    color: '#fff',
    fontSize: 10,
  },
  pressableImage: {
    width: '33%',
    height: 150,
  },
  postImage: {
    width: '100%',
    height: '100%',
  },
  headerText: {
    flexWrap: 'wrap',
    color: '#ffffff',
    fontSize: 21
  },
});