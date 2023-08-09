'use client'

import styled from "styled-components"

export const ArticleCurrentForecast = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    background-color: ${ ( { theme } ) => theme.articleForecastColor};

    width: 55vw;
    margin-left: 10px;
    margin-bottom: 20px;
    border-radius: 15px;

    @media all and ( max-width : 800px ) {
        width: 90vw;
        margin-left: 0;
    }
`

export const IntroCurrentForecast = styled.div`
    width: 100%;
    padding: 10px 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 70px;
        height: 70px;
    }
`

export const PlaceDataForecast = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    h2 {
        font-size: 2em;
    }

    span {
        font-size: 1.2em;
    }

`
