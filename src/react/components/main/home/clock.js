import React from "react"

const which_date = (sunrise, sunset) => {
  
}

export default function Clock({ data }) {

  if(data.astronomy.city){
    console.log(data)
    const city = data.astronomy && data.astronomy.city
    let times = data.astronomy && data.astronomy.astronomy
  
    // if astronomy is an array, take the first obj
    if(Array.isArray(times)){
      times = times[0]
    }
  
    const { sunrise, sunset } = times
  
    return (
      <div>
        {city}
        {sunrise}
        {sunset}
      </div>
  
    );
  } else {
    return "oops!"
  }

  
}
