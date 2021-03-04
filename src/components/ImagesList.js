import React from 'react';
import { FlatList, View, Text } from 'react-native';
import Categories from './Categories';
import ImageItem from './ImageItem';

class ImageList extends React.Component {
    renderItem = ({ item }) => {
        return (
            <ImageItem {...item} />
        )
    }

    render() {
        const { data, activeCategory, changeCategory } = this.props;

        const category = data.find((category)=>category.id === activeCategory );
        const images = data.reduce((prev, category)=>{
            category.images.forEach((image)=>{
                if (!prev.find((item)=>item.id === image.id )) {
                    prev.push(image)
                } 
            })
            return prev;
        }, [])

        return (
            <FlatList
                data={category? category.images : images}
                renderItem={this.renderItem}
                keyExtractor={(image)=>String(image.id)}
                ListHeaderComponent={
                <Categories
                    categories={data} 
                    activeCategory={activeCategory} 
                    changeCategory={changeCategory} 
                />}
                ListEmptyComponent={<View style={{ height: 300, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Ничего не найдено :(</Text>
                </View>}
            />
        )
    }
}
export default ImageList;