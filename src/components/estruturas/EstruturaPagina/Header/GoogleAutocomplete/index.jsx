import { GoogleAutocompleteStyledComponent } from "./style"
import { usePlacesWidget } from "react-google-autocomplete";

export default function GoogleAutocomplete( { setSearchPlace } ) {
    
    const apiKeyGoogleAutocomplete = process.env.NEXT_PUBLIC_GOOGLE_AUTOCOMPLETE_API_KEY

    function getPlaceLatLngAndAdress ( place ) {
        if( place != null ) {
            setSearchPlace( {
                placeName: place.formatted_address,
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            } )
        }
    }

    const { ref } = usePlacesWidget( {
        apiKey: apiKeyGoogleAutocomplete,
        onPlaceSelected: ( place ) => getPlaceLatLngAndAdress( place )
    } )


    return (
        <GoogleAutocompleteStyledComponent>
            <input ref={ ref } type="text" />
        </GoogleAutocompleteStyledComponent>
    )
}