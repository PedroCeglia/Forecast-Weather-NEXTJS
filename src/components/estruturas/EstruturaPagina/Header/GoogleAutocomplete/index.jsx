'use client'

import { GoogleAutocompleteStyledComponent } from "./style"
import { usePlacesWidget } from "react-google-autocomplete";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/src/components/ContextProviders";
import { useThemeProvider } from "@/src/style/ThemeProvider";

export default function GoogleAutocomplete() {
    
    const { setForecast } = useGlobalContext()
    const { theme } = useThemeProvider()
    const router = useRouter()

    const { ref } = usePlacesWidget( {
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_AUTOCOMPLETE_API_KEY,
        onPlaceSelected: ( place ) => getPlaceLatLngAndAdress( place )
    } )    

    function getPlaceLatLngAndAdress ( place ) {
        if( place != null ) {
            const placeLatLngAndAdress = {
                placeName: place.formatted_address,
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            } 
            setForecast( placeLatLngAndAdress )
            changeToForecastRoute( placeLatLngAndAdress )
        } 
    }

    function changeToForecastRoute( placeLatLngAndAdress ) {
        if( placeLatLngAndAdress != null) {
            const pathName = `/${ placeLatLngAndAdress.lat }/${ placeLatLngAndAdress.lng }`
            router.push( pathName, placeLatLngAndAdress )            
        }
    }

    return (
        <GoogleAutocompleteStyledComponent theme={ theme }>
            <label>Escolha uma cidade !</label>
            <input ref={ ref } placeholder="digite algo" type="text" />
        </GoogleAutocompleteStyledComponent>
    )
}