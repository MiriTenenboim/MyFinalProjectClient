import React from 'react';
import { GoogleMap, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
};

const MapContainer = () => {
  const [directions, setDirections] = React.useState(null);

  const directionsOptions = {
    destination: 'San Francisco, CA',
    origin: 'Los Angeles, CA',
    travelMode: 'WALKING',
  };

  const directionsCallback = (response) => {
    if (response !== null) {
      if (response.status === 'OK') {
        setDirections(response);
      } else {
        console.log('Directions request failed:', response);
      }
    }
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={20}
    >
      {directions && <DirectionsRenderer directions={directions} />}
      <DirectionsService
        options={directionsOptions}
        callback={directionsCallback}
      />
    </GoogleMap>
  );
};

export default MapContainer;
