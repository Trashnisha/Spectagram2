import {createDrawerNavigator} from "@react-navigation/drawer";
import Profile from "../screens/Profile";
import TabNavigator from "../screens/TabNavigator";
import React from 'react';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="home" component={TabNavigator}/>
            <Drawer.Screen name="profile" component={Profile}/>
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;