import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import axios from "axios";
import { FlatList, Pressable, View, Text } from "react-native";
import Paragraph from "../components/ui/Paragraph";

export default function SearchResult({route}) {
    const [list, setList] = useState([]);
    useFocusEffect(
        useCallback( ()=>{
            const url = 'https://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json';
            axios.get( url, {
                params: {
                    key: 'f9370293a9a6fc5eb217053c615ec857',
                    peopleNm: route.params.peopleNm,
                }
            })
            .then(response=> setList(response.data.peopleListResult.peopleList))
            .catch(console.warn);
        }, []),
    );
    return <FlatList 
                data={list} 
                keyExtractor={item => item.peopleCd} 
                renderItem={ data => (
                    <Pressable onPress={() => {}}>
                        <View>
                            <Paragraph>{ data.item.peopleNm } ({data.item.repRoleNm})</Paragraph>
                            <Text>{ data.item.filmoNames }</Text>
                        </View>
                    </Pressable>
                )}
            />
}