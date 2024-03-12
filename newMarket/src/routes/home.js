import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Check from "../screens/check";
import Market from "../screens/market";

const Stack = createStackNavigator();

export default function Home(){
    return<Stack.Navigator>
        <Stack.Screen name='Market' component={Market}/>
        <Stack.Screen name='Check' component={Check} />
    </Stack.Navigator>
}