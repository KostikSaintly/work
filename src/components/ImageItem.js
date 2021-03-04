import React from 'react';
import { View, Text, Image } from 'react-native';

class ImageItem extends React.Component {
    render() {
        const { title, url } = this.props;

        return (
            <View>
                <Image
                    style={{
                        width: 400,
                        height: 400
                    }}
                    source={{
                        uri: url
                    }}
                />
                <Text>{title}</Text>
            </View>
        )
    }
}

export default ImageItem;