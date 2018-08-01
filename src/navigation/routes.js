import React, {Component} from 'react';

import MainHeader from '../components/common/Header';
/*
 APP PAGES
 */
import Dashboard from '../components/screens/dashboard';


// import {HEADER_COLOR} from '../constants/constants';

export const MYRoutes = {
    Dashboard: {
        screen: Dashboard,
        navigationOptions: ({navigation}) => ({
            header: <MainHeader title={'Click and Update the file'}/>,
            gesturesEnabled: false
        })
    }
};