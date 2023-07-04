import { HeaderContainerStyle, InitialPagePadding } from "./style"
import GoogleAutocomplete from "./GoogleAutocomplete"
import Link from "next/link"

export default function Header() {

    return (
        <>
            <HeaderContainerStyle>
                <Link href="/">Forecast Weather</Link>
                <GoogleAutocomplete />
            </HeaderContainerStyle>      
            <InitialPagePadding />  
        </>

    )
}