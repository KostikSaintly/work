import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";

class ButtonNext extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.nextImage}>
                <Text>Next</Text>
            </TouchableOpacity>
        )
    }
}
export default ButtonNext;