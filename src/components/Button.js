import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";

class Button extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.increase}>
                <Text>Done</Text>
            </TouchableOpacity>
        )
    }
}

export default Button;