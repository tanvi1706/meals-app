import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMeals from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoritesScreen';
import FiltersScrreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';


const defaultStackNavOptions =  {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor: '',
    },
    headerTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    // headerTintColor: 'white'
    headerTitleStyle: {
        color: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
};

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
    defaultNavigationOptions: defaultStackNavOptions
}
);

const FavNavigator = createStackNavigator({
    Favorites: FavoriteScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

const tabScreenConfig = { 
    Meals: { 
        screen: MealsNavigator, 
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>;
        }, 
        tabBarColor: Colors.primaryColor // only fr android
    }
},
Favorites: { 
    screen: FavNavigator,
    navigationOptions: {
        //tabBarLabel: 'Fav!',
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>;
        },
        tabBarColor: Colors.accentColor
    },
    
}
};

const MealsFavTabNavigator = Platform.OS === 'android'? createMaterialBottomTabNavigator(
    tabScreenConfig, 
        {   activeColor: 'white', 
            shifting: true, //barStyle works with shifting: false
            barStyle: {
                backgroundColor: Colors.primaryColor
            }
        })
 : createBottomTabNavigator(
    tabScreenConfig , {
    tabBarOptions: {
        labelStyle: {
            fontFamily: 'open-sans-bold'
        },
        activeTintColor: Colors.accentColor,  
    }
});


const filtersNavigator = createStackNavigator({
    Filters: FiltersScrreen

}, {
//     navigationOptions: {
//         drawerLabel: 'Meal Filters'
//     },
    defaultNavigationOptions: defaultStackNavOptions
});

const MainNavigator = createDrawerNavigator({
    //MealsFav: MealsFavTabNavigator,
    MealsFav: {
        screen: MealsFavTabNavigator, navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: filtersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans'
        }
    }
});


export default createAppContainer(MainNavigator);