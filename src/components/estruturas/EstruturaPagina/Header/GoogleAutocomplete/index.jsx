'use client'

import { GoogleAutocompleteStyledComponent } from "./style"
import { usePlacesWidget } from "react-google-autocomplete";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/src/components/ContextProviders";

export default function GoogleAutocomplete() {
    
    const apiKeyGoogleAutocomplete = process.env.NEXT_PUBLIC_GOOGLE_AUTOCOMPLETE_API_KEY

    const { forecast, setForecast } = useGlobalContext()
    

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

    const router = useRouter()
    function changeToForecastRoute( placeLatLngAndAdress ) {
        if( placeLatLngAndAdress != null) {
            const pathName = `/${ placeLatLngAndAdress.lat }/${ placeLatLngAndAdress.lng }`
            router.push(pathName, placeLatLngAndAdress )            
        }
    }

    const { ref } = usePlacesWidget( {
        apiKey: apiKeyGoogleAutocomplete,
        onPlaceSelected: ( place ) => getPlaceLatLngAndAdress( place )
    } )


    return (
        <GoogleAutocompleteStyledComponent>
            <span>Escolha uma cidade !</span>
            <input ref={ ref } type="text" />
        </GoogleAutocompleteStyledComponent>
    )
}