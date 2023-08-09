'use client'

import styled from "styled-components"

export const TableCurrentForecastStyle = styled.div`
    min-width: 95%;
    margin: 10px 20px;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    border: 1px solid rgba(0,0,0,1);
    border-radius: 15px;
    background-color: ${ ( { theme } ) => theme.getThemeRGBA(.5) };
`

export const ItemTableCurrentForecastStyle = styled.div`

    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    border-left: 1px solid rgba(0,0,0,1);
    &:first-child { border-left: none; }

    h3 {
        width: 100%;
        height: 50px;

        padding: 0 10px;
        text-align: center;
        font-size: 1.05em;
        
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid rgba(0,0,0,1);
    }
    span {
        margin-top: 25px;
        height: 50px;
        font-size: 1.1em;
    }

    @media all and ( max-width : 800px ) {
        h3 {
            font-size: .9em;
        }
    }
`