import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTitle';
import CustomHeaderButton from '../components/CustomHeaderButton';


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

CategoriesScreen.navigationOptions = (navData) => {
    return {
    headerTitle: 'Meal Categories',
    headerLeft: () => {
        return  <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Menu' iconName='ios-menu' onPress={()=>{
                navData.navigation.toggleDrawer();
            }}/>
        </HeaderButtons>
    }
};
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;

