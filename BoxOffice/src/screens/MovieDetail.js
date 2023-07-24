import React, { useCallback, useEffect, useState } from "react";
import Paragraph from "../components/ui/Paragraph";
import Row from '../components/Row';
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { ActivityIndicator, Pressable, Text } from "react-native";
import axios from "axios";
import Link from "../components/ui/Link";
import useFetch from "../components/net/useFetch";

export default function MovieDetail( {route, navigation} ) {
    const url = 'https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json';
    
    const { data, error } = useFetch(url, {
        key: 'f9370293a9a6fc5eb217053c615ec857',
        movieCd: route.params.movieCd,
    });

    if( error ) return <Paragraph>{JSON.stringify(error)}</Paragraph>;
    if( !data ) return <ActivityIndicator />;

    const detail = data.movieInfoResult.movieInfo;

    return (
        <>
            <Row>
                <Paragraph>영화명 : { detail.movieNm }</Paragraph>
            </Row>
            <Row>
                <Paragraph>상영시간 : { detail.showTm }분</Paragraph>
            </Row>
            <Row>
                <Paragraph>개봉일 : { detail.openDt }</Paragraph>
            </Row>
            <Row>
                <Paragraph>
                    감독 : {''}
                    {detail.directors.map(director => (
                        <Link 
                            onPress={()=>{
                                navigation.navigate( 'SearchResult', {
                                    peopleNm: director.peopleNm,
                                });
                            }}
                            key={director.peopleNm}>
                            {director.peopleNm}
                        </Link>
                    ))}
                </Paragraph>
            </Row>
            <Row>
                <Paragraph>
                    출연 : {''}
                    {detail.actors.map(actor => (
                        <Link
                            onPress={()=>{
                                navigation.navigate( 'SearchResult', {
                                    peopleNm: actor.peopleNm,
                                });
                            }}
                            key={actor.peopleNm}>{actor.peopleNm}</Link>
                    ))}
                </Paragraph>
            </Row>
        </>
    );
}