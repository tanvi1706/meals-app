import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity} from 'react-native';


import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTitle';



const CategoriesScreen = props => {
    //console.log(props)

    const onSelectHandler = (data) => {
        props.navigation.navigate({
            routeName: 'CategoryMeals', params: {
                categoryId: data.item.id
            }
        });
    }

    const renderGridItem = (itemData) => {
        return (
        <CategoryGridTitle 
        title={itemData.item.title} 
        color={itemData.item.color}
        onSelect={onSelectHandler.bind(this, itemData)}
        />
        );
    };


    return (
        <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES} 
        renderItem={renderGridItem} 
        numColumns={2} />
    );
};

// CategoriesScreen.navigationOptions = {
//     headerTitle: 'Meal Categories',
    
// };

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;

