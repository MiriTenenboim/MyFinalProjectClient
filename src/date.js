import React, { useEffect, useRef } from 'react';

const Map = () => {
  const mapRef = useRef(null);
  const markers = [
    { lat: 32.0539436, lng: 34.96381 }, // Point A
    { lat: 32.08564, lng: 34.9644765 }, // Point B
    { lat: 32.053875, lng: 34.97381 }, // Point C
    { lat: 32.063875, lng: 34.87381 }
    // Add more points here as needed
  ];

  useEffect(() => {
    if (typeof window.google !== 'undefined' && typeof window.google.maps !== 'undefined') {
      // Initialize the map
      const map = new window.google.maps.Map(mapRef.current, {
        center: markers[0], // Fix: Use the position instead of the entire marker object
        zoom: 10,
      });

      const directionsService = new window.google.maps.DirectionsService();

      // Define the request to get directions
      const request = {
        origin: markers[0],
        destination: markers[markers.length - 1],
        waypoints: markers.slice(1, -1).map((marker) => ({
          location: marker,
          stopover: true,
        })),
        travelMode: window.google.maps.TravelMode.WALKING,
      };

      // Request the directions from the Directions Service
      directionsService.route(request, (response, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          // Display the directions on the map
          const directionsRenderer = new window.google.maps.DirectionsRenderer();
          directionsRenderer.setMap(map);
          directionsRenderer.setDirections(response);
        } else {
          console.error('Error:', status);
        }
      });
    }
  }, []);

  return <div ref={mapRef} style={{ height: '500px', width: '100%' }} />;
};

export default Map;
