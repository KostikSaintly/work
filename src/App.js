import React from "react";
import {View} from "react-native";
import Button from ".components/Button";

class App extends React.Component{
  render(){
      return (
        <View
          style = {{
            flex:1,
            justifyContent: "center",
            alignContent: "center"
          }}
          >
          <Button/>
        </View>
    )
  }
}
export default App;