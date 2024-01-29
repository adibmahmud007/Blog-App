
import { useState } from 'react';
import './App.css'
import Watch from './components/Watch/Watch'
import { useEffect } from 'react';

function App() {
  // const watches=[
  //   {id:1,name: 'Apple',price: 2000},
  //   {id:2,name: 'samsung',price: 3000},
  //   {id:3,name: 'Mi',price: 4000}
  // ]
  const [watches,setWatches]=useState([]);
  
  useEffect(()=>{
    fetch('watches.json')
    .then(res=> res.json())
    .then(data=>setWatches(data));
  },[])

  return (
    <>
      <h3>Watches: </h3>
        {
          watches.map(watch=> <Watch key={watch.id} watch={watch}></Watch>)
        }
    </>
  )
}

export default App
