import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';



const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries,setVisitedCountries]= useState([]);
    const [visitedFlags,setVisitedFlags]=useState([]);
    // console.log(visitedCountries,'visited contries ');
    // console.log(visitedCountries.length);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    const handleVisitedCountry= country=>
    {
        //console.log("mark visited");
        const newVisitedCountries=[...visitedCountries,country];
        
        setVisitedCountries(newVisitedCountries);
        //console.log(newVisitedCountries,'new visited colsole');
    }
    const handleVisitedFlags= flag=>{
        const newVisitedFlags=[...visitedFlags,flag];
        setVisitedFlags(newVisitedFlags);
    }


    //remove item from the array in a state
    //use filter to select all the ekements except the one you want to remove.filter will keep a side all the elements except the one you want to delete.


    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h4>Visited Countries: {visitedCountries.length}</h4>
                <h4>Visited Flags: {visitedFlags.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country=> <li key={countries.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map((flag,index)=> <img key={index} src={flag}></img>)
                }
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;