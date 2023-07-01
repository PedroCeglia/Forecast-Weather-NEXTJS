import EstruturaPagina from "@/src/components/estruturas/EstruturaPagina"
import Globals from "@/src/style/globals"
import StyledComponentsRegistry from "@/src/style/styleComponentRegistry"

export default function RootLayout( { children } ) {
    return(
        <html lang="pt-br">
            <EstruturaPagina>
                <StyledComponentsRegistry> 
                    <Globals/>
                    { children }
                </StyledComponentsRegistry>
            </EstruturaPagina> 
        </html>
    )   
}