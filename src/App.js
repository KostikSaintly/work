import React from "react";
import { View, Text } from "react-native";
import Button from ".src/components/Button";

class App extends React.Component {
  state = {
    count: 0
  }
  
  increase = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center"
        }}
      >
        <Text>{this.state.count}</Text>
        <Button increase={this.increase} />
      </View>
    )
  }
}
export default App;