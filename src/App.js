import React from "react";
import { View, Text, TextInput } from "react-native";
import Button from "./components/Button";

class App extends React.Component {
  state = {
    vName: '0',
    vAge: 1
  }

  done = () => {
    this.setState({ vName: 0 });
  }
  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          value={this.state.vName}
          onChangeText={vName => this.setState(vName)}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          value={this.state.vAge}
          onChangeText={vAge => this.setState(vAge)}
        />
        <Button done={this.done} />
      </View>
    );
  }
}

export default App;