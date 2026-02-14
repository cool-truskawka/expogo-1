import { Image, Text, StyleSheet, View } from "react-native";


type Props = {
    imageData: {
        postImage: any,
        title: string,
        description: string,
    }
    containerHeight?: any,
    containerWidth?: any,
}

export default function ImageContainerProfile({ imageData, containerHeight, containerWidth }: Props) {
    return (
        <View style={[styles.imageContainer, { height: containerHeight, }]}>
            <View style={styles.titleContainer}>
                <Image style={styles.titleUserImage} source={imageData.userImage} />
                <View style={{ marginLeft: 15 }}>
                    <Text style={styles.userText}> {imageData.userName} </Text>
                    <Text style={styles.textTitle}> {imageData.title} </Text>
                </View>
            </View>
            <Image style={styles.image} source={imageData.postImage} />
            <View style={styles.descriptionContainer}>
                <Text style={styles.textDescription}> {imageData.description} </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: '#293033',
        height: 500,
        borderColor: '#791515',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 400,
        resizeMode: 'cover',
    },
    titleContainer: {
        height: 35,
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 7,
    },
    titleUserImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 5,
        marginTop: 2.5,
        borderColor: '#1d1b1b',
        borderWidth: 1.5,
    },
    userText: {
        fontSize: 10,
        color: '#c2c0c0',
        paddingTop: 1
    },
    textTitle: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
    },
    descriptionContainer: {
        height: 60,
        padding: 5,
        marginTop: 5,
    },
    textDescription: {
        fontSize: 14,
        color: '#fff',
    }
});