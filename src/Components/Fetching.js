import React, { useState,useEffect } from 'react'
import DataMapped from './DataMapped';

export default function Fetching() {
    const [data,setData] =useState([])

    useEffect(() => {
        async function getData() {
            const value = await fetch("http://localhost:8080/meals").then((d) => d.json());
            // console.log(data);
            setData(value);
            console.log("data-",value);
            // <DataMapped value={data}/>
        }
        getData()
    }, [])
  return (
    <div>
      
    </div>
  )
}
