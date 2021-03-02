import React from "react";
import { View, Text, TextInput, Image, StyleSheet, ScrollView, FlatList } from "react-native";
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
    images: [
      {
        url: 'https://reactnative.dev/img/tiny_logo.png',
        title: 'rn'
      },
      {
        url: 'https://i.pinimg.com/736x/cd/fd/fe/cdfdfe1fea18045b9b41f661aad4f655--corvette-c-glass.jpg',
        title: 'car'
      },
      {
        url: 'https://www.smalljp.ru/var/cars_big/288042-tm1456276875.jpg',
        title: 'moto'
      },
      {
        url: 'https://static.boredpanda.com/blog/wp-content/uploads/2016/01/finnish-night-sky-joni-niemela-finland-2.jpg',
        title: 'night'
      },
      {
        url: 'https://ic.pics.livejournal.com/imhotype/24051864/433166/433166_original.png',
        tutle: 'pepe'
      }
    ],
  }


  render() {
    const { images } = this.state;

    return (
      <FlatList
        data={images}
        renderItem ={images}
        /*{test.map((url) => {
          return (
            <View key={url}>
              <Image
                source={{ uri: url }}
                style={{
                  width: 250,
                  height: 250,
                }}
              />
            </View>
          )
        })}*/
      />
    );
  }
}

export default App;

/*{images.url.map((url) => {
  return (
    <View key={url}>
      <Image
        source={{ uri: url }}
        style={{
          width: 250,
          height: 250,
        }}
      />
    </View>
  )
})}
renderItem={ ({images}) => (
    <Image source={images.src} style={{
      width:260,
      height:300,
      borderWidth:2,
      borderColor:'#d35647',
      resizeMode:'contain',
      margin:8
    }}></Image>

    uri: ImageURI[0],
    count: 0,
    nextShow: true,
    previousShow: true
  }

  nextImage = () => {
    this.setState({
      uri: ImageURI[this.state.count + 1]
    });
    this.setState({
      count: this.state.count + 1
    });
    if (this.state.count >= 4) {
      this.setState({
        nextShow: false
      });
    }
    else {
      this.setState({
        nextShow: true
      });
    }
    console.log(this.state.nextShow);
  }

  previousImage = () => {
    this.setState({
      uri: ImageURI[this.state.count - 1]
    });
    this.setState({
      count: this.state.count - 1
    });

    if (this.state.count <= 0) {
      this.setState({
        previousShow: false
      });
    }
    else {
      this.setState({
        previousShow: true
      });
    }
  }*/