import React from 'react';
import { FlatList, Image, View, Text } from 'react-native';

class App extends React.Component {
  state = {
    images: [
      {
        key: 0,
        url: 'https://reactnative.dev/img/tiny_logo.png',
        title: 'rn'
      },
      {
        key: 1,
        url: 'https://i.pinimg.com/736x/cd/fd/fe/cdfdfe1fea18045b9b41f661aad4f655--corvette-c-glass.jpg',
        title: 'car'
      },
      {
        key: 2,
        url: 'https://www.smalljp.ru/var/cars_big/288042-tm1456276875.jpg',
        title: 'moto'
      },
      {
        key: 3,
        url: 'https://static.boredpanda.com/blog/wp-content/uploads/2016/01/finnish-night-sky-joni-niemela-finland-2.jpg',
        title: 'night'
      },
      {
        key: 4,
        url: 'https://ic.pics.livejournal.com/imhotype/24051864/433166/433166_original.png',
        title: 'pepe'
      }
    ]
  };


  render() {
    const { images } = this.state;

    return (
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <View>
            <Image
              style={{
                width: 400,
                height: 400,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1
              }}
              source={{
                uri: item.url
              }}
            />
            <Text style={{
              fontSize: 40,
              textAlign: "center",
              paddingBottom: 10
            }}
            >
              {item.title}
            </Text>
          </View>
        )}
      />

    );
  }
}

export default App;
