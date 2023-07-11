import { EstruturaPaginaStyle } from "./style"
import Header from "./Header"
import Footer from "./Footer"
import ConteudoPaginaContainer from "./ConteudoPagina"
import ContextProviders from "../../ContextProviders"

export default function EstruturaPagina( { children } ) {
    return (
        <EstruturaPaginaStyle>
            <ContextProviders>
                <Header/>
                <ConteudoPaginaContainer>
                    { children }
                </ConteudoPaginaContainer>
                <Footer/>                   
            </ContextProviders>
        </EstruturaPaginaStyle>
    )
}