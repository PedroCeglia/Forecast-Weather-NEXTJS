'use client'

import { GoogleAutocompleteStyledComponent } from "./style"
import { usePlacesWidget } from "react-google-autocomplete";
import { useGlobalContext } from "@/src/components/ContextProviders";
import { useThemeProvider } from "@/src/style/ThemeProvider";

export default function GoogleAutocomplete() {
    
    const { onChangeForecastPlace } = useGlobalContext()
    const { theme } = useThemeProvider()

    const { ref } = usePlacesWidget( {
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_AUTOCOMPLETE_API_KEY,
        onPlaceSelected: ( place ) => getPlaceLatLngAndAdress( place )
    } )    

    function getPlaceLatLngAndAdress ( place ) {
        if( place != null ) {
            const placeLatLngAndAdress = {
                placeName: place.formatted_address,
                lat: place.geometry.location.lat(),
                lon: place.geometry.location.lng()
            } 
            onChangeForecastPlace( placeLatLngAndAdress )
        } 
    }


    return (
        <GoogleAutocompleteStyledComponent theme={ theme } >
            <label>Escolha uma cidade !</label>
            <input ref={ ref } placeholder="digite algo" type="text"/>
        </GoogleAutocompleteStyledComponent>
    )
}