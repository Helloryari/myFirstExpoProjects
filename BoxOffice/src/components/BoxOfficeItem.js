import React from 'react';
import Row from './Row';
import Paragraph from './ui/Paragraph';

export default function BoxOfficeItem({data}) {
    let intenIcon = 'βΊοΈ';
    const parsedRankInten = parseInt(data.rankInten, 10);
    if( parsedRankInten < 0 ) {
        intenIcon = 'π½';
    } else if ( parsedRankInten > 0 ) {
        intenIcon = 'πΌ';
    }
    return (
        <Row>
            <Paragraph>{data.rank}</Paragraph>
            <Paragraph>{intenIcon}{data.rankInten}</Paragraph>
            <Paragraph>{data.movieNm}</Paragraph>
            <Paragraph>{data.rankOldAndNew === 'NEW' ? 'π' : '' }</Paragraph>
        </Row>
    );
}