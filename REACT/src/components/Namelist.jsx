import React from 'react'

function Namelist({names}) {

  return (
    <ul>
        {names.map((name,index) => (
            <li key={index}>{name}</li>
        ))}
    </ul>
  );
}

export default Namelist
