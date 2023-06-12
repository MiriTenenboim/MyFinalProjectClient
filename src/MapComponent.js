import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Rectangle } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const initialBounds = {
  north: null,
  south: null,
  east: null,
  west: null,
};

function MapComponent({ apiKey }) {
  const [bounds, setBounds] = useState(initialBounds);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey
  });

  const handleRectangleComplete = (rectangle) => {
    const bounds = rectangle.getBounds();
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();

    setBounds({
      north: ne.lat(),
      south: sw.lat(),
      east: ne.lng(),
      west: sw.lng(),
    });
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: 37.7749, lng: -122.4194 }} // Default center for San Francisco
      zoom={12}
      onClick={() => setBounds(initialBounds)}
    >
      {bounds.north && bounds.south && bounds.east && bounds.west && (
        <Rectangle
          bounds={{
            north: bounds.north,
            south: bounds.south,
            east: bounds.east,
            west: bounds.west,
          }}
          editable
          draggable
          onBoundsChanged={handleRectangleComplete}
        />
      )}
    </GoogleMap>
  ) : null;
}

function A() {
  const apiKey = 'AIzaSyCU1X9-Y0ZDtEsKMl-txsAYWR8R3MJAjoE'; // Replace with your own API key

  return (
    <div>
      <h1>Google Maps Example</h1>
      <MapComponent apiKey={apiKey} />
    </div>
  );
}

export default A;
