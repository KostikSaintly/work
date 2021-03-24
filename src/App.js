import React from 'react';
import ImageList from './components/ImagesList';
import { categoriesImage } from "./data"

class App extends React.Component {
  state = {
    categoriesImage,
    activeCategory: undefined
  }

  changeCategory = (activeCategory) => {
    this.setState({ activeCategory });
  }


  render() {
    const { categoriesImage, activeCategory } = this.state;

    return (
      <ImageList
        data={categoriesImage}
        activeCategory={activeCategory}
        changeCategory={this.changeCategory}
      />
    );
  }
}

export default App;
