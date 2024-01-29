
import { useState } from 'react';
import './Country.css';
const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    //console.log(country,'country console');
    const [visited,setVisited]=useState(false);

    const handleVisited =()=>{
        setVisited(!visited);
    }

    const {name,flags,population,area,cca3}=country;
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'orange' : 'gray'}}>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={()=>handleVisitedCountry(country)}>Mark as visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            <p>{visited ? 'I have visited this country' : 'I want to visi this country'}</p>
        </div>
    );
};

export default Country;