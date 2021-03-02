import React from "react";
import { View, Text, TextInput, Image, StyleSheet } from "react-native";
import ButtonNext from "./components/Button";
import ButtonPrevious from "./components/ButtonPrevious";
const ImageURI = [
  'https://reactnative.dev/img/tiny_logo.png',
  'https://i.pinimg.com/736x/cd/fd/fe/cdfdfe1fea18045b9b41f661aad4f655--corvette-c-glass.jpg',
  'https://www.smalljp.ru/var/cars_big/288042-tm1456276875.jpg',
  'https://static.boredpanda.com/blog/wp-content/uploads/2016/01/finnish-night-sky-joni-niemela-finland-2.jpg',
  'https://ic.pics.livejournal.com/imhotype/24051864/433166/433166_original.png'
];

class App extends React.Component {
  state = {
    uri: ImageURI[0],
    count: 0,
    nextShow: true,
    previousShow: true
  }

  nextImage = () => {
    this.setState({
      uri: ImageURI[this.state.count + 1]
    });
    this.state.count = this.state.count + 1;

    if (this.state.count == 4) {
      this.state.nextShow = false;
    }
    else {
      this.state.nextShow = true;
    }
  }
  previousImage = () => {
    this.setState({
      uri: ImageURI[this.state.count - 1]
    });
    this.state.count = this.state.count - 1;

    if (this.state.count != 0) {
      this.state.previousShow = true;
    }
    else {
      this.state.previousShow = false;
    }
  }


  render() {
    return (
      <View>
        <Image
          source={{ uri: this.state.uri }}
          style={{
            width: 250,
            height: 250,
          }}
        />
        {this.state.previousShow && <ButtonPrevious previousImage={this.previousImage} />}
        {this.state.nextShow && <ButtonNext nextImage={this.nextImage} />}
      </View>
    );
  }
}

export default App;