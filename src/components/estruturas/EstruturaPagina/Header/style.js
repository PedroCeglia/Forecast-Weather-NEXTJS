'use client'

import styled from "styled-components"

export const HeaderContainerStyle = styled.header`
    position: fixed;
    top:0;
    left:0;

    width: 100%;
    height: 100px;
    background-color: rgb(25, 115, 199);

    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
        font-size: 2em;
        font-weight: bold;
        text-decoration: none;
        color: rgba( 0, 0, 0, 1 );
    }
`

export const InitialPagePadding = styled.div`
    padding-top: 100px;
`