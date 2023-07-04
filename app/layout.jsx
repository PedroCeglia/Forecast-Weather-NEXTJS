import EstruturaPagina from "@/src/components/estruturas/EstruturaPagina"
import StyledComponentsRegistry from "@/src/style/styleComponentRegistry"

export default function RootLayout( { children } ) {
    return(
        <html lang="pt-br">
            <EstruturaPagina>
                <StyledComponentsRegistry> 
                    { children }
                </StyledComponentsRegistry>
            </EstruturaPagina> 
        </html>
    )   
}