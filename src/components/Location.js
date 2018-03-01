import React from 'react';

// const Location = () => (
//   <div>
//     <h1>Santiago</h1>
//   </div>
// )
// const Location = (props) => (
//     const city = props.city;
//     return (
//       <div>
//         <h1>{city}</h1>
//       </div>
//     )
// )
// reformulado se ve así
const Location = ({city}) => (
  <div>
    <h1>{city}</h1>
  </div>
);

export default Location;
