import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BoxOfficeItem from '../components/BoxOfficeItem';
import useFetch, { prefetch } from '../components/net/useFetch';
import Paragraph from '../components/ui/Paragraph';
import { ActivityIndicator } from 'react-native';

export default function BoxOffice() {
    const url = 'https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';
    const { data, error } = useFetch(url, {
        key: 'f9370293a9a6fc5eb217053c615ec857',
        targetDt: '20230716',
    });

    useEffect( () => {
        if( !data ) return;
        const ranks = data?.boxOfficeResult?.dailyBoxOfficeList || [];

        ( async function() {
            for( const rank of ranks ) {
                await prefetch(
                    'https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json',
                    {
                        key: 'f9370293a9a6fc5eb217053c615ec857',
                        movieCd: rank.movieCd,
                    },
                );
            }
        } )();
    }, [data]);

    if( error ) return <Paragraph>{JSON.stringify(error)}</Paragraph>;
    if( !data ) return <ActivityIndicator />;

    const ranks = data?.boxOfficeResult?.dailyBoxOfficeList || [];

    return (
        <>
            {ranks.map( item => (
                <BoxOfficeItem key={item.rnum} data={item} />
            ))}

        </>
    )
}