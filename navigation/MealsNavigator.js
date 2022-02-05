import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';



import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMeals from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator(
    {
    Categories: { 
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories'
        }
    },
    CategoryMeals: { 
        screen: CategoryMeals,
        // navigationOptions: {
        //     headerStyle: {
        //         backgroundColor: Platform.OS === 'android' ? Colors.primaryColor: '',
        //     },
        //     // headerTintColor: 'white'
        //     headerTitleStyle: {
        //         color: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        //     }
        // }
    },
    MealDetail: MealDetailScreen
},
{   //mode: 'modal',
    //initialRouteName: 'Categories',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor: '',
        },
        // headerTintColor: 'white'
        headerTitleStyle: {
            color: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        }
    }
}
);

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: { screen: MealsNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>;
        }
    }},
    Favorites: { 
        screen: FavoriteScreen,
        navigationOptions: {
            //tabBarLabel: 'Fav!',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>;
            }
        }
    }
},{
    tabBarOptions: {
        activeTintColor: Colors.accentColor,
        
    }
});


export default createAppContainer(MealsFavTabNavigator);