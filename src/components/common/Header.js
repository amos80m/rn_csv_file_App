import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {MenueActions} from '../../utilities'
import {getData} from '../../servicies/index'

    export const MainHeader = (props) => {
        return (
            <View style={styles.wrap}>
             <Text style={styles.mainTitle}>{props.title}</Text>
             <TouchableOpacity style={styles.icon} onPress={() => getData('download',{},'GET')}>
                <Icon name="download" size={30} color="#900" />
             </TouchableOpacity>
            </View>
        );
    }


const styles = {
    wrap: {
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingBottom:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    icon: {
        margin: 0, padding: 0,
        // marginLeft: 15,
        flex:0.3   
    },
    mainTitle: {
        // flex:0.7,
        backgroundColor: 'transparent',
        color: "#999", alignSelf: 'center',
        fontWeight: '500',
        fontSize: 20,
        padding: 0,
        margin: 0
    }
}

export default MainHeader;
