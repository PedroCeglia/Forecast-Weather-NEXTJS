import { EstruturaPaginaStyle, ConteudoPaginaContainerStyle } from "./style"
import Header from "./Header"
import Footer from "./Footer"

export default function EstruturaPagina( { children } ) {
    return (
        <EstruturaPaginaStyle>
            <Header/>
            <ConteudoPaginaContainerStyle>
                { children }
            </ConteudoPaginaContainerStyle>
            <Footer/>
        </EstruturaPaginaStyle>
    )
}