import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BoxOffice from "../screens/BoxOffice";
import MovieDetail from "../screens/MovieDetail";
import SearchResult from "../screens/SearchResult";


const Stack = createNativeStackNavigator();

export default function DefaultStackNavigator() {
    return (
        <>
            <Stack.Navigator initialRouteName="BoxOffice">
                <Stack.Screen name="MovieDetail" component={MovieDetail} />
                <Stack.Screen name="BoxOffice" component={BoxOffice} />
                <Stack.Screen name="SearchResult" component={SearchResult} />
            </Stack.Navigator>
        </>
    );
}