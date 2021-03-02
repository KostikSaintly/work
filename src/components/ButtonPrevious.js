import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";

class ButtonPrevious extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.previousImage}>
                <Text>Previous</Text>
            </TouchableOpacity>
        )
    }
}

export default ButtonPrevious;