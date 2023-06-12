// // import * as React from 'react';
// // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';

// // export default function StaticDateTimePickerLandscape() {
// //   return ( 
// //     <LocalizationProvider dateAdapter={AdapterDayjs}>
// //       <StaticDateTimePicker orientation="landscape" />
// //     </LocalizationProvider>
// //   );
// // }




// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
// import dayjs from 'dayjs'; // Import dayjs for date/time manipulation

// // Example usage
// export default function MyComponent() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>

//       {/* Use the StaticDateTimePicker component */}
//       <StaticDateTimePicker
//         value={dayjs()} // Set the initial value using dayjs
//         onChange={(newValue) => {
//           // Handle the new value
//           console.log(newValue);
//         }}
//         renderInput={(params) => <input {...params} />} // Render input component
//       />

//     </LocalizationProvider>
//   );
// }
