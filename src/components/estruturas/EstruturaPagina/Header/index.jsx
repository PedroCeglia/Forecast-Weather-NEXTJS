'use client'
import { HeaderContainerStyle } from "./style"
import GoogleAutocomplete from "./GoogleAutocomplete"

export default function Header() {

    function setSearchPlace( place ) {
        console.log( place )
    }

    return (
        <HeaderContainerStyle>
            <h1>Forecast Weather</h1>
            <GoogleAutocomplete setSearchPlace={ setSearchPlace }/>
        </HeaderContainerStyle>
    )
}