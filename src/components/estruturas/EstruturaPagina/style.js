'use client'

import styled from "styled-components";

export const EstruturaPaginaStyle = styled.body`
    width: 100vw;
    height: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

export const ConteudoPaginaContainerStyle = styled.div`
    min-height: calc(100vh - 100px);
    width:100%;
    overflow-y: scroll;
    background-color: black;

`