import React from "react";
import { View, Text } from "react-native";
import Button from ".src/components/Button";

class App extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center"
        }}
      >
        <Button />
      </View>
    )
  }
}
export default App;