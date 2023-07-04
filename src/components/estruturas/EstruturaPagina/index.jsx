import { EstruturaPaginaStyle, ConteudoPaginaContainerStyle } from "./style"
import Header from "./Header"
import Footer from "./Footer"
import ContextProviders from "../../ContextProviders"

export default function EstruturaPagina( { children } ) {
    return (
        <EstruturaPaginaStyle>
            <ContextProviders>
                <Header/>
                <ConteudoPaginaContainerStyle>
                    { children }
                </ConteudoPaginaContainerStyle>
                <Footer/>                
            </ContextProviders>
        </EstruturaPaginaStyle>
    )
}