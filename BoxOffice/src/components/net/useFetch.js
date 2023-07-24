// swr 데이터에 대한 캐싱/재검증
// 데이터 불러오는 기능 수행 : windows.fetch, axios.get

import axios from "axios";
import useSwr, { mutate } from "swr";

function getQueryString( params = {} ) {
    const qs = [];
    for( const key in params ) {
        qs.push( `${key}=${params[key]}` );
    }
    return qs.join('&');
}

export const fetcher = function (url) {
    return axios.get(url).then(response => response.data);
};

export const prefetch = function( url, params = {} ) {
    const uri = `${url}?${getQueryString( params )}`;
    return mutate(uri, fetcher(uri));
}

export default function useFetch( url, params = undefined ) {
    return useSwr(`${url}?${getQueryString( params )}`, fetcher);
}