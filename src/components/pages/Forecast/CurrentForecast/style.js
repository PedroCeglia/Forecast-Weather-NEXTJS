'use client'

import styled from "styled-components"

export const ArticleCurrentForecast = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    background-color: ${ ( { theme } ) => theme.articleForecastColor};

    width: 60vw;
`

export const IntroCurrentForecast = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
        width: 50px;
        height: 50px;
    }
`

export const PlaceDataForecast = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    h2 {
        font-size: large;
    }

    span {
        font-size: medium;
    }

`