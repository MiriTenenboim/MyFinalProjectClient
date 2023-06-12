// import React, { useEffect, useState } from 'react';
// import { GoogleMap, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
// import { useLocation } from 'react-router';

// export default function ShowRoute() {
//   const location = useLocation();

//   const [map, setMap] = useState(null);
//   const [directions, setDirections] = useState(null);

//   const onLoad = (map) => {
//     setMap(map);
//   };

//   debugger
//   const points = location.state.points;
//   const lengthPoints = points.length - 1;
//   const origin = { lat: points[0].x, lng: points[0].y }; // Example: New York City
//   const destination = { lat: points[lengthPoints].x, lng: points[lengthPoints].y }; // Example: Los Angeles
//   const [wayPoints, setWayPoints] = useState([{}]);
//   // { location: { lat: 32.048803, lng: 34.956089 }, stopover: true }, // Example: Chicago
//   // Add more waypoints if needed

//   const newWayPoints = [];

//   for (let index = 1; index < lengthPoints; index++) {
//     newWayPoints.push({
//       location: { lat: points[index].x, lng: points[index].y },
//       stopover: true
//     });
//   }

//   setWayPoints(prevWayPoints => [...prevWayPoints, ...newWayPoints]);

//   // for (let index = 0; index < lengthPoints; index++) {
//   //   // setWayPoints(...wayPoints, { location: { lat: points[index].x, lng: points[index].y }, stopover: true })
//   //   setWayPoints(prevWayPoints => [
//   //     ...prevWayPoints,
//   //     {
//   //       location: { lat: points[index].x, lng: points[index].y },
//   //       stopover: true
//   //     }
//   //   ]);
//   // }

//   const renderDirections = (directions) => {
//     setDirections(directions);
//   };

//   return (
//     <GoogleMap
//       mapContainerStyle={{ height: '400px', width: '100%' }}
//       zoom={8}
//       center={origin}
//       onLoad={onLoad}
//     >
//       {directions && <DirectionsRenderer directions={directions} />}
//       <DirectionsService
//         options={{
//           destination: destination,
//           origin: origin,
//           wayPoints: wayPoints,
//           travelMode: 'WALKING',
//         }}
//         callback={renderDirections}
//       />
//     </GoogleMap>
//   );
// }

// // import React, { useEffect, useState } from 'react';
// // import { GoogleMap, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

// // export default function MapContainer() {
// //   const [map, setMap] = useState(null);
// //   const [directions, setDirections] = useState(null);
// //   const [origin, setOrigin] = useState(null);
// //   const [destination, setDestination] = useState(null);

// //   const onLoad = (map) => {
// //     setMap(map);
// //   };

// //   useEffect(() => {
// //     const onSuccess = (position) => {
// //       const { latitude, longitude } = position.coords;
// //       setOrigin({ lat: latitude, lng: longitude });
// //     };

// //     const onError = (error) => {
// //       console.log('Error retrieving location:', error);
// //     };

// //     if (navigator.geolocation) {
// //       navigator.geolocation.getCurrentPosition(onSuccess, onError);
// //     } else {
// //       console.log('Geolocation is not supported by this browser.');
// //     }
// //   }, []);

// //   useEffect(() => {
// //     if (origin && destination) {
// //       const waypoints = [
// //         { location: origin, stopover: true },
// //         // Add more waypoints if needed
// //       ];

// //       const renderDirections = (directions) => {
// //         setDirections(directions);
// //       };

// //       const directionsOptions = {
// //         destination: destination,
// //         origin: origin,
// //         waypoints: waypoints,
// //         travelMode: 'WALKING',
// //       };

// //       const directionsService = new window.google.maps.DirectionsService();
// //       directionsService.route(directionsOptions, renderDirections);

// //       // Clean up the map and directions service when the component unmounts
// //       return () => {
// //         setMap(null);
// //         setDirections(null);
// //       };
// //     }
// //   }, [origin, destination]);

// //   const handleMapClick = (event) => {
// //     setDestination({
// //       lat: event.latLng.lat(),
// //       lng: event.latLng.lng(),
// //     });
// //   };

// //   return (
// //     <GoogleMap
// //       mapContainerStyle={{ height: '400px', width: '100%' }}
// //       zoom={8}
// //       center={origin}
// //       onClick={handleMapClick}
// //       onLoad={onLoad}
// //     >
// //       {origin && <Marker position={origin} />}
// //       {destination && <Marker position={destination} />}
// //       {directions && <DirectionsRenderer directions={directions} />}
// //     </GoogleMap>
// //   );
// // }

// import React, { useEffect, useState } from 'react';
// import { GoogleMap, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
// import { useLocation } from 'react-router';

// export default function ShowRoute() {
//   const location = useLocation();

//   const [map, setMap] = useState(null);
//   const [directions, setDirections] = useState(null);

//   const onLoad = (map) => {
//     setMap(map);
//   };

//   const points = location.state.points;
//   const lengthPoints = points.length - 1;
//   const origin = { lat: points[0].x, lng: points[0].y }; // Example: New York City
//   const destination = { lat: points[lengthPoints].x, lng: points[lengthPoints].y }; // Example: Los Angeles
//   const [wayPoints, setWayPoints] = useState([{}]);

//   useEffect(() => {
//     const newWayPoints = [];

//     for (let index = 1; index < lengthPoints; index++) {
//       newWayPoints.push({
//         location: { lat: points[index].x, lng: points[index].y },
//         stopover: true
//       });
//     }

//     setWayPoints(prevWayPoints => [...prevWayPoints, ...newWayPoints]);
//   }, [points, lengthPoints]);

//   const renderDirections = (directions) => {
//     setDirections(directions);
//   };

//   return (
//     <GoogleMap
//       mapContainerStyle={{ height: '400px', width: '100%' }}
//       zoom={8}
//       center={origin}
//       onLoad={onLoad}
//     >
//       {directions && <DirectionsRenderer directions={directions} />}
//       <DirectionsService
//         options={{
//           destination: destination,
//           origin: origin,
//           waypoints: wayPoints, // corrected the prop name to 'waypoints'
//           travelMode: 'WALKING',
//         }}
//         callback={renderDirections}
//       />
//     </GoogleMap>
//   );
// }

import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import { useLocation } from 'react-router';

export default function ShowRoute() {
  const location = useLocation();

  const [map, setMap] = useState(null);
  const [directions, setDirections] = useState(null);

  const onLoad = (map) => {
    setMap(map);
  };

  const points = location.state.points;
  const lengthPoints = points.length - 1;
  const origin = { lat: points[0].x, lng: points[0].y }; // Example: New York City
  const destination = { lat: points[lengthPoints].x, lng: points[lengthPoints].y }; // Example: Los Angeles
  const [wayPoints, setWayPoints] = useState([]);

  useEffect(() => {
    const newWayPoints = points.slice(1, lengthPoints).map(point => ({
      location: { lat: point.x, lng: point.y },
      stopover: true
    }));

    setWayPoints(prevWayPoints => [...prevWayPoints, ...newWayPoints]);
  }, [points, lengthPoints]);

  const renderDirections = (directions) => {
    setDirections(directions);
  };

  return (
    <GoogleMap
      mapContainerStyle={{ height: '400px', width: '100%' }}
      zoom={8}
      center={origin}
      onLoad={onLoad}
    >
      {directions && <DirectionsRenderer directions={directions} />}
      <DirectionsService
        options={{
          destination: destination,
          origin: origin,
          waypoints: wayPoints,
          travelMode: 'WALKING',
        }}
        callback={renderDirections}
      />
    </GoogleMap>
  );
}
