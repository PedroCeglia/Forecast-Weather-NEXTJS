import EstruturaPagina from "@/src/components/estruturas/EstruturaPagina"
import StyleSettigns from "@/src/style/StyleSettigns"

export default function RootLayout( { children } ) {
    return(
        <html lang="pt-br">
            <body>
                <StyleSettigns>
                    <EstruturaPagina>
                        { children }
                    </EstruturaPagina>                      
                </StyleSettigns>
            </body>
        </html>
    )   
}