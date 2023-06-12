import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, InfoWindow, LoadScript } from '@react-google-maps/api';
import './map1.css';
import NewPoint from './NewPoint';

const containerStyle = {
    width: '100%',
    height: '600px'
};

const initialCenter = {
    lat: -37.8136,
    lng: 144.9631
};

function Map() {
    const [marker, setMarker] = useState(null);
    const [address, setAddress] = useState(null);
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const [center, setCenter] = useState(initialCenter);

    useEffect(() => {
        navigator.geolocation.watchPosition(
            position => setCenter({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }),
            error => console.log(error),
            { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 }
        );
    }, []);

    const handleMapClick = (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        setMarker({ lat, lng });
        getAddress(lat, lng);
    };

    const getAddress = (lat, lng) => {
        if (typeof window !== 'undefined' && typeof window.google !== 'undefined') {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ location: { lat, lng } }, (results, status) => {
                if (status === 'OK') {
                    if (results[0]) {
                        setAddress(results[0].formatted_address);
                        for (let i = 0; i < results[0].address_components.length; i++) {
                            const component = results[0].address_components[i];
                            if (component.types.includes('locality')) {
                                setCity(component.long_name);
                            }
                            if (component.types.includes('country')) {
                                setCountry(component.long_name);
                            }
                        }
                    }
                } else {
                    console.log('Geocode failed: ', status);
                }
            });
        }
    };

    function AddPoint() {
        <NewPoint point={marker} />
    }

    return (
        <>
            <LoadScript
                googleMapsApiKey='AIzaSyBKw6QrWbtZR8Gde5NuRqDzmuB4izPuf_Y'//{process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    initialCenter={initialCenter}
                    zoom={17}
                    onClick={handleMapClick}
                >
                    {marker && (
                        // icon={"./person-walking-medium-skin-tone_1f6b6-1f3fd.png"}
                        // icon={"../public/favicon.ico"}               
                        <Marker position={marker} >
                            <InfoWindow position={marker}>
                                <div id='div1'>

                                    {address && <span>{address.split(',')[0]}</span>}
                                    <br />
                                    {city && country && < span > {city} , {country}</span>}
                                    <br />
                                    <span>__________________________</span>
                                    <br />
                                    <span>{marker.lat.toFixed(6)} , {marker.lng.toFixed(6)}</span>
                                    <br />
                                    <button onClick={AddPoint}>לסימון הנקודה כיעד</button>
                                </div>
                            </InfoWindow>
                        </Marker>
                    )}
                </GoogleMap>
            </LoadScript >
        </>
    );
}

export default Map;
