import React from 'react';

import { TouchableOpacity,
     View, 
     Text, 
     StyleSheet,
     Platform,
     TouchableNativeFeedback
    } from 'react-native';

const CategoryGridTitle = (props) => {
    let TouchableCmp = TouchableOpacity;
    if(Platform.OS == 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
return (
<TouchableCmp 
        style={styles.gridItem}
        onPress={props.onSelect}>
            <View style={{...styles.container,...{backgroundColor: props.color}}}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
</TouchableCmp>
);
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'

    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    }
});

export default CategoryGridTitle;