'use client'

import styled  from "styled-components"

export const ConteudoPaginaContainerStyle = styled.div`
    min-height: calc(100vh - 100px);
    width: 100%;
    background-color: ${ ({ theme }) => theme.mainColor };
    color: ${ ( { theme } ) => theme.textColor};
    padding-top: 20px;
`