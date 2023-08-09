'use client'

import styled from "styled-components"

export const ItemForecastWeekStyle = styled.div`
    width: calc( 100% - 20px);
    margin-bottom: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${ ( { theme } ) => theme.type==="dark" ? theme.getThemeRGBA( .5 ) : theme.getThemeRGBA( .8 ) };
    border: 1px solid ${ ( { theme } ) => theme.textColor };
    border-radius: 10px;

    text-align: center;

    span {
        height: 40px;
        font-size: 1.05em;
        padding: 5px 0;
    }

    img {
        width: 30px;
        height: 30px;
        margin: 5px 0;
    }
` 

export const ItemForecastWeekTableRow = styled.div`
    width: 100%;

    border-left: 1px solid ${ ( { theme } ) => theme.textColor };
    &:first-child{ border-left: none; }

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    
`

export const ItemForecastWeekTableHeader = styled.h4`
        border-bottom: 1px solid ${ ( { theme } ) => theme.textColor };
        font-size: 1em;
        width: 100%;
        padding: 5px 0;

        height: 40px;
`
