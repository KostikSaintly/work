import React from "react";
import { TouchableOpacity } from "react-native";

class Button extends React.Component{
    render(){
        return(
            <TouchableOpacity>
                <Text>Press me</Text>
            </TouchableOpacity>
        )
    }
}

export default Button;