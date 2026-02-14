import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, Pressable } from 'react-native';
import { Image } from 'react-native';

type Props = {
    imageData: {
        userImage: any,
    };
    imageSizePercentage?: any;
}

export default function CircleButtonMain({ imageData, imageSizePercentage }: Props) {
    return (
        <View style={[styles.roundButtonContainer, { width: imageSizePercentage }]}>
            <Pressable style={styles.roundButton} onPress={() => alert('Circle Button Pressed!')}>
                <Image style={styles.roundImage} source={imageData.userImage} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    roundButtonContainer: {
        aspectRatio: 1,
        borderRadius: 9999,
        borderColor: '#791515',
        borderWidth: 2.5,
        overflow: 'hidden',
    },
    roundButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    roundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    }
});